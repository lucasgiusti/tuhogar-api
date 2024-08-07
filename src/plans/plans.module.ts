import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { PlansController } from './plans.controller';
import { PlansService } from './plans.service';
import { PlanSchema } from './interfaces/plan.schema';
import { IsExistingPlanConstraint } from './validators/is-existing-plan.validator';
import { FirebaseAdmin } from 'src/config/firebase.setup';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Plan', schema: PlanSchema }])],
  controllers: [PlansController],
  providers: [PlansService, IsExistingPlanConstraint, FirebaseAdmin],
  exports: [PlansService],
})
export class PlansModule {}
