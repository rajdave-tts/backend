import { Injectable } from '@nestjs/common';
import { HealthCheck } from './entities/healthCheck.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { HealthCheckDto } from './healthCheckDto/healthCheck.dto';

@Injectable()
export class HealthCheckService {
  constructor(
    @InjectRepository(HealthCheck)
    public readonly healthCheckRepo: Repository<HealthCheck>,
  ) {}

  saveData(dto: HealthCheckDto): Promise<HealthCheck> {
    const data = this.healthCheckRepo.create(dto);
    return this.healthCheckRepo.save(data);
  }
}
