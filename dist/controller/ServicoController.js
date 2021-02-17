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
const Servico_1 = require("../entity/Servico");
const Utils_1 = require("../utils/Utils");
class ServicoController {
    constructor() {
        this.maxResultQuery = 100;
    }
    salvar(servico) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log('ServicoController/salvar --> Servico.nome: ', servico.nome);
            const result = yield typeorm_1.getManager().save(servico);
            return yield Utils_1.removeFieldsNull(result);
        });
    }
    excluir(servico) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log('ServicoController/excluir --> Servico.id: ', servico.id);
            const result = yield typeorm_1.getManager().delete(Servico_1.default, servico);
            return result;
        });
    }
    alterar(servico) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log('ServicoController/alterar --> Servico.id: ', servico.id);
            const result = yield typeorm_1.getManager().update(Servico_1.default, servico.id, servico);
            return result;
        });
    }
    buscarTodos() {
        return __awaiter(this, void 0, void 0, function* () {
            console.log('ServicoController/buscarTodos');
            const [result, total] = yield (yield typeorm_1.getManager().findAndCount(Servico_1.default, { order: { nome: 'ASC' }, take: this.maxResultQuery }));
            console.log('TOTAL ', total);
            return yield Utils_1.removeFieldsNull(result);
        });
    }
    buscarPorId(id) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log('ServicoController/buscarPorId --> id:', id);
            const result = yield typeorm_1.getManager().findByIds(Servico_1.default, id);
            return yield Utils_1.removeFieldsNull(result);
        });
    }
    buscarPorCampos(json) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log('ServicoController/buscarPorCampos --> ', json);
            const result = yield typeorm_1.getManager().find(Servico_1.default, json);
            return yield Utils_1.removeFieldsNull(result);
        });
    }
    buscarPorCampoParcial(campo, valor) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log('ServicoController/buscarPorNome [campo:valor]:', campo, ':', valor);
            const result = yield typeorm_1.getManager().query('SELECT * FROM tb_servicos WHERE ' + campo + ' LIKE "%' + valor +
                '%"  LIMIT ' + this.maxResultQuery);
            return yield Utils_1.removeFieldsNull(result);
            /** MELHORAR ESSE MÈTODO --> PERIGO DE SQL INJECTOR */
        });
    }
}
exports.ServicoController = ServicoController;
//# sourceMappingURL=ServicoController.js.map