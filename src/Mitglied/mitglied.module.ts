/*
https://docs.nestjs.com/modules
*/

import { Module } from '@nestjs/common';
import { MitgliedController } from './mitglied.controller';
import { MitgliedService } from './mitglied.service';

@Module({
  imports: [],
  controllers: [MitgliedController],
  providers: [MitgliedService],
})
export class MitgliedModule {}
