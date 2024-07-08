import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from "@nestjs/config";
import { MongooseModule } from '@nestjs/mongoose';
import { ServeStaticModule } from '@nestjs/serve-static';
import { AccountsModule } from './accounts/accounts.module';
import { PlansModule } from './plans/plans.module';
import { UsersModule } from './users/users.module';
import { FirebaseAdmin } from './config/firebase.setup';
import { AdvertisementsModule } from './advertisements/advertisements.module';
import { join } from 'path';
import { AdvertisementCodesModule } from './advertisement-codes/advertisement-codes.module';
import { AmenitiesModule } from './amenities/amenities.module';
import { AlgoliaModule } from './algolia/algolia.module';
import { BulkUpdateDateModule } from './bulk-update-date/bulk-update-date.module';
import { ScheduleModule } from '@nestjs/schedule';

@Module({
  imports: [
    ScheduleModule.forRoot(),
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: ".env",
    }),
    MongooseModule.forRootAsync({
      imports: [
        ConfigModule,
        ServeStaticModule.forRoot({
          rootPath: join(__dirname, '..', 'uploads'),
          serveRoot: '/uploads',
        })
      ],
      useFactory: async (configService: ConfigService) => ({
        uri: configService.get<string>('MONGODB_URL'),
      }),
      inject: [ConfigService],
    }),
    AccountsModule,
    PlansModule,
    UsersModule,
    AdvertisementsModule,
    AdvertisementCodesModule,
    AmenitiesModule,
    AlgoliaModule,
    BulkUpdateDateModule,
  ],
  controllers: [],
  providers: [FirebaseAdmin],
})
export class AppModule {}
