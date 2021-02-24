"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
const typeorm_1 = require("typeorm");
const EntityGeneric_1 = require("./EntityGeneric");
const OrdemServicoItemProd_1 = require("./OrdemServicoItemProd");
const OrdemServicoItemServ_1 = require("./OrdemServicoItemServ");
const Cliente_1 = require("./Cliente");
let OrdemServico = class OrdemServico extends EntityGeneric_1.default {
};
__decorate([
    typeorm_1.Column({ nullable: true }),
    __metadata("design:type", Date)
], OrdemServico.prototype, "dataRecebimento", void 0);
__decorate([
    typeorm_1.Column({ nullable: true }),
    __metadata("design:type", Date)
], OrdemServico.prototype, "dataRealizacao", void 0);
__decorate([
    typeorm_1.Column({ nullable: true }),
    __metadata("design:type", Date)
], OrdemServico.prototype, "dataEntrega", void 0);
__decorate([
    typeorm_1.Column({ nullable: true }),
    __metadata("design:type", Number)
], OrdemServico.prototype, "valorTotalProdutos", void 0);
__decorate([
    typeorm_1.Column({ nullable: true }),
    __metadata("design:type", Number)
], OrdemServico.prototype, "valorTotalServicos", void 0);
__decorate([
    typeorm_1.Column({ nullable: true }),
    __metadata("design:type", Number)
], OrdemServico.prototype, "desconto", void 0);
__decorate([
    typeorm_1.Column({ nullable: true }),
    __metadata("design:type", Number)
], OrdemServico.prototype, "totalOrdemServico", void 0);
__decorate([
    typeorm_1.Column({ length: 100, nullable: true }),
    __metadata("design:type", String)
], OrdemServico.prototype, "equipamentos", void 0);
__decorate([
    typeorm_1.Column({ length: 200, nullable: true }),
    __metadata("design:type", String)
], OrdemServico.prototype, "defeitos", void 0);
__decorate([
    typeorm_1.Column({ length: 200, nullable: true }),
    __metadata("design:type", String)
], OrdemServico.prototype, "laudoTecnico", void 0);
__decorate([
    typeorm_1.Column({ length: 100, nullable: true }),
    __metadata("design:type", String)
], OrdemServico.prototype, "garantia", void 0);
__decorate([
    typeorm_1.Column({ nullable: true }),
    __metadata("design:type", Number)
], OrdemServico.prototype, "status", void 0);
__decorate([
    typeorm_1.ManyToOne(type => Cliente_1.default, { nullable: true }),
    typeorm_1.JoinColumn({ name: 'idCliente' }),
    __metadata("design:type", Cliente_1.default)
], OrdemServico.prototype, "cliente", void 0);
__decorate([
    typeorm_1.OneToMany(() => OrdemServicoItemProd_1.default, ordemServicoProd => ordemServicoProd.ordemServico, { cascade: true }),
    __metadata("design:type", Array)
], OrdemServico.prototype, "itensProdutos", void 0);
__decorate([
    typeorm_1.OneToMany(() => OrdemServicoItemServ_1.default, ordemServicoServ => ordemServicoServ.ordemServico, { cascade: true }),
    __metadata("design:type", Array)
], OrdemServico.prototype, "itensServicos", void 0);
__decorate([
    typeorm_1.CreateDateColumn(),
    __metadata("design:type", Date)
], OrdemServico.prototype, "criadoEm", void 0);
__decorate([
    typeorm_1.UpdateDateColumn(),
    __metadata("design:type", Date)
], OrdemServico.prototype, "atualizadoEm", void 0);
OrdemServico = __decorate([
    typeorm_1.Entity('tb_ordens_servico')
], OrdemServico);
exports.default = OrdemServico;
//# sourceMappingURL=OrdemServico.js.map