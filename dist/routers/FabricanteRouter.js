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
const express_1 = require("express");
const FabricanteController_1 = require("../controller/FabricanteController");
const Fabricante_1 = require("../entity/Fabricante");
const Utils_1 = require("../utils/Utils");
exports.fabricanteRouter = express_1.Router();
const controller = new FabricanteController_1.FabricanteController();
/** POST - Salvar Dados */
exports.fabricanteRouter.post('/', (req, res) => __awaiter(this, void 0, void 0, function* () {
    try {
        console.log('POST/salvar -> ', req.body);
        const fabricante = yield Utils_1.converteToObject(Fabricante_1.default, req.body);
        const result = yield controller.salvar(fabricante);
        res.json(result);
    }
    catch (err) {
        res.json(Utils_1.getLogErros(err));
        console.log('err.message :=> ', err.message);
    }
}));
/** PUT - Alerar Dados */
exports.fabricanteRouter.put('/', (req, res, next) => __awaiter(this, void 0, void 0, function* () {
    try {
        console.log('PUT/alterar -> ', req.body);
        const fabricante = yield Utils_1.converteToObject(Fabricante_1.default, req.body);
        const result = yield controller.alterar(fabricante);
        res.json(result);
    }
    catch (err) {
        res.json(Utils_1.getLogErros(err));
        console.log('err.message :=> ', err.message);
    }
}));
/** DELETE - Deletar Dados */
exports.fabricanteRouter.delete('/:id', (req, res, next) => __awaiter(this, void 0, void 0, function* () {
    try {
        console.log('DELETE/excluir -> ', req.params.id);
        const result = yield controller.excluir(req.params.id);
        res.json(result);
    }
    catch (err) {
        res.json(Utils_1.getLogErros(err));
        console.log('err.message :=> ', err.message);
    }
}));
/** GET - Buscar Todos */
exports.fabricanteRouter.get('/', (req, res) => __awaiter(this, void 0, void 0, function* () {
    try {
        console.log('GET/buscarTodos -> ', req.body);
        const result = yield controller.buscarTodos();
        res.status(201).send(result);
    }
    catch (err) {
        res.json(Utils_1.getLogErros(err));
        console.log('err.message :=> ', err.message);
    }
}));
/** GET - Buscar por Querys --> buscar?nome=MeuNome */
exports.fabricanteRouter.get('/buscar', (req, res) => __awaiter(this, void 0, void 0, function* () {
    try {
        console.log('GET/buscar? -> ', req.query);
        const result = yield controller.buscarPorCampos(req.query);
        res.status(201).send(result);
    }
    catch (err) {
        res.json(Utils_1.getLogErros(err));
        console.log('err.message :=> ', err.message);
    }
}));
/** GET - Buscar Todos */
exports.fabricanteRouter.get('/:id', (req, res) => __awaiter(this, void 0, void 0, function* () {
    try {
        console.log('GET/buscarPorId-> ', req.params.id);
        const result = yield controller.buscarPorId(req.params.id);
        res.status(201).send(result);
    }
    catch (err) {
        res.json(Utils_1.getLogErros(err));
        console.log('err.message :=> ', err.message);
    }
}));
/** GET - Buscar por campo, usando busca parcial */
exports.fabricanteRouter.get('/buscar/:campo/:valor', (req, res) => __awaiter(this, void 0, void 0, function* () {
    try {
        console.log('GET/buscar/:campo/:valor ->', req.params.campo, req.params.valor);
        const result = yield controller.
            buscarPorCampoParcial(req.params.campo, req.params.valor);
        res.status(201).send(result);
    }
    catch (err) {
        res.json(Utils_1.getLogErros(err));
        console.log('err.message :=> ', err.message);
    }
}));
//# sourceMappingURL=FabricanteRouter.js.map