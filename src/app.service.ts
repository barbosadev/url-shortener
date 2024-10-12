import { Injectable } from '@nestjs/common';
import { UrlService } from './url/url.service';
import { UpdateUrlDto } from './url/dto/update-url.dto';

@Injectable()
export class AppService {
  constructor(private readonly urlService: UrlService) {}

  async findOne(id: string) {
    const url = await this.urlService.findOne(id);
    await this.update(id, url);
    return url.initialUrl;
  }

  update(id: string, updateUrlDto: UpdateUrlDto) {
    updateUrlDto.clicks = updateUrlDto?.clicks + 1;
    return this.urlService.update(id, updateUrlDto);
  }
}
