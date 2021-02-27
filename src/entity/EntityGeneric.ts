import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, OneToOne, JoinColumn, Index, ManyToOne } from "typeorm";
import Empresa from "./Empresa";


export default class EntityGeneric {

    @Index("id-index")
    @PrimaryGeneratedColumn()  
    id: number;

    /** RELACIONAMENTOS */
    @Index("idEmpresa-index")
    @ManyToOne(type => Empresa, { nullable: true })
    @JoinColumn({name: 'idEmpresa'})
    empresa: Empresa;   

    static className() {
        return this.name
    
        // is the same as
        // return User.name
      }

}
