import { Module } from '@nestjs/common'
import { ArticlesModule } from 'src/articles'
import { AppController } from './app.controller'
import { AppService } from './app.service'

@Module({
  imports: [ArticlesModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
