import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Request,
  UseGuards,
} from '@nestjs/common';
import { UrlService } from './url.service';
import { CreateUrlDto } from './dto/create-url.dto';
import { UpdateUrlDto } from './dto/update-url.dto';
import { OptionalAuthGuard } from 'src/auth/optional-auth.guard';
import { AuthGuard } from 'src/auth/auth.guard';

@Controller('api/url')
export class UrlController {
  constructor(private readonly urlService: UrlService) {}

  @UseGuards(OptionalAuthGuard)
  @Post()
  create(@Body() createUrlDto: CreateUrlDto, @Request() req) {
    const userId = req.user ? req.user.id : null;
    return this.urlService.create({ ...createUrlDto, userId });
  }

  @UseGuards(AuthGuard)
  @Get()
  findAll(@Request() req) {
    return this.urlService.findAll(req.user.id);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.urlService.findOne(id);
  }

  @UseGuards(AuthGuard)
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateUrlDto: UpdateUrlDto) {
    return this.urlService.update(id, updateUrlDto);
  }

  @UseGuards(AuthGuard)
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.urlService.remove(id);
  }
}
