import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, OneToOne, JoinColumn, Index, OneToMany, ManyToOne } from "typeorm";
import Empresa from "./Empresa";
import OrdemServicoStatus from "./OrdemServicoStatus";
import EntityGeneric from "./EntityGeneric";
import OrdemServicoItemProd from "./OrdemServicoItemProd";
import OrdemServicoItemServ from "./OrdemServicoItemServ";
import Cliente from "./Cliente";

@Entity('tb_ordens_servico')
export default class OrdemServico extends EntityGeneric {

    @Column({ nullable: true })
    numero: number;

    @Column({ nullable: true })
    dataRecebimento: Date;

    @Column({ nullable: true })
    dataRealizacao: Date;

    @Column({ nullable: true })
    dataEntrega: Date;

    @Column({ type: "decimal", precision: 10, scale: 2, default: 0, nullable:true })
    valorTotalProdutos: number;

    @Column({ type: "decimal", precision: 10, scale: 2, default: 0, nullable:true })
    valorTotalServicos: number;

    @Column({ type: "decimal", precision: 10, scale: 2, default: 0, nullable:true })
    desconto: number;

    @Column({ type: "decimal", precision: 10, scale: 2, default: 0, nullable:true })
    totalOrdemServico: number;

    @Column({ length: 100, nullable: true })
    equipamentos: string;

    @Column({ length: 200, nullable: true })
    defeitos: string;

    @Column({ length: 200, nullable: true })
    laudoTecnico: string;

    @Column({ length: 100, nullable: true })
    garantia: string;

    @Column({ nullable: true })
    status: number;

    /** RELACIONAMENTOS */

    @ManyToOne(type => Cliente, { nullable: false, eager: true })
    @JoinColumn({ name: 'idCliente' })
    cliente: Cliente;

    /*   @OneToMany(() => OrdemServicoItemProd, ordemServicoProd => 
                      ordemServicoProd.ordemServico, {cascade: true})
      itensProdutos: OrdemServicoItemProd[]; 
  
      @OneToMany(() => OrdemServicoItemServ, ordemServicoServ => 
                      ordemServicoServ.ordemServico, {cascade: true})
      itensServicos: OrdemServicoItemServ[]; 
   */

    @OneToMany(() => OrdemServicoItemProd, ordemServicoProd =>
        ordemServicoProd.ordemServico, { cascade: true })
    itensProdutos: Promise<OrdemServicoItemProd[]>;

    @OneToMany(() => OrdemServicoItemServ, ordemServicoServ =>
        ordemServicoServ.ordemServico, { cascade: true })
    itensServicos: Promise<OrdemServicoItemServ[]>;


    /** AUTO INCREMENTADOS  */

    @CreateDateColumn()
    criadoEm: Date;

    @UpdateDateColumn()
    atualizadoEm: Date;
}
