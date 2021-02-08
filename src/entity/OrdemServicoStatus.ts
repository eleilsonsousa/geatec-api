import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, OneToOne, JoinColumn, Index } from "typeorm";
import Empresa from "./Empresa";
import EntityGeneric from "./EntityGeneric";

@Entity('tb_ordens_servico_status')
export default class OrdemServicoStatus extends EntityGeneric {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({ length: 10 })
    nome: string;

    @Column({ length: 100, nullable: true })
    descricao: string;
    

    /** AUTO INCREMENTADOS  */
    
    @CreateDateColumn()
    criadoEm: Date;

    @UpdateDateColumn()
    atualizadoEm: Date;
}
