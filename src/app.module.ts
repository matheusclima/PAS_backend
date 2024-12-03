import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BandsModule } from './bands/bands.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MusiciansModule } from './musicians/musicians.module';
import { BandmembersModule } from './bandmembers/bandmembers.module';
import { UsersModule } from './users/users.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'aws-0-sa-east-1.pooler.supabase.com',
      port: 6543,
      username: 'postgres.lrqkndbehfzbkfttdimy',
      password: 'WkNjt9lEZi225aGE',
      database: 'postgres',
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      synchronize: true,
    }),
    BandsModule,
    MusiciansModule,
    BandmembersModule,
    UsersModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
