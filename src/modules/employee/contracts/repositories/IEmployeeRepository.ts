import { IReturnEmployeeDTO } from "../dto/IReturnEmployeeDTO";
import { Employee } from "../entities/Employee.entity";

export interface IEmployeeRepository {
    list(employee: IReturnEmployeeDTO): Promise <IReturnEmployeeDTO[]>
}