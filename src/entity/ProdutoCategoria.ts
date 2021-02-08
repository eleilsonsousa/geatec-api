import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, OneToOne, JoinColumn, Index } from "typeorm";
import Empresa from "./Empresa";
import EntityGeneric from "./EntityGeneric";
import Unidade from "./Unidade";

@Entity('tb_produtos_categorias')
export default class ProdutoCategoria extends EntityGeneric {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({ length: 150 })
    nome: string;

    
    /** RELACIONAMENTOS */


    /** AUTO INCREMENTADOS  */

    @CreateDateColumn()
    criadoEm: Date;

    @UpdateDateColumn()
    atualizadoEm: Date;
}
