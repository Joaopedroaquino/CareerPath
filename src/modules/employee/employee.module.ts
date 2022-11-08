import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Employee } from './contracts/entities/Employee.entity';
import { EmployeeRouter } from './routes/employee.routes';

@Module({
    imports:[ TypeOrmModule.forFeature([Employee])],
    controllers:[EmployeeRouter]

})
export class EmployeeModule {}
