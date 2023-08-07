import { Field, ObjectType } from 'type-graphql';

@ObjectType()
export class ProductCompare {

  @Field()
  name: string;
}