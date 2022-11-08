import { Injectable } from "@nestjs/common";
import { Repository } from "typeorm";
import { IReturnEmployeeDTO } from "../contracts/dto/IReturnEmployeeDTO";
import { Employee } from "../contracts/entities/Employee.entity";
import { IEmployeeRepository } from "../contracts/repositories/IEmployeeRepository";

@Injectable()
export class EmployeeTypeORMrepository implements IEmployeeRepository {
    private ormRepository: Repository<Employee>
    public async list(): Promise<IReturnEmployeeDTO[]> {
        const employee = await this.ormRepository.find()
        return 
    }
    
}