import { Module } from '@nestjs/common';
import { UrlService } from './url.service';
import { UrlController } from './url.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Url } from './entities/url.entity';

@Module({
  controllers: [UrlController],
  providers: [UrlService],
  imports: [TypeOrmModule.forFeature([Url])],
  exports: [UrlService],
})
export class UrlModule {}
