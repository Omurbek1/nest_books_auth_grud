import { Controller, Get, Redirect } from '@nestjs/common';

@Controller()
export class AppController {
  @Get('/')
  @Redirect('/books', 302)
  root() {
    return { message: 'Redirecting to /books...' };
  }
}
