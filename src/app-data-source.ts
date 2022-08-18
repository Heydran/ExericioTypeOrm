import { DataSource } from "typeorm"
import { Cliente } from "./entity/Cliente"
import { Venda } from "./entity/Venda"
import { Produto } from "./entity/Produto"
import { Carrinho } from "./entity/Carrinho"
const myDataSource = new DataSource({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "postgres",
    password: "1234",
    database: "postgres",
    entities: [Cliente, Venda, Produto, Carrinho],
    logging: false,
    synchronize: true
})

export { myDataSource }