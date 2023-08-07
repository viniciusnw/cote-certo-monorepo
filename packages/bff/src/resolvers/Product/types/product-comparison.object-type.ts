import { Field, ObjectType } from 'type-graphql';

@ObjectType()
export class ProductComparison {

  @Field()
  name: string;
}