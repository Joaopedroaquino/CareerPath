import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Employee } from './contracts/entities/Employee.entity';

@Module({
    imports:[ TypeOrmModule.forFeature([Employee])],

})
export class EmployeeModule {}
