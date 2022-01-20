
import { Module } from '@nestjs/common';
import { AuthService } from './Service/auth.service';
import { UsersModule } from '../users/users.module';
import { PassportModule } from '@nestjs/passport';
import { LocalStrategy } from './Local/local.strategy';
import { AuthController } from './Controller/auth.controller';
import { JwtStrategy } from './Jwt/jwt.strategy';
import { JwtModule } from '@nestjs/jwt';
import { jwtConstants } from './constants';


@Module({

  // imports: [UsersModule, PassportModule.register({ defaultStrategy: 'bearer' })],
  imports: [UsersModule, PassportModule,
    JwtModule.register({
      secret: jwtConstants.secret,
      signOptions: { expiresIn: '60s' }, //tempo de expirtação do token 
    }),],

  controllers: [AuthController],
  providers: [AuthService, LocalStrategy, JwtStrategy],
})
export class AuthModule { }
