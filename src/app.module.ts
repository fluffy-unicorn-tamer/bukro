import { MitgliedService } from './Mitglied/mitglied.service';
import { MitgliedModule } from './Mitglied/mitglied.module';
import { MitgliedController } from './Mitglied/mitglied.controller';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [MitgliedModule],
  controllers: [MitgliedController, AppController],
  providers: [MitgliedService, AppService],
})
export class AppModule {}
