import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, OneToOne, JoinColumn, Index, ManyToOne } from "typeorm";
import Empresa from "./Empresa";
import EntityGeneric from "./EntityGeneric";
import Fabricante from "./Fabricante";
import ProdutoCategoria from "./ProdutoCategoria";
import Unidade from "./Unidade";

@Entity('tb_produtos')
export  default class Produto extends EntityGeneric {

    @Index("nome-index")
    @Column({ length: 150 })
    nome: string;

    @Column({ type: "decimal", precision: 10, scale: 2, default: 0, nullable:true })
    precoCompra: number;

    @Column({ type: "decimal", precision: 10, scale: 2, default: 0, nullable:true })
    precoVenda: number;

    @Column({ length: 150, nullable: true })
    observacao: string;

    /** RELACIONAMENTOS */

    @ManyToOne(type => Unidade, { nullable: true, eager: true })
    @JoinColumn({name: 'idUnidade'})
    unidade: Unidade;

    @OneToOne(type => ProdutoCategoria, {nullable: true, eager: true})
    @JoinColumn({ name: 'idProdutoCategoria'})
    categoria: ProdutoCategoria;

    @OneToOne(type => Fabricante, {nullable: true, eager: true})
    @JoinColumn({ name: 'idFabricante'})
    fabricante: Fabricante;

    /** AUTO INCREMENTADOS  */

    @CreateDateColumn()
    criadoEm: Date;

    @UpdateDateColumn()
    atualizadoEm: Date;
}
