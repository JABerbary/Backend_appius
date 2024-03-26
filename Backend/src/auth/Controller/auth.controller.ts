import { AuthService } from '../Service/auth.service';
import { LocalAuthGuard } from '../Local/local-auth.guard';
import { Controller, UseGuards, Request, Post } from '@nestjs/common';
import { ApiBody } from '@nestjs/swagger';
import { LoginDTO, UserBody } from '../../Model/users.model';


@Controller()
export class AuthController {

    constructor(
        private authService: AuthService,
    ) { }

    @UseGuards(LocalAuthGuard)

    @Post('auth/login')
    @ApiBody({ type: LoginDTO })
    async login(@Request() req) {
        return this.authService.login(req.user);
    }
}
