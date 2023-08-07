import { Container } from 'typedi';
import { RunnerType } from 'core/types'
import { ENV_NAMES } from 'core/constants';
import { DbConfigure, MemCachedConfigure } from 'core/services'

declare var process;

export default class WorkerMigration implements RunnerType {

  constructor() { }

  public async configure(): Promise<any> {
    await this.configureEnvValues();
    await this.configureDB();
    await this.configureCache();
  }

  private async configureDB() {
    console.info('Will connect to MongoDB');
    await Container.get(DbConfigure).connectToDb();
    console.info('Connected to MongoDB!');
  }

  private async configureCache() {
    console.info('Will connect to MemCached');
    await Container.get(MemCachedConfigure).connectToCache();
    console.info('Connecting to MemCached!');
  }

  private configureEnvValues() {
    Container.set(ENV_NAMES.DEV, () => {
      const { NODE_ENV } = process.env;
      return NODE_ENV === 'development'
    });
  }

  public async run(param: string): Promise<any> {
    console.info('Migration finished');
  }
}
