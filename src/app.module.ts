import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { userModule } from './user/user.module';
import { UserEntity } from './user/user.entity';
import { ClientEntity } from './client/client.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'lobatoSQL',
      password: '1234',
      database: 'PI',
      entities: [UserEntity, ClientEntity],
      synchronize: true,
    }),
    userModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
