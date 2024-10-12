import { Controller, Get, Param, Res } from '@nestjs/common';
import { AppService } from './app.service';
import { Response } from 'express';

@Controller(':id')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  async redirect(@Param('id') id: string, @Res() res: Response) {
    const urlToRedirect = await this.appService.findOne(id);
    return res.redirect(urlToRedirect);
  }
}
