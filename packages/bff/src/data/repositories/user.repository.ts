import { Service } from "typedi";
import { encrypt, decrypt } from "core/services";
import { HttpDataSource } from "data/datasource";

// INPUT TYPES

@Service()
export class UserRepository {
  constructor(
    private CoteCertoHttpDataSource: HttpDataSource.CoteCertoHttpDataSource
  ) { }

  public async login(): Promise<any> {
    return await this.CoteCertoHttpDataSource.auth({
      clientId: 'clientId',
      clientSecret: 'clientSecret'
    })
  }
}
