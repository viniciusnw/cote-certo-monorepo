import { GraphQLContext } from 'resolvers/graphql.context';
import { Arg, Ctx, Mutation, Query, Resolver } from 'type-graphql';

@Resolver()
export class CMSGraphQLResolver {

  constructor() { }

  @Query(returns => String)
  async store(
    @Ctx() context: GraphQLContext,
  ): Promise<String> {
    return ''
  }

  @Query(returns => String)
  async storesAndBrands(
    @Ctx() context: GraphQLContext,
  ): Promise<String> {
    return ''
  }

  @Query(returns => String)
  async page(
    @Ctx() context: GraphQLContext,
  ): Promise<String> {
    return ''
  }

  @Query(returns => String)
  async pageList(
    @Ctx() context: GraphQLContext,
  ): Promise<String> {
    return ''
  }
}
