import { Module } from '@nestjs/common';
import { GraphQLFederationModule } from '@nestjs/graphql';
import { SiteResolvers } from './site.resolver';
import { SiteService } from './site.service';

@Module({
  imports: [
    GraphQLFederationModule.forRoot({
      autoSchemaFile: true,
    }),
  ],
  providers: [SiteService, SiteResolvers],
})
export class AppModule {}
