import { Entity, PrimaryGeneratedColumn, Column,  ManyToOne } from "typeorm"
import { Produto } from "./Produto"
import { Venda } from "./Venda"

@Entity()
export class Carrinho {
    @PrimaryGeneratedColumn()
    idCarrinho: number

    @Column()
    data: string

    @Column()
    status: string
 
    @ManyToOne(() => Venda, (table) => table.idVenda)
    idVenda: Venda

    @ManyToOne(() => Produto, (table) => table.idProduto)
    idProduto: Produto
}