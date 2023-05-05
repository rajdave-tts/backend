import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { join } from 'path';

const config: TypeOrmModuleOptions = {
  type: 'postgres',
  host: process.env.DB_HOST || 'localhost',
  port: 5432,
  username: process.env.DB_USER || 'postgres',
  password: process.env.DB_PASS || '7856',
  database: process.env.DB_NAME || 'health_check',
  entities: [join(__dirname, '**', '*.entity.{js,ts}')],
  synchronize: process.env.NODE_ENV !== 'production',
};

export default config;
