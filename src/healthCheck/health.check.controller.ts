import { HealthCheckService } from './health.check.service';
import {
  Body,
  Controller,
  Post,
  UploadedFiles,
  UseInterceptors,
} from '@nestjs/common';
import { HealthCheckDto } from './healthCheckDto/healthCheck.dto';
import { HealthCheck } from './entities/healthCheck.entity';
import { FilesInterceptor } from '@nestjs/platform-express';

@Controller()
export class HealthCheckController {
  constructor(private readonly healthCheckService: HealthCheckService) {}

  @Post('/uploadForm')
  @UseInterceptors(FilesInterceptor('files'))
  async saveData(
    @UploadedFiles() files: Array<Express.Multer.File>,
    @Body() healthCheckDto: HealthCheckDto,
  ): Promise<HealthCheck> {
    healthCheckDto.filesName = files.map((file) => file.originalname);
    const result = await this.healthCheckService.saveData(healthCheckDto);
    return result;
  }
}
