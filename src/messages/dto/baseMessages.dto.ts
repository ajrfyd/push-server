import { IsOptional, IsString } from 'class-validator';

export class BaseMessageDto {
  @IsString({
    each: true,
  })
  tokens: string[];

  @IsString()
  @IsOptional()
  title?: string;

  @IsString()
  @IsOptional()
  body?: string;

  @IsString({})
  @IsOptional({})
  icon?: string;
}
