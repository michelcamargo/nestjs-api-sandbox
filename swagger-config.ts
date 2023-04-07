import { DocumentBuilder } from '@nestjs/swagger';

const swaggerConfig = new DocumentBuilder()
  .setTitle('NestJS Walkthrough - Michel Camargo')
  .setDescription(
    'REST API em desenvolvimento com o intuito de conceber e aprender novas tecnologias',
  )
  .setContact(
    'Michel Camargo',
    'http://michelcamargo.vercel.app/',
    'michelcamargo@outlook.com',
  )
  .setVersion('0.1')
  .build();

export default swaggerConfig;
