import { Directive, Field, ID, ObjectType } from '@nestjs/graphql';

@ObjectType()
@Directive('@key(fields: "id")')
export class Site {
  @Field((type) => ID)
  id: number;

  @Field()
  name: string;

  @Field({ nullable: true })
  origin?: string;

  @Field({ nullable: true })
  status?: string;
}
