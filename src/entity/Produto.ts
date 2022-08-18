import { Entity, PrimaryGeneratedColumn, Column } from "typeorm"

@Entity()
export class Produto {
    @PrimaryGeneratedColumn()
    idProduto: number

    @Column()
    descricao: string

    @Column()
    preco: number

    @Column()
    estoque: number

}