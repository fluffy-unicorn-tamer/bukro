/*
https://docs.nestjs.com/providers#services
*/

import { Injectable } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';
import { response } from 'express';
import { Mitglied } from './mitglied';
const prisma = new PrismaClient();

@Injectable()
export class MitgliedService {
  async getAllMitglieder() {
    const respond = await prisma.mitglieder.findMany();
    return respond;
  }

  async getMitgliedByName(body: any) {
    const respond = await prisma.mitglieder.findMany({
      where: {
        name: body.name,
      },
    });
    return respond;
  }

  async getMitgliedByNachname(body: any) {
    const respond = await prisma.mitglieder.findMany({
      where: {
        nachname: body.nachname,
      },
    });
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

  async deleteMitgliedById(params: any) {
    const respond = await prisma.mitglieder.delete({
      where: {
        id: params.id,
      },
    });
    return respond;
  }
}
