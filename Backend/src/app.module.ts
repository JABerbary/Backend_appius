import {Module} from '@nestjs/common';
import {MongooseModule} from '@nestjs/mongoose';
import {AppController} from './app.controller';
import {AppService } from './app.service';
import {UsersModule} from './users/users.module'
import {ThrottlerModule } from '@nestjs/throttler';
import { ConfigModule,ConfigService } from '@nestjs/config';

@Module({
  imports: [ThrottlerModule.forRoot([{
    ttl: 60,
    limit: 10,
  }]),
  ConfigModule.forRoot({
    isGlobal: true,
    envFilePath: [`./.env`],
  }),
  MongooseModule.forRootAsync({
    imports: [ConfigModule],
    useFactory: (configService: ConfigService) => ({
      uri: configService.get('DATABASE_URI'),
      dbName: configService.get('projects'),
    }),
    inject: [ConfigService],
  }),
  
 
  UsersModule,
],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
