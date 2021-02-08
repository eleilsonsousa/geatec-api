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
let Empresa = class Empresa {
};
__decorate([
    typeorm_1.PrimaryGeneratedColumn(),
    __metadata("design:type", Number)
], Empresa.prototype, "id", void 0);
__decorate([
    typeorm_1.Index("nome-index"),
    typeorm_1.Column({ length: 150 }),
    __metadata("design:type", String)
], Empresa.prototype, "nome", void 0);
__decorate([
    typeorm_1.Index("razaoSocial-index"),
    typeorm_1.Column({ length: 150, nullable: true }),
    __metadata("design:type", String)
], Empresa.prototype, "razaoSocial", void 0);
__decorate([
    typeorm_1.Column({ length: 150, nullable: true }),
    __metadata("design:type", String)
], Empresa.prototype, "nomeFantasia", void 0);
__decorate([
    typeorm_1.Column({ length: 30, nullable: true }),
    __metadata("design:type", String)
], Empresa.prototype, "inscricaoEstadual", void 0);
__decorate([
    typeorm_1.Index("cpf-index"),
    typeorm_1.Column({ length: 15, nullable: true }),
    __metadata("design:type", String)
], Empresa.prototype, "cpf", void 0);
__decorate([
    typeorm_1.Index("cnpj-index"),
    typeorm_1.Column({ length: 15, nullable: true }),
    __metadata("design:type", String)
], Empresa.prototype, "cnpj", void 0);
__decorate([
    typeorm_1.Column({ length: 100, nullable: true }),
    __metadata("design:type", String)
], Empresa.prototype, "endereco", void 0);
__decorate([
    typeorm_1.Column({ length: 100, nullable: true }),
    __metadata("design:type", String)
], Empresa.prototype, "cidade", void 0);
__decorate([
    typeorm_1.Column({ length: 10, nullable: true }),
    __metadata("design:type", String)
], Empresa.prototype, "cep", void 0);
__decorate([
    typeorm_1.Column({ length: 100, nullable: true }),
    __metadata("design:type", String)
], Empresa.prototype, "complemento", void 0);
__decorate([
    typeorm_1.Column({ length: 15, nullable: true }),
    __metadata("design:type", String)
], Empresa.prototype, "telefone", void 0);
__decorate([
    typeorm_1.Column({ length: 15, nullable: true }),
    __metadata("design:type", String)
], Empresa.prototype, "celular", void 0);
__decorate([
    typeorm_1.Column({ length: 100, nullable: true }),
    __metadata("design:type", String)
], Empresa.prototype, "email", void 0);
__decorate([
    typeorm_1.Column({ default: false }),
    __metadata("design:type", Boolean)
], Empresa.prototype, "isPessoaJuridica", void 0);
__decorate([
    typeorm_1.CreateDateColumn(),
    __metadata("design:type", Date)
], Empresa.prototype, "criadoEm", void 0);
__decorate([
    typeorm_1.UpdateDateColumn(),
    __metadata("design:type", Date)
], Empresa.prototype, "atualizadoEm", void 0);
Empresa = __decorate([
    typeorm_1.Entity('tb_empresas')
], Empresa);
exports.default = Empresa;
//# sourceMappingURL=Empresa.js.map