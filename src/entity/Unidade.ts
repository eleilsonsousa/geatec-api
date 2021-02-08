import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, OneToOne, JoinColumn, Index } from "typeorm";
import Empresa from "./Empresa";
import EntityGeneric from "./EntityGeneric";

@Entity('tb_unidades')
export default class Unidade extends EntityGeneric {


    @Column({ length: 10 })
    sigla: string;

    @Column({ length: 20, nullable: true })
    nome: string;

    @Column({ length: 100, nullable: true })
    descricao: string;


    /** RELACIONAMENTOS */
   
    /** AUTO INCREMENTADOS  */
    
    @CreateDateColumn()
    criadoEm: Date;

    @UpdateDateColumn()
    atualizadoEm: Date;
}
