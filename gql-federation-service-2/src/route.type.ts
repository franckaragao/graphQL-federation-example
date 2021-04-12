import { Directive, Field, ID, Int, ObjectType } from '@nestjs/graphql';
import { Site } from './site.type';

@ObjectType()
@Directive('@key(fields: "id")')
export class Route {
  @Field((type) => ID)
  id: number;

  @Field()
  name: string;

  @Field()
  velocity: string;

  @Field()
  type?: string;

  @Field()
  status?: string;

  @Field()
  idSiteA: number;

  @Field()
  idSiteB: number;

  @Field((type) => Site)
  siteA?: Site;
}
