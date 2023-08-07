import { Field, ObjectType } from 'type-graphql';

@ObjectType()
export class ProductHorizontal {

  @Field()
  name: string;
}