const util = require('util');
import { Service, Inject } from 'typedi';
import { MiddlewareInterface, NextFn, ResolverData } from 'type-graphql';

import { ENV_NAMES } from 'core/constants'
import { GraphQLContext } from 'resolvers/graphql.context';

// import * as newrelic from 'newrelic';
// newrelic.setTransactionName(name);

@Service()
export class GlobalLoggerMiddleware implements MiddlewareInterface<GraphQLContext> {
  constructor(
    @Inject(ENV_NAMES.DEV) protected DEV,
  ) { }

  async use({ context, info }: ResolverData<GraphQLContext>, next: NextFn) {
    if (!context.dataLoaderInitialized) {
      const operation = info.operation.operation.toLocaleUpperCase();
      const method = info.operation.name ? info.operation.name.value : ""

      if (this.DEV) console.info(`[${operation}][${method}][INPUT]:`, util.inspect(info.variableValues, false, null, true));
    }

    try {
      context.dataLoaderInitialized = true;
      return await next();
    } catch (err) {
      console.info('[ERROR]: ', err)
      throw err;
    }
  }
}