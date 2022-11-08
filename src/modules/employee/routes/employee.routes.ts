import { Controller, Get, Query, Res } from "@nestjs/common";
import { ApiResponse, ApiTags } from "@nestjs/swagger";
import { IReturnEmployeeDTO } from "../contracts/dto/IReturnEmployeeDTO";
import { ListEmployeeUseCase } from "../usecase/listEmployee/listEmployeeUseCase";

@ApiTags('Employee')
@Controller('employee')
export class EmployeeRouter{
    constructor(
        private listEmployeeUseCase : ListEmployeeUseCase,

    ){}

    @ApiResponse({ type: IReturnEmployeeDTO})
    @Get()
    public async list(
        @Res() response: IReturnEmployeeDTO,
        @Query() employee: IReturnEmployeeDTO

        
    ): Promise<IReturnEmployeeDTO[]> {
        const res = await this.listEmployeeUseCase.execute(employee)
        
        return res
    }
        


        
    }

   

