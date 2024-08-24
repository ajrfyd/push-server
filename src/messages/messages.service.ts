import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { sendMessagesAllDto } from './dto/sendMessagesAll.dto';
import admin from 'firebase-admin';

@Injectable()
export class MessagesService {
  // async sendMsg(dto: sendMessageDto) {
  //   const message = {
  //     token: dto.token,
  //     data: {
  //       title: dto.title,
  //       body: dto.body,
  //       icon: dto.icon || '/icons/hwr-logo.png',
  //     },
  //   };

  //   const result = await admin
  //     .messaging()
  //     .send(message)
  //     .catch((e) => {
  //       throw new InternalServerErrorException(
  //         '예상치 못한 에러가 발생하였습니다.',
  //       );
  //     });
  //   return result;
  // }

  async pushAll(dto: sendMessagesAllDto) {
    const messages = dto.tokens.map((token) => ({
      token,
      data: {
        title: '버스가 출발 하였습니다.',
        body: `센터에서 ${Date.now()}시간에 출발 하였습니다.`,
        icon: dto.icon || '/icons/hwr-logo.png',
      },
    }));

    try {
      const result = await admin.messaging().sendEach(messages);
      return result;
    } catch (e) {
      throw new InternalServerErrorException(
        e.message || '예상하지 못한 에러 발생.',
      );
    }
  }
}
