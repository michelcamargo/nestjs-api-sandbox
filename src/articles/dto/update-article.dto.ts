import { PartialType } from '@nestjs/swagger';
import { CreateArticleDto } from './create-article.dto';

/**
 * Partial pois pode ter todas as propriedades do CreateArticleDto
 */
export class UpdateArticleDto extends PartialType(CreateArticleDto) {}
