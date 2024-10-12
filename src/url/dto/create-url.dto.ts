import { IsString, IsUrl, IsInt, IsOptional } from 'class-validator';

export class CreateUrlDto {
  @IsString()
  id: string;

  @IsUrl()
  initialUrl: string;

  @IsInt()
  @IsOptional()
  userId: number | null;

  @IsInt()
  @IsOptional()
  clicks?: number;
}
