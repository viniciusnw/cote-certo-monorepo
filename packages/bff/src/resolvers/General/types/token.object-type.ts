import { Field, ObjectType } from 'type-graphql';

import { UserUnion } from 'resolvers/User/types/user.object-type'
import { Seller } from 'resolvers/User/types/seller.object-type'
import { Customer } from 'resolvers/User/types/customer.object-type'

@ObjectType()
export class Token {

  @Field(type => UserUnion)
  user: Seller | Customer;

  @Field()
  role: string;

  @Field()
  retoken: string;

  @Field()
  iat: number;
  
  @Field()
  exp: number;
}
