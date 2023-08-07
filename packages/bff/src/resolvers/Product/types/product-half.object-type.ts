import { Field, ObjectType } from 'type-graphql';

@ObjectType()
export class ProductHalf {

  @Field()
  name: string;
}