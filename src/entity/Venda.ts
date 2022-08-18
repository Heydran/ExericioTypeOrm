import { Entity, PrimaryGeneratedColumn, Column, OneToOne, JoinColumn } from "typeorm"
import { Cliente } from "./Cliente"

@Entity()
export class Venda {
    @PrimaryGeneratedColumn()
    idVenda: number

    @Column()
    data: string

    @Column()
    status: string

    @OneToOne(() => Cliente)
    @JoinColumn()
    idcliente: Cliente
}