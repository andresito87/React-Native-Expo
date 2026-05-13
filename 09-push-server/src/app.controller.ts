import { BadRequestException, Body, Controller, Post } from '@nestjs/common';
import { PushNotificationsService } from './push-notifications/push-notifications.service';

@Controller()
export class AppController {
  constructor(
    private readonly pushNotificationsService: PushNotificationsService,
  ) {}

  @Post('send-notification')
  sendNotification(@Body() body: { to: string[] }) {
    if (!body) {
      throw new BadRequestException('Tokens have not been sent');
    }

    return this.pushNotificationsService.sendNotification(body.to); // Recibe el array de tokens a los que enviar la notificación
  }
}
