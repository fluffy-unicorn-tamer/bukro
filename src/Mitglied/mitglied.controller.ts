/*
https://docs.nestjs.com/controllers#controllers
*/

import { Controller, Get, Post, Delete, Body, Param } from '@nestjs/common';
import { MitgliedService } from './mitglied.service';
import { Mitglied } from './mitglied';

@Controller('mitglieder')
export class MitgliedController {
  constructor(private readonly mitgliedService: MitgliedService) {}
  @Get()
  getAllMitglieder() {
    return this.mitgliedService.getAllMitglieder();
  }

  @Get('name')
  getMitgliedByName(@Body() body: any) {
    return this.mitgliedService.getMitgliedByName(body);
  }

  @Get('nachname')
  getMitgliedByNachname(@Body() body: any) {
    return this.mitgliedService.getMitgliedByNachname(body);
  }

  @Post()
  addNewMitglied(@Body() body: Mitglied) {
    return this.mitgliedService.addNewMitglied(body);
  }

  @Delete(':id')
  deleteMitgliedById(@Param() params) {
    return this.mitgliedService.deleteMitgliedById(params);
  }
}
