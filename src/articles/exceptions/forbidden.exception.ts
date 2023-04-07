import { HttpException, HttpStatus } from '@nestjs/common';

export class Creation extends HttpException {
  constructor() {
    super('Não permitido a criar artigos', HttpStatus.FORBIDDEN);
  }
}
