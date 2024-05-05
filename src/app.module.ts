import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MessagesModule } from './messages/messages.module';
import { AuthService } from './auth/auth.service';
import { AuthModule } from './auth/auth.module';
import { PrismaModule } from './prisma/prisma.module';
import { UserService } from './user/user.service';
import { UserModule } from './user/user.module';
import { ConnectedUsersController } from './connected-users/connected-users.controller';
import { ConnectedUsersService } from './connected-users/connected-users.service';
import { ConnectedUsersModule } from './connected-users/connected-users.module';

@Module({
  imports: [MessagesModule, AuthModule, PrismaModule, UserModule, ConnectedUsersModule],
  controllers: [AppController, ConnectedUsersController, ConnectedUsersController],
  providers: [AppService, AuthService, UserService, ConnectedUsersService],
})
export class AppModule {}
