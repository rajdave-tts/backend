import { HealthCheck } from './entities/healthCheck.entity';
import { Module } from '@nestjs/common';
import { HealthCheckService } from './health.check.service';
import { HealthCheckController } from './health.check.controller';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([HealthCheck])],
  controllers: [HealthCheckController],
  providers: [HealthCheckService],
})
export class HealthCheckModule {}
