import { Field, ObjectType } from 'type-graphql';

@ObjectType()
export class ProductFull {

  @Field()
  name: string;
}