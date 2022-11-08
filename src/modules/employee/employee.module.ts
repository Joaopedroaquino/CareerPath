import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Employee } from './contracts/entities/Employee.entity';
import { EmployeeRouter } from './routes/employee.routes';
import { ListEmployeeUseCase } from './usecase/listEmployee/listEmployeeUseCase';

@Module({
    imports:[ TypeOrmModule.forFeature([Employee])],
    providers: [ListEmployeeUseCase],

    controllers:[EmployeeRouter]
    

})
export class EmployeeModule {}
