import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, JoinColumn, OneToOne, Index, OneToMany } from "typeorm";
import Empresa from "./Empresa";
import EntityGeneric from "./EntityGeneric";
import OrdemServico from "./OrdemServico";

@Entity('tb_clientes')
export default class Cliente extends EntityGeneric {


    @Index("nome-index")
    @Column({ length: 150, nullable: true })
    nome: string;
   
    @Index("razaoSocial-index")
    @Column({ length: 150, nullable: true})
    razaoSocial: string;

    @Column({ length: 150, nullable: true })
    fantasia: string;

    @Index("cpf-index")
    @Column({ length: 15, nullable: true })
    cpf: string;

    @Index("cnpj-index")
    @Column({ length: 15, nullable: true })
    cnpj: string;

    @Column({ length: 150, nullable: true })
    endereco: string;

    @Column({ length: 100, nullable: true })
    cidade: string;

    @Column({ length: 10, nullable: true })
    cep: string;

    @Column({ length: 4, nullable: true })
    uf: string; 

    @Column({ length: 100, nullable: true })
    complemento: string;

    @Column({ length: 15, nullable: true })
    telefone: string;

    @Column({ length: 15, nullable: true })
    celular: string;

    @Column({ length: 100, nullable: true })
    email: string;

    @Column({ default: false })
    isPessoaJuridica: boolean;

    /** RELACIONAMENTOS  */

  /*   @OneToMany(() => OrdemServico, ordemServico => ordemServico.cliente)
    ordensServico: OrdemServico[];
 */
    /** AUTO INCREMENTADOS  */

    @CreateDateColumn()
    criadoEm: Date;

    @UpdateDateColumn()
    atualizadoEm: Date;
}
