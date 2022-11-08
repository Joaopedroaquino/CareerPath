import { Inject, Injectable } from "@nestjs/common";
import { IReturnEmployeeDTO } from "../../contracts/dto/IReturnEmployeeDTO";
import { Employee } from "../../contracts/entities/Employee.entity";
import { IEmployeeRepository } from "../../contracts/repositories/IEmployeeRepository";

@Injectable()
export class ListEmployeeUseCase {
    constructor(
        @Inject('EmployeeRepository')
        private employeeRepository: IEmployeeRepository,
    ) { }

    public async execute(employee: IReturnEmployeeDTO): Promise<IReturnEmployeeDTO[]> {
        return await this.employeeRepository.list(employee);
    }
}