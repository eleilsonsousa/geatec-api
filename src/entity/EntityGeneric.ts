import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, OneToOne, JoinColumn, Index } from "typeorm";
import Empresa from "./Empresa";

@Entity('tb_unidades')
export default class EntityGeneric {

    @Index("id-index")
    @PrimaryGeneratedColumn()
    id: number;

    /** RELACIONAMENTOS */
    @Index("idEmpresa-index")
    @OneToOne(() => Empresa)
    @JoinColumn({ name: 'idEmpresa' })
    empresa: Empresa;   

    static className() {
        return this.name
    
        // is the same as
        // return User.name
      }

}
