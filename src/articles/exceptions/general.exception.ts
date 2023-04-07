import { HttpException, HttpStatus } from '@nestjs/common';

export class InternalError extends HttpException {
  constructor() {
    super('Falha na requisição de artigos', HttpStatus.INTERNAL_SERVER_ERROR);
  }
}
