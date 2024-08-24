import { Body, Controller, Post } from '@nestjs/common';
import { MessagesService } from './messages.service';
import { sendMessagesAllDto } from './dto/sendMessagesAll.dto';

@Controller('messages')
export class MessagesController {
  constructor(private readonly messagesService: MessagesService) {}

  @Post('push/start')
  postStartMessages(@Body() body: sendMessagesAllDto) {
    return this.messagesService.pushAll(body);
  }

  // @Post('push')
  // postMessage(@Body() body: sendMessageDto) {
  //   return this.messagesService.sendMsg(body);
  // }
}
