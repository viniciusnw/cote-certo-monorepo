import { Field, ObjectType } from 'type-graphql';

@ObjectType()
export class ProductFavorites {

  @Field()
  name: string;
}