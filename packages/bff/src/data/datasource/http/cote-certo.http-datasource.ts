import { Service } from 'typedi';

import { DataSourceError } from 'core/errors'
import { ThrowsWhenUncaughtException, Cached, CacheKey } from 'core/middlewares'

import { CoteCertoApiBuilder } from 'core/services/http/remote-http';

@Service()
export class CoteCertoHttpDataSource {

  constructor(
    private CoteCertoApiBuilder: CoteCertoApiBuilder,
  ) { }

  @ThrowsWhenUncaughtException(DataSourceError)
  async auth({ clientId, clientSecret }): Promise<any> {
    return this.CoteCertoApiBuilder
      .post('/customers/oauth2/token')
      .params({
        grant_type: 'client_credentials',
        client_id: clientId,
        client_secret: clientSecret,
      })
      .build()
      .execute()
  }

  @Cached()
  @ThrowsWhenUncaughtException(DataSourceError)
  async auth2(@CacheKey() { clientId, clientSecret }): Promise<any> {
    return this.CoteCertoApiBuilder
      .post('/customers/oauth2/token')
      .params({
        grant_type: 'client_credentials',
        client_id: clientId,
        client_secret: clientSecret,
      })
      .build()
      .execute()
  }
}
