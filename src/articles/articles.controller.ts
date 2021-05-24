import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common'
import { Article, Prisma } from '@prisma/client'
import { ArticlesService } from './articles.service'

type ArticleCreateDto = {
  article: {
    title: string
    description: string
    body: string
    tagList: string[]
  }
}

@Controller('articles')
export class ArticlesController {
  constructor(private readonly articlesService: ArticlesService) {}

  @Post()
  async create(@Body() { article }: ArticleCreateDto): Promise<Article> {
    const user = {}

    return this.articlesService.create({
      article,
      user,
    })
  }

  @Get()
  async findAll(): Promise<Article[]> {
    return this.articlesService.findAll()
  }

  @Get(':slug')
  async findOne(@Param('slug') slug: string): Promise<Article> {
    return this.articlesService.findOne({ slug })
  }

  @Patch(':slug')
  async update(
    @Param('slug') slug: string,
    @Body() updateArticleDto: Prisma.ArticleUpdateInput
  ): Promise<Article> {
    return this.articlesService.update({ slug }, updateArticleDto)
  }

  @Delete(':slug')
  async remove(@Param('slug') slug: string): Promise<Article> {
    return this.articlesService.remove({ slug })
  }
}
