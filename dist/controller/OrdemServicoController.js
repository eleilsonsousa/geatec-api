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
const OrdemServico_1 = require("../entity/OrdemServico");
const OrdemServicoItemProd_1 = require("../entity/OrdemServicoItemProd");
const OrdemServicoItemServ_1 = require("../entity/OrdemServicoItemServ");
const Utils_1 = require("../utils/Utils");
class OrdemServicoController {
    constructor() {
        this.maxResultQuery = 100;
    }
    salvar(ordemservico) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log('OrdemServicoController/salvar --> OrdemServico ', ordemservico);
            const result = yield typeorm_1.getManager().save(OrdemServico_1.default, ordemservico);
            return yield Utils_1.removeFieldsNull(result);
        });
    }
    excluir(id) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log('OrdemServicoController/excluir --> OrdemServico.id: ', id);
            const result = yield typeorm_1.getManager().delete(OrdemServico_1.default, id);
            return result;
        });
    }
    alterar(req) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log('OrdemServicoController/alterar --> por Request: ', req.body);
            const ordemServicoJson = req.body;
            /** Excluindo produtos da Ordem de Serviço */
            yield typeorm_1.getManager().delete(OrdemServicoItemProd_1.default, { ordemServico: ordemServicoJson.id });
            /** Excluindo servico da Ordem de Serviço */
            yield typeorm_1.getManager().delete(OrdemServicoItemServ_1.default, { ordemServico: ordemServicoJson.id });
            /** Salvando Novos Produtos na OrdemServiço */
            yield ordemServicoJson.itensProdutos.forEach(itemProduto => {
                const itemProd = typeorm_1.getManager().create(OrdemServicoItemProd_1.default, itemProduto);
                itemProd.ordemServico = new OrdemServico_1.default();
                itemProd.ordemServico.id = ordemServicoJson.id;
                typeorm_1.getManager().save(OrdemServicoItemProd_1.default, itemProd);
            });
            /** Salvando Novos Servico na OrdemServiço */
            yield ordemServicoJson.itensServicos.forEach(itemServico => {
                const itemServ = typeorm_1.getManager().create(OrdemServicoItemServ_1.default, itemServico);
                console.log("itemSev - ", itemServ);
                itemServ.ordemServico = new OrdemServico_1.default();
                itemServ.ordemServico.id = ordemServicoJson.id;
                typeorm_1.getManager().save(OrdemServicoItemServ_1.default, itemServ);
            });
            /** Salvando Dados da nota */
            yield delete ordemServicoJson['itensProdutos'];
            yield delete ordemServicoJson['itensServicos'];
            const result = typeorm_1.getManager().update(OrdemServico_1.default, ordemServicoJson.id, ordemServicoJson);
            return result;
        });
    }
    buscarTodos() {
        return __awaiter(this, void 0, void 0, function* () {
            console.log('OrdemServicoController/buscarTodos');
            const [result, total] = yield (yield typeorm_1.getManager().findAndCount(OrdemServico_1.default, { take: this.maxResultQuery }));
            console.log('TOTAL ', total);
            return yield Utils_1.removeFieldsNull(result);
        });
    }
    buscarPorId(id) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log('OrdemServicoController/buscarPorId --> id:', id);
            const result = yield typeorm_1.getManager().findByIds(OrdemServico_1.default, id);
            return yield Utils_1.removeFieldsNull(result);
        });
    }
    buscarPorCampos(json) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log('OrdemServicoController/buscarPorCampos --> ', json);
            const result = yield typeorm_1.getManager().find(OrdemServico_1.default, json);
            return yield Utils_1.removeFieldsNull(result);
        });
    }
    buscarPorCampoParcial(campo, valor) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log('OrdemServicoController/buscarPorNome [campo:valor]:', campo, ':', valor);
            const result = yield typeorm_1.getManager().query('SELECT * FROM tb_ordemservicos WHERE ' + campo + ' LIKE "%' + valor +
                '%"  LIMIT ' + this.maxResultQuery);
            return yield Utils_1.removeFieldsNull(result);
            /** MELHORAR ESSE MÈTODO --> PERIGO DE SQL INJECTOR */
        });
    }
}
exports.OrdemServicoController = OrdemServicoController;
//# sourceMappingURL=OrdemServicoController.js.map