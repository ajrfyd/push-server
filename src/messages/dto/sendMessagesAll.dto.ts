import { IsEnum, IsOptional, IsString } from 'class-validator';
import { BaseMessageDto } from './baseMessages.dto';

enum Dir {
  GO = 'go',
  BACK = 'back',
}

export class sendMessagesAllDto extends BaseMessageDto {
  @IsEnum(Dir)
  type: Dir;
}
