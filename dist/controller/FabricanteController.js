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
const Fabricante_1 = require("../entity/Fabricante");
const Utils_1 = require("../utils/Utils");
class FabricanteController {
    constructor() {
        this.maxResultQuery = 100;
    }
    salvar(fabricante) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log('FabricanteController/salvar --> Fabricante.nome: ', fabricante.nome);
            const result = yield typeorm_1.getManager().save(fabricante);
            return yield Utils_1.removeFieldsNull(result);
        });
    }
    excluir(id) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log('FabricanteController/excluir --> Fabricante.id: ', id);
            const result = yield typeorm_1.getManager().delete(Fabricante_1.default, { id: id });
            return result;
        });
    }
    alterar(fabricante) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log('FabricanteController/alterar --> Fabricante.id: ', fabricante.id);
            const result = yield typeorm_1.getManager().update(Fabricante_1.default, fabricante.id, fabricante);
            return result;
        });
    }
    buscarTodos() {
        return __awaiter(this, void 0, void 0, function* () {
            console.log('FabricanteController/buscarTodos');
            const [result, total] = yield (yield typeorm_1.getManager().findAndCount(Fabricante_1.default, { order: { nome: 'ASC' }, take: this.maxResultQuery }));
            console.log('TOTAL ', total);
            return yield Utils_1.removeFieldsNull(result);
        });
    }
    buscarPorId(id) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log('FabricanteController/buscarPorId --> id:', id);
            const result = yield typeorm_1.getManager().findByIds(Fabricante_1.default, id);
            return yield Utils_1.removeFieldsNull(result);
        });
    }
    buscarPorCampos(json) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log('FabricanteController/buscarPorCampos --> ', json);
            const result = yield typeorm_1.getManager().find(Fabricante_1.default, json);
            return yield Utils_1.removeFieldsNull(result);
        });
    }
    buscarPorCampoParcial(campo, valor) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log('FabricanteController/buscarPorNome [campo:valor]:', campo, ':', valor);
            const result = yield typeorm_1.getManager().query('SELECT * FROM tb_fabricantes WHERE ' + campo + ' LIKE "%' + valor +
                '%"  LIMIT ' + this.maxResultQuery);
            return yield Utils_1.removeFieldsNull(result);
            /** MELHORAR ESSE MÈTODO --> PERIGO DE SQL INJECTOR */
        });
    }
}
exports.FabricanteController = FabricanteController;
//# sourceMappingURL=FabricanteController.js.map