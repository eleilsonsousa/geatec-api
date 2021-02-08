import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, OneToOne, JoinColumn, Index, ManyToOne } from "typeorm";
import Empresa from "./Empresa";
import EntityGeneric from "./EntityGeneric";
import OrdemServico from "./OrdemServico";
import Servico from "./Servico";

@Entity('tb_ordens_servico_item_serv')
export default class OrdemServicoItemServ {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    quantidade: number;


    /** RELACIONAMENTOS */
    @ManyToOne(() => OrdemServico, ordemServico => ordemServico.itensServicos, { onDelete: 'CASCADE' })
    @JoinColumn({ name: 'idOrdemServico' })
    ordemServico: OrdemServico;


    @ManyToOne(type => Servico, { nullable: true })
    @JoinColumn({ name: 'idServico' })
    servico: Servico;

    /** AUTO INCREMENTADOS  */

    @CreateDateColumn()
    criadoEm: Date;

    @UpdateDateColumn()
    atualizadoEm: Date;
}
