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
const Cliente_1 = require("../entity/Cliente");
const Utils_1 = require("../utils/Utils");
class ClienteController {
    constructor() {
        this.maxResultQuery = 100;
    }
    salvar(cliente) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log('ClienteController/salvar --> cliente.nome: ', cliente.nome);
            const result = yield typeorm_1.getManager().save(cliente);
            return yield Utils_1.removeFieldsNull(result);
        });
    }
    excluir(id) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log('ClienteController/excluir --> cliente.id: ', id);
            const result = yield typeorm_1.getManager().delete(Cliente_1.default, id);
            return result;
        });
    }
    alterar(cliente) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log('ClienteController/alterar --> cliente.id: ', cliente.id);
            const result = yield typeorm_1.getManager().update(Cliente_1.default, cliente.id, cliente);
            return result;
        });
    }
    buscarTodos() {
        return __awaiter(this, void 0, void 0, function* () {
            console.log('ClienteController/buscarTodos');
            const [result, total] = yield (yield typeorm_1.getManager().findAndCount(Cliente_1.default, { order: { nome: 'ASC' }, take: this.maxResultQuery }));
            console.log('TOTAL ', total);
            return yield Utils_1.removeFieldsNull(result);
        });
    }
    buscarPorId(id) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log('ClienteController/buscarPorId --> id:', id);
            const result = yield typeorm_1.getManager().findByIds(Cliente_1.default, id);
            return yield Utils_1.removeFieldsNull(result);
        });
    }
    buscarPorCampos(json) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log('ClienteController/buscarPorCampos --> ', json);
            const result = yield typeorm_1.getManager().find(Cliente_1.default, json);
            return yield Utils_1.removeFieldsNull(result);
        });
    }
    buscarPorCampoParcial(campo, valor) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log('ClienteController/buscarPorNome [campo:valor]:', campo, ':', valor);
            const result = yield typeorm_1.getManager().query('SELECT * FROM tb_clientes WHERE ' + campo + ' LIKE "%' + valor +
                '%"  LIMIT ' + this.maxResultQuery);
            return yield Utils_1.removeFieldsNull(result);
            /** MELHORAR ESSE MÈTODO --> PERIGO DE SQL INJECTOR */
        });
    }
}
exports.ClienteController = ClienteController;
//# sourceMappingURL=ClienteController.js.map