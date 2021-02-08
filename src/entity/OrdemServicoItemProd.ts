import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, OneToOne, JoinColumn, Index, ManyToOne, OneToMany } from "typeorm";
import Empresa from "./Empresa";
import EntityGeneric from "./EntityGeneric";
import OrdemServico from "./OrdemServico";
import Produto from "./Produto";

@Entity('tb_ordens_servico_item_prod')
export default class OrdemServicoItemProd  {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    quantidade: number;

    /** RELACIONAMENTOS */
    @ManyToOne(() => OrdemServico, ordemServico => ordemServico.itensProdutos, {onDelete: 'CASCADE'})
    @JoinColumn({ name: 'idOrdemServico' })
    ordemServico: OrdemServico;

    @ManyToOne(type => Produto, { nullable: true })
    @JoinColumn({name: 'idProduto'})
    produto: Produto; 

    /** AUTO INCREMENTADOS  */
    
    @CreateDateColumn()
    criadoEm: Date;

    @UpdateDateColumn()
    atualizadoEm: Date;
}
