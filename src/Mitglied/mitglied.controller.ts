/*
https://docs.nestjs.com/controllers#controllers
*/

import { Controller, Get, Post, Body } from '@nestjs/common';
import { MitgliedService } from './mitglied.service';
  import { Mitglied } from './mitglied';



@Controller('mitglieder')
export class MitgliedController {


  constructor(private readonly mitgliedService: MitgliedService) {}
  @Get()
  getAllMitglieder(){
    return this.mitgliedService.getAllMitglieder();
  }


  @Post()
  addNewMitglied(@Body()  body: Mitglied) {
    return this.mitgliedService.addNewMitglied(body);
  }
}
