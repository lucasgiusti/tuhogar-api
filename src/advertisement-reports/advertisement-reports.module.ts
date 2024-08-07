import { Module } from '@nestjs/common';
import { AdvertisementReportsController } from './advertisement-reports.controller';
import { AdvertisementReportsService } from './advertisement-reports.service';
import { MongooseModule } from '@nestjs/mongoose';
import { FirebaseAdmin } from 'src/config/firebase.setup';
import { AdvertisementReasonsModule } from 'src/advertisement-reasons/advertisement-reasons.module';
import { AdvertisementReportSchema } from './interfaces/advertisement-reports.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'AdvertisementReport', schema: AdvertisementReportSchema }]),
    AdvertisementReasonsModule,
  ],
  controllers: [AdvertisementReportsController],
  providers: [AdvertisementReportsService, FirebaseAdmin]
})
export class AdvertisementReportsModule {}
