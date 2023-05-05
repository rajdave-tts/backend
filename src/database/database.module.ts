import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import config from '../../typeorm.config';

@Module({
  imports: [TypeOrmModule.forRoot(config)],
  exports: [TypeOrmModule],
})
export class DatabaseModule {}
