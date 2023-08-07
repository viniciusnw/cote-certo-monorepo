import * as path from 'path';
import * as cors from 'cors';
import * as express from 'express';
import * as compression from 'compression';

import { Container } from 'typedi';
import { buildSchema } from 'type-graphql';
import { useExpressServer } from 'routing-controllers';
import { ApolloServer, GraphQLUpload } from 'apollo-server-express';

import { RunnerType } from 'core/types'
import { ENV_NAMES } from 'core/constants';
import { getIpAddress} from 'core/services'
import { formatError, GlobalLoggerMiddleware } from 'core/middlewares';

const { PORT, DEBUGPORT } = process.env;
const ROOT = path.join(__dirname, '..');
const ENABLE_GPL_PLAYGROUND = process.env.ENABLE_GPL_PLAYGROUND === 'true';

export default class Server implements RunnerType {

  private express: express.Application;

  public async configure() {
    await this.configureEnvValues();
    await this.configureExpress();
    await this.configureGraphQL();
  }

  private async configureEnvValues() {
    console.info('Will set EnvValues');

    const {
      JWT,
      REST_API,
      CRYPTO_SECRET_KEY,
    } = ENV_NAMES

    // ENV
    Container.set(ENV_NAMES.DEV, () => {
      const { NODE_ENV } = process.env;
      return NODE_ENV === 'development'
    });

    // REST
    Container.set(REST_API, {
      URL: process.env.REST_API_URL,
      CLIENT_ID: process.env.REST_API_CLIENT_ID,
      EXPIRES_IN: process.env.REST_API_EXPIRES_IN,
      CLIENT_SECRET: process.env.REST_API_CLIENT_SECRET,
    });

    // JWT
    Container.set(JWT, {
      EXPIRATION_TIME: process.env.JWT_EXPIRATION_TIME,
      SECRET_NEW: process.env.JWT_SECRET_NEW
    });
    Container.set(CRYPTO_SECRET_KEY, process.env.CRYPTO_SECRET_KEY);
  }

  private async configureExpress() {
    console.info('Will connect Express');

    let server = express();
    server.use(cors());
    server.use(compression());
    server.use(express.json({ limit: '500mb' }));
    server.disable('x-powered-by');
    useExpressServer(server, {
      defaultErrorHandler: false,
      controllers: [ROOT + '/**/*.controller.{ts,js}'],
    });
    this.express = server;
    this.express.listen(PORT);
  }

  private async configureGraphQL() {
    console.info('Will configure GraphQL');

    const graphQLSchema = await buildSchema({
      resolvers: [ROOT + '/**/*.resolver.{ts,js}'],
      globalMiddlewares: [GlobalLoggerMiddleware],
      container: Container
    });

    const graphQLServer = new ApolloServer({
      playground: ENABLE_GPL_PLAYGROUND,
      introspection: true,
      schema: graphQLSchema,
      formatError,
      tracing: true,
      context: ({ req }) => ({ ip: getIpAddress(req), request: req }),
    });
    graphQLServer.applyMiddleware({ app: this.express });
  }

  public async run(): Promise<any> {
    console.info(`HTTP Listening to port ${PORT}`);
    console.info(`DEBUG Listening to port ${DEBUGPORT}`);
  }
}
