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
const ProdutoCategoria_1 = require("../entity/ProdutoCategoria");
const Utils_1 = require("../utils/Utils");
class ProdutoCategoriaController {
    constructor() {
        this.maxResultQuery = 100;
    }
    salvar(produtocategoria) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log('ProdutoCategoriaController/salvar --> ProdutoCategoria.nome: ', produtocategoria.nome);
            const result = yield typeorm_1.getManager().save(produtocategoria);
            return yield Utils_1.removeFieldsNull(result);
        });
    }
    excluir(produtocategoria) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log('ProdutoCategoriaController/excluir --> ProdutoCategoria.id: ', produtocategoria.id);
            const result = yield typeorm_1.getManager().delete(ProdutoCategoria_1.default, produtocategoria);
            return result;
        });
    }
    alterar(produtocategoria) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log('ProdutoCategoriaController/alterar --> ProdutoCategoria.id: ', produtocategoria.id);
            const result = yield typeorm_1.getManager().update(ProdutoCategoria_1.default, produtocategoria.id, produtocategoria);
            return result;
        });
    }
    buscarTodos() {
        return __awaiter(this, void 0, void 0, function* () {
            console.log('ProdutoCategoriaController/buscarTodos');
            const [result, total] = yield (yield typeorm_1.getManager().findAndCount(ProdutoCategoria_1.default, { order: { nome: 'ASC' }, take: this.maxResultQuery }));
            console.log('TOTAL ', total);
            return yield Utils_1.removeFieldsNull(result);
        });
    }
    buscarPorId(id) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log('ProdutoCategoriaController/buscarPorId --> id:', id);
            const result = yield typeorm_1.getManager().findByIds(ProdutoCategoria_1.default, id);
            return yield Utils_1.removeFieldsNull(result);
        });
    }
    buscarPorCampos(json) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log('ProdutoCategoriaController/buscarPorCampos --> ', json);
            const result = yield typeorm_1.getManager().find(ProdutoCategoria_1.default, json);
            return yield Utils_1.removeFieldsNull(result);
        });
    }
    buscarPorCampoParcial(campo, valor) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log('ProdutoCategoriaController/buscarPorNome [campo:valor]:', campo, ':', valor);
            const result = yield typeorm_1.getManager().query('SELECT * FROM tb_produtocategorias WHERE ' + campo + ' LIKE "%' + valor +
                '%"  LIMIT ' + this.maxResultQuery);
            return yield Utils_1.removeFieldsNull(result);
            /** MELHORAR ESSE MÈTODO --> PERIGO DE SQL INJECTOR */
        });
    }
}
exports.ProdutoCategoriaController = ProdutoCategoriaController;
//# sourceMappingURL=ProdutoCategoriaController.js.map