import {
  BadRequestException,
  Injectable,
  InternalServerErrorException,
} from '@nestjs/common';
import Expo, { ExpoPushMessage, ExpoPushTicket } from 'expo-server-sdk';

// Library Documentation: https://github.com/expo/expo-server-sdk-node

@Injectable()
export class PushNotificationsService {
  private readonly expo = new Expo();
  async sendNotification(toTokens: string[]) {
    const areExpoTokens = toTokens.every((token) =>
      Expo.isExpoPushToken(token),
    );

    if (!areExpoTokens) {
      throw new BadRequestException(
        'There are strings that are not expo tokens',
      );
    }

    const messages: ExpoPushMessage[] = toTokens.map((token) => ({
      to: token,
      sound: 'default',
      title: 'Notificación de prueba',
      body: 'Esto es un mensaje de prueba enviado desde mi servidor de NestJS',
      data: {
        chatId: 'ABCD-1234',
      },
    }));

    const chunks = this.expo.chunkPushNotifications(messages);
    const tickets: ExpoPushTicket[] = [];
    for (const chunk of chunks) {
      try {
        const ticketChunk = await this.expo.sendPushNotificationsAsync(chunk);
        console.log('result of sending push messages to Expo:', ticketChunk);
        tickets.push(...ticketChunk);
      } catch (error) {
        console.error(error);
        throw new InternalServerErrorException(
          'Error sending push notifications chunks',
        );
      }
    }

    return {
      done: true,
    };
  }
}
