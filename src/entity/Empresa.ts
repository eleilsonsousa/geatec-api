import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, Index } from "typeorm";

@Entity('tb_empresas')
export default class Empresa {

    @PrimaryGeneratedColumn()
    id: number;

    @Index("nome-index")
    @Column({ length: 150 })
    nome: string;

    @Index("razaoSocial-index")
    @Column({ length: 150, nullable: true })
    razaoSocial: string;

    @Column({ length: 150, nullable: true })
    nomeFantasia: string;

    @Column({ length: 30, nullable: true })
    inscricaoEstadual: string;

    @Index("cpf-index")
    @Column({ length: 15, nullable: true })
    cpf: string;

    @Index("cnpj-index")
    @Column({ length: 15, nullable: true })
    cnpj: string;

    @Column({ length: 100, nullable: true })
    endereco: string;

    @Column({ length: 100, nullable: true })
    cidade: string;

    @Column({ length: 10, nullable: true })
    cep: string;

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

    /** AUTO INCREMENTADOS  */

    @CreateDateColumn()
    criadoEm: Date;

    @UpdateDateColumn()
    atualizadoEm: Date;
}
