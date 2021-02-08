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
let Unidade = class Unidade extends EntityGeneric_1.default {
};
__decorate([
    typeorm_1.Column({ length: 10 }),
    __metadata("design:type", String)
], Unidade.prototype, "sigla", void 0);
__decorate([
    typeorm_1.Column({ length: 20, nullable: true }),
    __metadata("design:type", String)
], Unidade.prototype, "nome", void 0);
__decorate([
    typeorm_1.Column({ length: 100, nullable: true }),
    __metadata("design:type", String)
], Unidade.prototype, "descricao", void 0);
__decorate([
    typeorm_1.CreateDateColumn(),
    __metadata("design:type", Date)
], Unidade.prototype, "criadoEm", void 0);
__decorate([
    typeorm_1.UpdateDateColumn(),
    __metadata("design:type", Date)
], Unidade.prototype, "atualizadoEm", void 0);
Unidade = __decorate([
    typeorm_1.Entity('tb_unidades')
], Unidade);
exports.default = Unidade;
//# sourceMappingURL=Unidade.js.map