import { Controller, Get } from "@nestjs/common";
import { ApiResponse, ApiTags } from "@nestjs/swagger";
import { IReturnEmployeeDTO } from "../contracts/dto/IReturnEmployeeDTO";

@ApiTags('Employee')
@Controller('employee')
export class EmployeeRouter{
    constructor(){}

    @ApiResponse({type: IReturnEmployeeDTO})
    @Get()
    public async getAll(){
        return {}
    }

   
}
