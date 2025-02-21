import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  Query,
  UseGuards
} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import {
  ApiBearerAuth,
  ApiOperation,
  ApiQuery,
  ApiResponse,
  ApiTags,
} from '@nestjs/swagger';
import { CreateDuacoderUseCase } from '../../../application/use-cases/duacoder/create-duacoder.usecase';
import { DeleteDuacoderUseCase } from '../../../application/use-cases/duacoder/delete-duacoder.usecase';
import { CreateDuacoderDTO } from '../../../application/use-cases/duacoder/dtos/create-duacoder.dto';
import { DeleteDuacoderDTO } from '../../../application/use-cases/duacoder/dtos/delete-duacoder.dto';
import { DuacoderDTO } from '../../../application/use-cases/duacoder/dtos/duacoder.dto.ts';
import { FindAllDuacoderDTO } from '../../../application/use-cases/duacoder/dtos/findAll.duacoder.dto.ts';
import { FindAllDuacoderUseCase } from '../../../application/use-cases/duacoder/find-all-duacoder.usecase';
import { FindDuacoderUseCase } from '../../../application/use-cases/duacoder/find-duacoder.usecase.ts';
import { UpdateDuacoderUseCase } from '../../../application/use-cases/duacoder/update-duacoder.usecase';

@ApiTags('duacoders')
@ApiBearerAuth('access-token')
@Controller('duacoders')
@UseGuards(AuthGuard('jwt'))
export class DuacoderController {
  constructor(
    private readonly createDuacoderUseCase: CreateDuacoderUseCase,
    private readonly findAllDuacoderUseCase: FindAllDuacoderUseCase,
    private readonly updateDuacoderUseCase: UpdateDuacoderUseCase,
    private readonly deleteDuacoderUseCase: DeleteDuacoderUseCase,
    private readonly findDuacoderUseCase: FindDuacoderUseCase,
  ) {}

  @Post()
  @ApiOperation({ summary: 'Create a new Duacoder' })
  @ApiResponse({
    status: 201,
    description: 'The duacoder has been successfully created.',
  })
  @ApiResponse({
    status: 400,
    description: 'Bad request.',
  })
  async create(@Body() createDuacoderDTO: CreateDuacoderDTO) {
    return this.createDuacoderUseCase.execute(createDuacoderDTO);
  }

  @Get()
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
  async findAll(@Query() query: FindAllDuacoderDTO): Promise<DuacoderDTO[]> {
    return this.findAllDuacoderUseCase.execute(query);
  }

  @Get(':nif')
  @ApiOperation({ summary: 'List one of the dualcoders' })
  @ApiResponse({
    status: 201,
    description: 'The dualcoder is listed.',
  })
  @ApiResponse({
    status: 400,
    description: 'Bad request.',
  })
  async findOne(@Param('nif') nif: string): Promise<CreateDuacoderDTO | null> {
    return this.findDuacoderUseCase.execute(nif);
  }

  @Put(':nif')
  @ApiOperation({ summary: 'Update one dualcoder' })
  @ApiResponse({
    status: 201,
    description: 'The dualcoder is updated succesfully.',
  })
  @ApiResponse({
    status: 400,
    description: 'Bad request.',
  })
  async update(
    @Param('nif') nif: string,
    @Body() createDuacoderDTO: CreateDuacoderDTO,
  ) {
    return this.updateDuacoderUseCase.execute(nif, createDuacoderDTO);
  }

  @Delete(':nif')
  @ApiOperation({ summary: 'Delete dualcoders' })
  @ApiResponse({
    status: 201,
    description: 'The dualcoders is removed succesfully.',
  })
  @ApiResponse({
    status: 400,
    description: 'Bad request.',
  })
  async delete(@Body() deleteDuacoder: DeleteDuacoderDTO) {
    return this.deleteDuacoderUseCase.execute(deleteDuacoder.nifs);
  }
}
