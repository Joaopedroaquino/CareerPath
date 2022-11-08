import { IReturnEmployeeDTO } from "../dto/IReturnEmployeeDTO";

export interface IEmployeeRepository {
    list(): Promise <IReturnEmployeeDTO>
}