import { Module } from '@nestjs/common'
import { TagsService } from './tags.service'
import { TagsController } from './tags.controller'
import { PrismaService } from '@app/services'

@Module({
  controllers: [TagsController],
  providers: [TagsService, PrismaService],
})
export class TagsModule {}
