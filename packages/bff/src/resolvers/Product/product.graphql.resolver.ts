import { GraphQLContext } from 'resolvers/graphql.context';
import { Arg, Ctx, Mutation, Query, Resolver } from 'type-graphql';

@Resolver()
export class ProductGraphQLResolver {

  constructor() { }

  @Query(returns => String)
  async productDetails(
    @Ctx() context: GraphQLContext,
  ): Promise<String> {
    return ''
  }
}
