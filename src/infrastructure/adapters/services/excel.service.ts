import { Injectable } from '@nestjs/common';
import * as ExcelJS from 'exceljs';
import { Response } from 'express';

@Injectable()
export class ExcelService {
  generateExcelFile(response: Response, duacoders: any[]) {
    const workbook = new ExcelJS.Workbook();
    const worksheet = workbook.addWorksheet('Duacoders');

    worksheet.columns = [
      { header: 'NIF', key: 'nif', width: 20 },
      { header: 'Name', key: 'name', width: 30 },
      { header: 'Department', key: 'department', width: 20 },
      { header: 'Position', key: 'position', width: 20 },
      { header: 'Biography', key: 'biography', width: 50 },
      { header: 'Likes Onion Tortilla', key: 'likesOnionTortilla', width: 25 },
      { header: 'Birth Date', key: 'birthDate', width: 20 },
    ];

    duacoders.forEach((duacoder) => {
      worksheet.addRow(duacoder);
    });

    response.setHeader(
      'Content-Type',
      'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
    );
    response.setHeader(
      'Content-Disposition',
      'attachment; filename=duacoders.xlsx',
    );

    workbook.xlsx
      .write(response)
      .then(() => {
        response.end();
      })
      .catch((error) => {
        console.error('Error al generar el archivo Excel:', error);
        response.status(500).send('Error al generar el archivo Excel');
      });
  }
}
