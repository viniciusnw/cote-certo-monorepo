import { Field, Int, ObjectType } from 'type-graphql';
import { UserUnion } from 'resolvers/User/types/user.object-type';
import { Customer } from 'resolvers/User/types/customer.object-type';
import { Seller } from 'resolvers/User/types/seller.object-type';

@ObjectType()
export class Login {

  @Field(type => UserUnion)
  user: Seller | Customer;

  @Field()
  token: string;

  @Field(type => Int)
  expirationTime: number;

  @Field()
  role: string
}
