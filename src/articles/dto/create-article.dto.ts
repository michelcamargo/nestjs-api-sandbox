import { ApiProperty } from '@nestjs/swagger';

/**
 * O DTO (DATA TRANSFER OBJECT) é um objeto que define como a informação será transitada pela rede
 * @ApiProperty é necessário para a definir as propriedades da classe visíveis ao SwaggerModule
 */
export class CreateArticleDto {
  @ApiProperty()
  title: string;

  @ApiProperty({ required: false })
  description?: string;

  @ApiProperty()
  body: string;

  @ApiProperty({ required: false, default: false })
  published?: boolean = false;
}
