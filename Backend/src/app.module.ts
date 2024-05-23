import {Module} from '@nestjs/common';
import {MongooseModule} from '@nestjs/mongoose';
import {AppController} from './app.controller';
import {AppService } from './app.service';
import {UsersModule} from './users/users.module'
import {ThrottlerModule } from '@nestjs/throttler';


@Module({
  imports: [ThrottlerModule.forRoot([{
    ttl: 60,
    limit: 10,
  }]),
  MongooseModule.forRoot(process.env.DATABASE_URI,{ 
    dbName : process.env.DATABASE_NAME,
    auth: {
      username: process.env.DATABASE_USER,
      password: process.env.DATABASE_PASS,
    },
  }),
 
  UsersModule,
],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
