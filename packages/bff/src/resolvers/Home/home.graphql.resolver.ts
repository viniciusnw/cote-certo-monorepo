import { GraphQLContext } from 'resolvers/graphql.context';
import { Arg, Ctx, Mutation, Query, Resolver } from 'type-graphql';

@Resolver()
export class HomeGraphQLResolver {

  constructor() { }

  @Query(returns => String)
  async homeBanners(
    @Ctx() context: GraphQLContext,
  ): Promise<String> {
    return ''
  }
}
