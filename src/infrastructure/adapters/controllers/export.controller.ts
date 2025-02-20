import { Controller, Get, Query, Res } from '@nestjs/common';
import { ApiOperation, ApiQuery, ApiResponse } from '@nestjs/swagger';
import { Response } from 'express';
import { FindAllDuacoderDTO } from '../../../application/use-cases/duacoder/dtos/findAll.duacoder.dto.ts';
import { FindAllDuacoderUseCase } from '../../../application/use-cases/duacoder/find-all-duacoder.usecase.js';
import { ExcelService } from '../services/excel.service.js';

@Controller('export')
export class ExportController {
  constructor(
    private readonly findAllDuacoderUseCase: FindAllDuacoderUseCase,
    private readonly excelService: ExcelService,
  ) {}

  @Get('xls')
  @ApiOperation({
    summary: 'List of all dualcoders with pagination and filters',
  })
  @ApiResponse({
    status: 201,
    description: 'The dualcoders are listed.',
  })
  @ApiResponse({
    status: 400,
    description: 'Bad request.',
  })
  @ApiQuery({
    name: 'page',
    required: false,
    description: 'The page number for pagination.',
    type: Number,
    default: 1,
  })
  @ApiQuery({
    name: 'pageSize',
    required: false,
    description: 'The number of items per page.',
    type: Number,
    default: 10,
  })
  @ApiQuery({
    name: 'nif',
    required: false,
    description: 'Filter by nif.',
    type: String,
  })
  @ApiQuery({
    name: 'name',
    required: false,
    description: 'Filter by name.',
    type: String,
  })
  @ApiQuery({
    name: 'department',
    required: false,
    description: 'Filter by department.',
    type: String,
  })
  @ApiQuery({
    name: 'position',
    required: false,
    description: 'Filter by position.',
    type: String,
  })
  async exportXLS(@Res() res: Response, @Query() query: FindAllDuacoderDTO) {
    const duacodersToExport = await this.findAllDuacoderUseCase.execute(query);

    await this.excelService.generateExcelFile(res, duacodersToExport);
  }
}
