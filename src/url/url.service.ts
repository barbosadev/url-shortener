import { Injectable } from '@nestjs/common';
import { CreateUrlDto } from './dto/create-url.dto';
import { UpdateUrlDto } from './dto/update-url.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Url } from './entities/url.entity';
import { Repository } from 'typeorm';
import { v4 as uuidv4 } from 'uuid';

@Injectable()
export class UrlService {
  constructor(
    @InjectRepository(Url)
    private urlRepository: Repository<Url>,
  ) {}

  async create(createUrlDto: CreateUrlDto) {
    let shortUrl: string;
    let isUnique: boolean = false;

    do {
      shortUrl = uuidv4().slice(0, 6);
      const existingUrl = await this.urlRepository.findOne({
        where: { id: shortUrl },
      });
      isUnique = !existingUrl;
    } while (!isUnique);
    createUrlDto.clicks = 0;
    createUrlDto.id = shortUrl;

    const { id } = await this.urlRepository.save(createUrlDto);
    return { url: `localhost:3000/${id}` };
  }

  findAll(id: number) {
    return this.urlRepository.find({
      where: { userId: id },
    });
  }

  findOne(id: string) {
    return this.urlRepository.findOne({
      where: { id },
      withDeleted: true,
    });
  }

  async update(id: string, updateUrlDto: UpdateUrlDto) {
    await this.urlRepository.update(id, updateUrlDto);
    return this.urlRepository.findOne({
      where: { id },
    });
  }

  remove(id: string) {
    return this.urlRepository.softDelete(id);
  }
}
