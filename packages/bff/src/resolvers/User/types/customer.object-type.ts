import { Field, ObjectType, Int } from 'type-graphql';

@ObjectType()
export class Customer {

  @Field()
  id: string;

  @Field()
  name: string;

  @Field()
  email: string;
}
