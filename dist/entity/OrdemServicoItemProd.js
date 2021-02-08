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
const OrdemServico_1 = require("./OrdemServico");
const Produto_1 = require("./Produto");
let OrdemServicoItemProd = class OrdemServicoItemProd {
};
__decorate([
    typeorm_1.PrimaryGeneratedColumn(),
    __metadata("design:type", Number)
], OrdemServicoItemProd.prototype, "id", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", Number)
], OrdemServicoItemProd.prototype, "quantidade", void 0);
__decorate([
    typeorm_1.ManyToOne(() => OrdemServico_1.default, ordemServico => ordemServico.itensProdutos, { onDelete: 'CASCADE' }),
    typeorm_1.JoinColumn({ name: 'idOrdemServico' }),
    __metadata("design:type", OrdemServico_1.default)
], OrdemServicoItemProd.prototype, "ordemServico", void 0);
__decorate([
    typeorm_1.ManyToOne(type => Produto_1.default, { nullable: true }),
    typeorm_1.JoinColumn({ name: 'idProduto' }),
    __metadata("design:type", Produto_1.default)
], OrdemServicoItemProd.prototype, "produto", void 0);
__decorate([
    typeorm_1.CreateDateColumn(),
    __metadata("design:type", Date)
], OrdemServicoItemProd.prototype, "criadoEm", void 0);
__decorate([
    typeorm_1.UpdateDateColumn(),
    __metadata("design:type", Date)
], OrdemServicoItemProd.prototype, "atualizadoEm", void 0);
OrdemServicoItemProd = __decorate([
    typeorm_1.Entity('tb_ordens_servico_item_prod')
], OrdemServicoItemProd);
exports.default = OrdemServicoItemProd;
//# sourceMappingURL=OrdemServicoItemProd.js.map