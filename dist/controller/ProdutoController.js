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
const Produto_1 = require("../entity/Produto");
const Utils_1 = require("../utils/Utils");
class ProdutoController {
    constructor() {
        this.maxResultQuery = 100;
    }
    salvar(produto) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log('ProdutoController/salvar --> Produto.nome: ', produto.nome);
            const result = yield typeorm_1.getManager().save(produto);
            return yield Utils_1.removeFieldsNull(result);
        });
    }
    excluir(produto) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log('ProdutoController/excluir --> Produto.id: ', produto.id);
            const result = yield typeorm_1.getManager().delete(Produto_1.default, produto);
            return result;
        });
    }
    alterar(produto) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log('ProdutoController/alterar --> Produto.id: ', produto.id);
            const result = yield typeorm_1.getManager().update(Produto_1.default, produto.id, produto);
            return result;
        });
    }
    buscarTodos() {
        return __awaiter(this, void 0, void 0, function* () {
            console.log('ProdutoController/buscarTodos');
            const [result, total] = yield (yield typeorm_1.getManager().findAndCount(Produto_1.default, { order: { nome: 'ASC' }, take: this.maxResultQuery }));
            console.log('TOTAL ', total);
            return yield Utils_1.removeFieldsNull(result);
        });
    }
    buscarPorId(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield typeorm_1.getManager().findByIds(Produto_1.default, id);
            return yield Utils_1.removeFieldsNull(result);
        });
    }
    buscarPorCampos(json) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log('ProdutoController/buscarPorCampos --> ', json);
            const result = yield typeorm_1.getManager().find(Produto_1.default, json);
            return yield Utils_1.removeFieldsNull(result);
        });
    }
    buscarPorCampoParcial(campo, valor) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log('ProdutoController/buscarPorNome [campo:valor]:', campo, ':', valor);
            const result = yield typeorm_1.getManager().query('SELECT * FROM tb_produtos WHERE ' + campo + ' LIKE "%' + valor +
                '%"  LIMIT ' + this.maxResultQuery);
            return yield Utils_1.removeFieldsNull(result);
            /** MELHORAR ESSE MÈTODO --> PERIGO DE SQL INJECTOR */
        });
    }
}
exports.ProdutoController = ProdutoController;
//# sourceMappingURL=ProdutoController.js.map