import { Module } from '@nestjs/common';
import { GraphQLGatewayModule } from '@nestjs/graphql';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    GraphQLGatewayModule.forRoot({
      server: {
        cors: true,
      },
      gateway: {
        serviceList: [
          { name: 'sites', url: process.env.SITES_SERVICE },
          { name: 'routes', url: process.env.ROUTES_SERVICE },
        ],
      },
    }),
  ],
})
export class AppModule {}
