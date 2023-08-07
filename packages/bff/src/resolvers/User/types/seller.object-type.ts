import { Field, ObjectType, Int } from 'type-graphql';

@ObjectType()
export class Seller {

  @Field()
  id: string;

  @Field()
  name: string;

  @Field()
  email: string;
}
