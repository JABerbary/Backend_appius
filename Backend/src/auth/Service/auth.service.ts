
import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UsersService } from '../../users/users.service';


@Injectable()
export class AuthService {
  constructor(private usersService: UsersService,
    private jwtService: JwtService) { }


  // async validateUser(username: string, pass: string): Promise<any> {
  //   const user = await this.usersService.getByEmail(username);
  //   if (user && user.passwords === pass) {
  //     const { passwords, ...result } = user;
  //     return result;
  //   }
  //   return null;
  // }


  async login(user: any) {

    const payload = { email: user.email, sub: user.userId };
    return {
      access_token: this.jwtService.sign(payload),
    };
  }
}
