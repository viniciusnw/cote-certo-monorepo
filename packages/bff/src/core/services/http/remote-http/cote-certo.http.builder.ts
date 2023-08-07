import { Inject, Service } from 'typedi';
import { ENV_NAMES } from 'core/constants';
import { HttpServiceBuilder } from 'core/services';

@Service()
export class CoteCertoApiBuilder extends HttpServiceBuilder {

  constructor(
    @Inject(ENV_NAMES.REST_API) private REST_API,
  ) {
    super(
      REST_API.URL,
      { 'Content-Type': 'application/json' },
      30000,
    );
  }

  // clone(): CoteCertoApiBuilder {
  //   return new CoteCertoApiBuilder(
  //     this.REST_API.URL,
  //   );
  // }
}
