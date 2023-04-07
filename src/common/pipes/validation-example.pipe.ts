import { PipeTransform, Injectable, ArgumentMetadata } from '@nestjs/common';

/**
 * Os pipes devem implementar o método transform para atender o contrato da interface PipeTransform
 * O método transform sempre possui os parâmetros 'value' e 'metadata'
 *
 * value: Argumento atual do método (antes de ser recebido pelo controlador da rota)
 * metadata: Metadados do argumento atual do método, suas propriedades são definidas como:
 * {
 *   type: 'body' | 'query' | 'param' | 'custom'; // Tipo do argumento
 *   metatype?: Type<unknown>; // no caso de uma string, será String
 *   data?: string; // A string passada ao decorator, ex: @Body('string')
 * }
 */

@Injectable()
export class ValidationExamplePipe implements PipeTransform {
  transform(value: any, metadata: ArgumentMetadata) {
    console.log('Metadados do argumento:', metadata);

    return value;
  }
}
