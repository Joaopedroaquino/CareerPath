import { Column, PrimaryColumn } from "typeorm";

export class Employee {
    @PrimaryColumn()
    id: number
    @Column({name: "empregado_nome"})
    name: string
    @Column({name: "empregado_idade"})
    age: string
    @Column({name: "empregado_genero"})
    gender: string
}