import { Injectable } from '@nestjs/common';
import { Response } from 'express';
import puppeteer from 'puppeteer';

@Injectable()
export class PdfService {
  async generateDuacoderPdf(response: Response, duacoder: any) {
    const htmlContent = `
      <html>
        <head>
          <style>
            body { font-family: Arial, sans-serif; }
            .header { font-size: 24px; text-align: center; }
            .subheader { font-size: 18px; }
            .image { margin-top: 10px; }
            .content { margin-top: 20px; }
          </style>
        </head>
        <body>
          <div class="header">Duacoder Profile</div>
          <img src="${duacoder.photoUrl}" class="image" width="100" height="100"/>
          <div class="content">
            <div class="subheader">NIF: ${duacoder.nif}</div>
            <div class="subheader">Name: ${duacoder.name}</div>
            <div class="subheader">Department: ${duacoder.department}</div>
            <div class="subheader">Position: ${duacoder.position}</div>
            <div class="subheader">Biography: ${duacoder.biography}</div>
            <div class="subheader">Likes Onion Tortilla: ${duacoder.likesOnionTortilla}</div>
            <div class="subheader">Birth Date: ${duacoder.birthDate}</div>
          </div>
        </body>
      </html>
    `;

    const browser = await puppeteer.launch();
    const page = await browser.newPage();

    await page.setContent(htmlContent);

    const pdfBuffer = await page.pdf({ format: 'A4' });

    await browser.close();

    response.setHeader('Content-Type', 'application/pdf');
    response.setHeader(
      'Content-Disposition',
      'attachment; filename=duacoder-profile.pdf',
    );

    response.end(pdfBuffer);
  }
}
