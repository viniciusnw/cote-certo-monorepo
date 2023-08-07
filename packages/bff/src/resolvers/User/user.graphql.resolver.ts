import { GraphQLContext } from 'resolvers/graphql.context';
import { Arg, Ctx, Mutation, Query, Resolver, UseMiddleware } from 'type-graphql';

import { ProductUnion, ProductEnum } from './../Product/types/product.object-type'
import { AuthRepository, UserRepository, GeneralRepository } from 'data/repositories'
import { Login } from './types/login.object-type';
@Resolver()
export class UserGraphQLResolver {

  constructor(
    private AuthRepository: AuthRepository,
    private UserRepository: UserRepository
  ) { }

  @Mutation(returns => Login)
  async login(
    @Ctx() context: GraphQLContext,
    @Arg('email') email: string,
    @Arg('password') password: string,
  ): Promise<Login> {
    return {} as Login
  }
}
