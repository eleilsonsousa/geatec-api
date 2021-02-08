import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, JoinColumn, OneToOne, Index } from "typeorm";
import Empresa from "./Empresa";
import EntityGeneric from "./EntityGeneric";

@Entity('tb_usuarios')
export class User extends EntityGeneric {


    @Column()
    nome: string;

    @Index("email-index")
    @Column()
    email: string;

    @Column({length: 150})
    senha: string;

     /** RELACIONAMENTOS */   

    /** AUTO INCREMENTADOS  */

    @CreateDateColumn()
    criadoEm: Date;

    @UpdateDateColumn()
    atualizadoEm: Date;
}
