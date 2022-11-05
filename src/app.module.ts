import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { EmployeeModule } from './modules/employee/employee.module';
import { UserModule } from './modules/user/user.module';

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


  ),
    EmployeeModule,
    UserModule,],
  controllers: [],
  providers: [],
})
export class AppModule {}
