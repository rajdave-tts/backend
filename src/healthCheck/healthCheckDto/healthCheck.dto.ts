import { Optional } from '@nestjs/common';
import { IsEmail, IsOptional, IsPhoneNumber, IsString } from 'class-validator';
export class HealthCheckDto {
  @IsString()
  companyUEN: string;
  @IsString()
  companyName: string;
  @IsString()
  companyFullName: string;
  @IsString()
  position: string;
  @IsEmail()
  email: string;
  @IsString()
  phoneNumber: string;
  @IsString()
  @Optional()
  filesName: Array<string>;
}
