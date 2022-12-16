import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { GraphQLModule } from '@nestjs/graphql';
import { ExampleResolver } from './example.resolver';

@Module({
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: true,
      // plugins: [new ComplexityPlugin(20)],
      cors: { origin: true },
    }),
  ],
  controllers: [AppController],
  providers: [AppService, ExampleResolver],
})
export class AppModule {}
