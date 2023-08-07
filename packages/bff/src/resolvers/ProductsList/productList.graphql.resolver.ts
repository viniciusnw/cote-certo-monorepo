import { GraphQLContext } from 'resolvers/graphql.context';
import { Arg, Ctx, Mutation, Query, Resolver } from 'type-graphql';

import { ProductUnion, ProductEnum } from './../Product/types/product.object-type'
@Resolver()
export class ProductListGraphQLResolver {

  constructor() { }

  @Query(returns => ProductUnion)
  async searchProducts(
    @Ctx() context: GraphQLContext,
  ): Promise<typeof ProductUnion> {
    return {} as typeof ProductUnion
  }
  
  @Query(returns => ProductUnion)
  async listProductsByCategorie(
    @Ctx() context: GraphQLContext,
  ): Promise<typeof ProductUnion> {
    return {} as typeof ProductUnion
  }

  @Query(returns => ProductUnion)
  async listProductsWithPriceLimit(
    @Ctx() context: GraphQLContext,
  ): Promise<typeof ProductUnion> {
    return {} as typeof ProductUnion
  }
  
  @Query(returns => String)
  async listHomeProducts(
    @Ctx() context: GraphQLContext,
  ): Promise<String> {
    return ''
  }
  
  @Query(returns => String)
  async listCategories(
    @Ctx() context: GraphQLContext,
  ): Promise<String> {
    return ''
  }
}
