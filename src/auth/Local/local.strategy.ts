
import { Strategy } from 'passport-local';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { AuthService } from '../Service/auth.service';


@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
    constructor(private authService: AuthService) {
        super(
            {
                usernameField: 'email',
                passwordField: 'passwords',
            }
        );
    }


    async validate(username: string, passwords: string): Promise<any> {
        const user = await this.authService.validateUser(username, passwords);
        if (!user) {
            throw new UnauthorizedException();
        }
        return user;
    }
}
