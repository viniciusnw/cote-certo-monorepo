import { Field, ObjectType } from 'type-graphql';

@ObjectType()
class Carousel {

  @Field()
  mobileUrl: string;

  @Field()
  desktopUrl: string;

  @Field()
  redirectUrl: string;
  
  @Field({ nullable: true })
  title: string;

  @Field({ nullable: true })
  subTitle: string;
}

@ObjectType()
export class HomeBanners {

  @Field(type => [Carousel])
  carousel: Array<Carousel>;
}
