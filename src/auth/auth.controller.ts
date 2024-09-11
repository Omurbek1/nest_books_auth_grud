import { Controller, Post, Body, UnauthorizedException } from '@nestjs/common';
import { AuthService } from './auth.service';
import { RegisterUserDto } from './dto/register-user.dto';
import { LoginUserDto } from './dto/login-user.dto';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('register')
  async register(@Body() registerUserDto: RegisterUserDto) {
    if (!registerUserDto.email || !registerUserDto.password) {
      throw new UnauthorizedException('Email and password are required');
    }

    if (
      await this.authService.validateUser(
        registerUserDto.email,
        registerUserDto.password,
      )
    ) {
      throw new UnauthorizedException('User already exists');
    }
    await this.authService.register(
      registerUserDto.email,
      registerUserDto.password,
    );
    return { message: 'User registered successfully' };
  }

  @Post('login')
  async login(@Body() loginUserDto: LoginUserDto) {
    const user = await this.authService.validateUser(
      loginUserDto.email,
      loginUserDto.password,
    );
    if (!user) {
      throw new UnauthorizedException('Invalid credentials');
    }
    return this.authService.login(user);
  }
}
