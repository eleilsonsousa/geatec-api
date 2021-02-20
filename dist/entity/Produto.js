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
const ProdutoCategoria_1 = require("./ProdutoCategoria");
const Unidade_1 = require("./Unidade");
let Produto = class Produto extends EntityGeneric_1.default {
};
__decorate([
    typeorm_1.Index("nome-index"),
    typeorm_1.Column({ length: 150 }),
    __metadata("design:type", String)
], Produto.prototype, "nome", void 0);
__decorate([
    typeorm_1.Column({ default: 0, nullable: true }),
    __metadata("design:type", Number)
], Produto.prototype, "precoCompra", void 0);
__decorate([
    typeorm_1.Column({ default: 0, nullable: true }),
    __metadata("design:type", Number)
], Produto.prototype, "precoVenda", void 0);
__decorate([
    typeorm_1.Column({ length: 150, nullable: true }),
    __metadata("design:type", String)
], Produto.prototype, "observacao", void 0);
__decorate([
    typeorm_1.ManyToOne(type => Unidade_1.default, { nullable: true }),
    typeorm_1.JoinColumn({ name: 'idUnidade' }),
    __metadata("design:type", Unidade_1.default)
], Produto.prototype, "unidade", void 0);
__decorate([
    typeorm_1.OneToOne(type => ProdutoCategoria_1.default, { eager: true }),
    typeorm_1.JoinColumn({ name: 'idProdutoCategoria' }),
    __metadata("design:type", ProdutoCategoria_1.default)
], Produto.prototype, "categoria", void 0);
__decorate([
    typeorm_1.CreateDateColumn(),
    __metadata("design:type", Date)
], Produto.prototype, "criadoEm", void 0);
__decorate([
    typeorm_1.UpdateDateColumn(),
    __metadata("design:type", Date)
], Produto.prototype, "atualizadoEm", void 0);
Produto = __decorate([
    typeorm_1.Entity('tb_produtos')
], Produto);
exports.default = Produto;
//# sourceMappingURL=Produto.js.map