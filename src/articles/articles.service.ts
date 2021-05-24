import { Injectable } from '@nestjs/common'
import { Article, Prisma } from '@prisma/client'

import { PrismaService } from '../services'

@Injectable()
export class ArticlesService {
  constructor(private prisma: PrismaService) {}

  async create(data: Prisma.ArticleCreateInput): Promise<Article> {
    return this.prisma.article.create({
      data,
    })
  }

  async findAll(): Promise<Article[]> {
    return this.prisma.article.findMany()
  }

  async findOne(where: Prisma.ArticleWhereUniqueInput): Promise<Article> {
    return this.prisma.article.findUnique({
      where,
    })
  }

  async update(
    where: Prisma.ArticleWhereUniqueInput,
    data: Prisma.ArticleUpdateInput
  ): Promise<Article> {
    return this.prisma.article.update({
      data,
      where,
    })
  }

  async remove(where: Prisma.ArticleWhereUniqueInput): Promise<Article> {
    return this.prisma.article.delete({
      where,
    })
  }
}
