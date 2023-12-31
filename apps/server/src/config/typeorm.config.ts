import { TypeOrmModuleAsyncOptions } from '@nestjs/typeorm';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { User } from '../modules/user/entities/user.entity';

export function getTypeormConfig(): TypeOrmModuleAsyncOptions {
  return {
    useFactory: (configService: ConfigService) => ({
      type: 'postgres',
      host: configService.getOrThrow('POSTGRES_HOST'),
      port: configService.getOrThrow('POSTGRES_PORT'),
      username: configService.getOrThrow('POSTGRES_USER'),
      password: configService.getOrThrow('POSTGRES_PASSWORD'),
      database: configService.getOrThrow('POSTGRES_DB'),
      entities: [User],
      synchronize: true,
    }),
    inject: [ConfigService],
    imports: [ConfigModule],
  };
}
