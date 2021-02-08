"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const typeorm_1 = require("typeorm");
const Empresa_1 = require("../entity/Empresa");
const Utils_1 = require("../utils/Utils");
class EmpresaController {
    constructor() {
        this.maxResultQuery = 100;
    }
    salvar(empresa) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log('EmpresaController/salvar --> Empresa.nome: ', empresa.nome);
            const result = yield typeorm_1.getManager().save(empresa);
            return yield Utils_1.removeFieldsNull(result);
        });
    }
    excluir(empresa) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log('EmpresaController/excluir --> Empresa.id: ', empresa.id);
            const result = yield typeorm_1.getManager().delete(Empresa_1.default, empresa);
            return result;
        });
    }
    alterar(empresa) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log('EmpresaController/alterar --> Empresa.id: ', empresa.id);
            const result = yield typeorm_1.getManager().update(Empresa_1.default, empresa.id, empresa);
            return result;
        });
    }
    buscarTodos() {
        return __awaiter(this, void 0, void 0, function* () {
            console.log('EmpresaController/buscarTodos');
            const [result, total] = yield (yield typeorm_1.getManager().findAndCount(Empresa_1.default, { order: { nome: 'ASC' }, take: this.maxResultQuery }));
            console.log('TOTAL ', total);
            return yield Utils_1.removeFieldsNull(result);
        });
    }
    buscarPorId(id) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log('EmpresaController/buscarPorId --> id:', id);
            const result = yield typeorm_1.getManager().findByIds(Empresa_1.default, id);
            return yield Utils_1.removeFieldsNull(result);
        });
    }
    buscarPorCampos(json) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log('EmpresaController/buscarPorCampos --> ', json);
            const result = yield typeorm_1.getManager().find(Empresa_1.default, json);
            return yield Utils_1.removeFieldsNull(result);
        });
    }
    buscarPorCampoParcial(campo, valor) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log('EmpresaController/buscarPorNome [campo:valor]:', campo, ':', valor);
            const result = yield typeorm_1.getManager().query('SELECT * FROM tb_empresas WHERE ' + campo + ' LIKE "%' + valor +
                '%"  LIMIT ' + this.maxResultQuery);
            return yield Utils_1.removeFieldsNull(result);
            /** MELHORAR ESSE MÈTODO --> PERIGO DE SQL INJECTOR */
        });
    }
}
exports.EmpresaController = EmpresaController;
//# sourceMappingURL=EmpresaController.js.map