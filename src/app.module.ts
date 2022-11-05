import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DataSource } from 'typeorm';
import { EmployeeModule } from './modules/employee/employee.module';
import { UserModule } from './modules/user/user.module';
import { DatabaseModule } from './shared/modules/database/database.module';

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
    UserModule,
    DatabaseModule,],
  controllers: [],
  providers: [],
})
export class AppModule {
  constructor(private dataSource: DataSource) {
    console.log(__dirname)
  }
}
