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
const Unidade_1 = require("../entity/Unidade");
const Utils_1 = require("../utils/Utils");
class UnidadeController {
    constructor() {
        this.maxResultQuery = 100;
    }
    salvar(unidade) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log('UnidadeController/salvar --> Unidade.nome: ', unidade.nome);
            const result = yield typeorm_1.getManager().save(unidade);
            return yield Utils_1.removeFieldsNull(result);
        });
    }
    excluir(id) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log('UnidadeController/excluir --> Unidade.id: ', id);
            const result = yield typeorm_1.getManager().delete(Unidade_1.default, { id: id });
            return result;
        });
    }
    alterar(unidade) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log('UnidadeController/alterar --> Unidade.id: ', unidade.id);
            const result = yield typeorm_1.getManager().update(Unidade_1.default, unidade.id, unidade);
            return result;
        });
    }
    buscarTodos() {
        return __awaiter(this, void 0, void 0, function* () {
            console.log('UnidadeController/buscarTodos');
            const [result, total] = yield (yield typeorm_1.getManager().findAndCount(Unidade_1.default, { order: { nome: 'ASC' }, take: this.maxResultQuery }));
            console.log('TOTAL ', total);
            return yield Utils_1.removeFieldsNull(result);
        });
    }
    buscarPorId(id) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log('UnidadeController/buscarPorId --> id:', id);
            const result = yield typeorm_1.getManager().findByIds(Unidade_1.default, id);
            return yield Utils_1.removeFieldsNull(result);
        });
    }
    buscarPorCampos(json) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log('UnidadeController/buscarPorCampos --> ', json);
            const result = yield typeorm_1.getManager().find(Unidade_1.default, json);
            return yield Utils_1.removeFieldsNull(result);
        });
    }
    buscarPorCampoParcial(campo, valor) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log('UnidadeController/buscarPorNome [campo:valor]:', campo, ':', valor);
            const result = yield typeorm_1.getManager().query('SELECT * FROM tb_unidades WHERE ' + campo + ' LIKE "%' + valor +
                '%"  LIMIT ' + this.maxResultQuery);
            return yield Utils_1.removeFieldsNull(result);
            /** MELHORAR ESSE MÈTODO --> PERIGO DE SQL INJECTOR */
        });
    }
}
exports.UnidadeController = UnidadeController;
//# sourceMappingURL=UnidadeController.js.map