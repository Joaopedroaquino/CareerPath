import { ApiProperty } from "@nestjs/swagger";

export class IReturnEmployeeDTO{
    @ApiProperty()
    id:number
    @ApiProperty()
    empregado_nome:string
    @ApiProperty()
    empregado_idade: string
    @ApiProperty()
    empregado_genero: string

}