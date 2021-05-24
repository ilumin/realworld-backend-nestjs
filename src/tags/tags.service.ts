import { Tag, Prisma } from '@prisma/client'
import { Injectable } from '@nestjs/common'
import { PrismaService } from '@app/services'

@Injectable()
export class TagsService {
  constructor(private prisma: PrismaService) {}

  async create(data: Prisma.TagCreateInput): Promise<Tag> {
    return this.prisma.tag.create({
      data,
    })
  }

  async findAll(where?: Prisma.TagWhereInput): Promise<Tag[]> {
    return this.prisma.tag.findMany({ where })
  }

  async findOne(where: Prisma.TagWhereUniqueInput): Promise<Tag> {
    return this.prisma.tag.findUnique({ where })
  }

  async update(
    where: Prisma.TagWhereUniqueInput,
    data: Prisma.TagUpdateInput
  ): Promise<Tag> {
    return this.prisma.tag.update({
      where,
      data,
    })
  }

  async remove(where: Prisma.TagWhereUniqueInput): Promise<Tag> {
    return this.prisma.tag.delete({
      where,
    })
  }
}
