import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  ParseIntPipe,
  HttpStatus,
  Query,
  ParseUUIDPipe,
} from '@nestjs/common';
import { ApiCreatedResponse, ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { ArticleEntity } from './entities/article.entity';
import { ArticlesService } from './articles.service';
import { CreateArticleDto } from './dto/create-article.dto';
import { UpdateArticleDto } from './dto/update-article.dto';
import Exceptions from './exceptions';

@Controller('articles')
@ApiTags('articles')
export class ArticlesController {
  constructor(private readonly articlesService: ArticlesService) {}

  /**
   * Cria um novo artigo
   * @param createArticleDto body: Conteúdo do artigo a ser criado
   */
  @Post()
  @ApiCreatedResponse({ type: ArticleEntity })
  create(@Body() createArticleDto: CreateArticleDto) {
    try {
      return this.articlesService.create(createArticleDto);
    } catch (error) {
      throw new Exceptions.General.InternalError();
    }
  }

  /**
   * Busca todos os artigos disponíveis
   */
  @Get()
  @ApiOkResponse({ type: ArticleEntity, isArray: true })
  findAll() {
    try {
      return this.articlesService.findAll();
    } catch (error) {
      throw new Exceptions.General.InternalError();
    }
  }

  /**
   * Busca todos os artigos-rascunho disponíveis
   */
  @Get('drafts')
  @ApiOkResponse({ type: ArticleEntity, isArray: true })
  findDrafts() {
    try {
      return this.articlesService.findDrafts();
    } catch (error) {
      throw new Exceptions.General.InternalError();
    }
  }

  /**
   * Busca artigo relacionado ao identificador fornecido
   * @param id validado como numerical-string
   */
  @Get(':id')
  @ApiOkResponse({ type: ArticleEntity })
  findOne(@Param('id', ParseIntPipe) id: string) {
    return this.articlesService.findOne(+id); // + faz o cast para number
  }

  /**
   * Atualiza artigo já existente de acordo com identificador fornecido
   * @param id validado como numerical-string com excessão personalizada NOT_ACCEPTABLE
   * @param updateArticleDto body: conteúdo do artigo para atualização
   */
  @Patch(':id')
  @ApiOkResponse({ type: ArticleEntity })
  update(
    @Param(
      'id',
      new ParseIntPipe({ errorHttpStatusCode: HttpStatus.NOT_ACCEPTABLE }),
    )
    id: string,
    @Body() updateArticleDto: UpdateArticleDto,
  ) {
    return this.articlesService.update(+id, updateArticleDto);
  }

  /**
   * Busca o artigo relacionado ao identificador fornecido
   * @param id validado como numerical-string
   */
  @Get(':id')
  @ApiOkResponse({ type: ArticleEntity })
  findOneByQuery(@Query('id', ParseIntPipe) id: string) {
    return this.articlesService.findOne(+id);
  }

  /**
   * Busca o artigo relacionado ao UUID fornecido
   * @param uuid validado como Universal Unique Identifier
   */
  @Get(':uuid')
  @ApiOkResponse({ type: ArticleEntity })
  findOneByUUID(@Param('uuid', new ParseUUIDPipe()) uuid: string) {
    return this.articlesService.findOne(+uuid);
  }

  /**
   * Remove artigo relacionado ao identificador fornecido
   * @param id validado como numerical-string
   */
  @Delete(':id')
  @ApiOkResponse({ type: ArticleEntity })
  remove(@Param('id', ParseIntPipe) id: string) {
    return this.articlesService.remove(+id);
  }
}
