import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { config } from 'dotenv';
config();
import { resolve } from 'path';

const typeOrmConfig: TypeOrmModuleOptions = {
  type: 'mysql',
  host: process.env.DB_HOST,
  port: Number(process.env.DB_PORT),
  username: process.env.DB_UNAME,
  password: process.env.DB_PASSWD,
  database: process.env.DB_DB,
  // entities: [__dirname + '/**/*.entity{.js,.ts}'],
  autoLoadEntities: true,
  synchronize: process.env.NODE_ENV == 'production' ? false : true,
};

export default typeOrmConfig;
