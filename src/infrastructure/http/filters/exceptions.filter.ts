import { ArgumentsHost, Catch, ExceptionFilter } from '@nestjs/common';
import { Response } from 'express';
import { RegisterErrorLogUseCase } from '../../../application/use-cases/deadletter/deadletter.usecase';

@Catch()
export class AllExceptionsFilter implements ExceptionFilter {
  constructor(
    private readonly registerErrorLogUseCase: RegisterErrorLogUseCase,
  ) {}

  catch(exception: any, host: ArgumentsHost) {
    const context = host.switchToHttp();
    const response = context.getResponse<Response>();
    const request = context.getRequest();

    const errorMessage = exception.message || 'Unknown error';
    const stackTrace = exception.stack || null;
    const errorType = exception.constructor.name;

    this.registerErrorLogUseCase.execute(errorMessage, stackTrace, errorType);

    response.status(500).json({
      statusCode: 500,
      message: errorMessage,
      error: errorType,
    });
  }
}
