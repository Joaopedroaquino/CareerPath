import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    TypeOrmModule.forRoot(
    {
      type: 'postgres',
      host: 'localhost',
      port: 5437,
      username: 'root',
      password: 'root',
      database: 'root',
      entities: [__dirname + '/**/*.entity{.js,.ts}'],
      synchronize: true,
    }


  ),],
  controllers: [],
  providers: [],
})
export class AppModule {}
