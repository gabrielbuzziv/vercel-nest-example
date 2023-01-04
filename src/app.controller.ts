import { Controller, Get, Header, Headers } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(@Headers() headers: any): string {
    console.log('🚀 Headers', headers);

    return this.appService.getHello();
  }
}
