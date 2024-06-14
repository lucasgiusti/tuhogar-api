import { Module } from '@nestjs/common';
import { AdvertisementsController } from './advertisements.controller';
import { AdvertisementsService } from './advertisements.service';
import { MongooseModule } from '@nestjs/mongoose';
import { AdvertisementSchema } from './interfaces/advertisement.schema';
import { FirebaseAdmin } from 'src/config/firebase.setup';
import { AdvertisementCodesModule } from 'src/advertisement-codes/advertisement-codes.module';
import { AmenitiesModule } from 'src/amenities/amenities.module';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Advertisement', schema: AdvertisementSchema }]),
    AdvertisementCodesModule,
    AmenitiesModule,
  ],
  controllers: [AdvertisementsController],
  providers: [AdvertisementsService, FirebaseAdmin]
})
export class AdvertisementsModule {}
