import { GraphQLContext } from 'resolvers/graphql.context';
import { Arg, Ctx, Mutation, Query, Resolver, UseMiddleware } from 'type-graphql';

import { ProductUnion, ProductEnum } from './../Product/types/product.object-type'
import { AuthRepository, UserRepository, GeneralRepository } from 'data/repositories'

@Resolver()
export class CustomerGraphQLResolver {

  constructor(
    private AuthRepository: AuthRepository,
    private UserRepository: UserRepository
  ) { }

  @Query(returns => ProductUnion)
  async favoritesList(
    @Ctx() context: GraphQLContext,
  ): Promise<typeof ProductUnion> {
    return {} as typeof ProductUnion
  }

  @Query(returns => ProductUnion)
  async compareList(
    @Ctx() context: GraphQLContext,
  ): Promise<typeof ProductUnion> {
    return {} as typeof ProductUnion
  }
}
