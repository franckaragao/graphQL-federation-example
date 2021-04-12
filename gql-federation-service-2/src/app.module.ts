import { Module } from '@nestjs/common';
import { GraphQLFederationModule } from '@nestjs/graphql';
import { Site } from './site.type';
import { RouteService } from './route.service';
import { RouteResolvers } from './route.resolver';

@Module({
  imports: [
    GraphQLFederationModule.forRoot({
      autoSchemaFile: true,
      buildSchemaOptions: {
        orphanedTypes: [Site],
      },
    }),
  ],
  providers: [RouteService, RouteResolvers],
})
export class AppModule {}
