import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, OneToOne, JoinColumn, Index, ManyToOne } from "typeorm";
import Empresa from "./Empresa";
import EntityGeneric from "./EntityGeneric";
import ProdutoCategoria from "./ProdutoCategoria";
import Unidade from "./Unidade";

@Entity('tb_produtos')
export  default class Produto extends EntityGeneric {



    @Index("nome-index")
    @Column({ length: 150 })
    nome: string;

    @Column({default: 0})
    precoCompra: number;

    @Column({default: 0})
    precoVenda: number;

    @Column({ length: 150, nullable: true })
    observacao: string;

    /** RELACIONAMENTOS */

    @ManyToOne(type => Unidade, { nullable: true })
    @JoinColumn({name: 'idUnidade'})
    unidade: Unidade;

    @OneToOne(type => ProdutoCategoria, {eager: true})
    @JoinColumn({ name: 'idProdutoCategoria'})
    categoria: ProdutoCategoria;

    /** AUTO INCREMENTADOS  */

    @CreateDateColumn()
    criadoEm: Date;

    @UpdateDateColumn()
    atualizadoEm: Date;
}