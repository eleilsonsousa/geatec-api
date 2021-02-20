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
let Servico = class Servico extends EntityGeneric_1.default {
};
__decorate([
    typeorm_1.PrimaryGeneratedColumn(),
    __metadata("design:type", Number)
], Servico.prototype, "id", void 0);
__decorate([
    typeorm_1.Column({ length: 150 }),
    __metadata("design:type", String)
], Servico.prototype, "nome", void 0);
__decorate([
    typeorm_1.Column({ length: 150, nullable: true }),
    __metadata("design:type", String)
], Servico.prototype, "observacao", void 0);
__decorate([
    typeorm_1.Column({ type: "decimal", precision: 10, scale: 2, default: 0 }),
    __metadata("design:type", Number)
], Servico.prototype, "preco", void 0);
__decorate([
    typeorm_1.CreateDateColumn(),
    __metadata("design:type", Date)
], Servico.prototype, "criadoEm", void 0);
__decorate([
    typeorm_1.UpdateDateColumn(),
    __metadata("design:type", Date)
], Servico.prototype, "atualizadoEm", void 0);
Servico = __decorate([
    typeorm_1.Entity('tb_servicos')
], Servico);
exports.default = Servico;
//# sourceMappingURL=Servico.js.map