import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, OneToOne, JoinColumn, Index } from "typeorm";
import Empresa from "./Empresa";
import EntityGeneric from "./EntityGeneric";

@Entity('tb_servicos')
export default class Servico extends EntityGeneric {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({ length: 150 })
    nome: string;

    @Column({ length: 150, nullable: true })
    observacao: string;

    @Column()
    preco: number;


    /** RELACIONAMENTOS */
   
    /** AUTO INCREMENTADOS  */
    
    @CreateDateColumn()
    criadoEm: Date;

    @UpdateDateColumn()
    atualizadoEm: Date;
}
