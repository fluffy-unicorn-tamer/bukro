/*
https://docs.nestjs.com/providers#services
*/

import { Injectable } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';
import { Mitglied } from './mitglied';
const prisma = new PrismaClient();

@Injectable()
export class MitgliedService {
  async getAllMitglieder() {
    const respond = await prisma.mitglieder.findMany();
    return respond;
  }

  async addNewMitglied(body: Mitglied) {
    //const respond = await prisma.mitglieder.create(body);
    const respond = await prisma.mitglieder.create({
      data: {
        name: body.name,
        nachname: body.nachname,
        geburtsdatum: body.geburtsdatum,
        iban: body.iban,
        hausnummer: body.hausnummer,
        strasse: body.strasse,
      },
    });
    return respond;
  }
}
