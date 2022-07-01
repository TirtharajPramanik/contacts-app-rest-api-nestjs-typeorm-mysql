import { Controller, Get } from '@nestjs/common';
import { AuthService } from './auth.service';
import { User } from './user.entity';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Get()
  async getUser(): Promise<User[]> {
    return await this.authService.getAll();
  }
}
