import { Router } from 'express';
import { getRepository } from 'typeorm';
import { EmpresaController } from '../controller/EmpresaController';
import { OrdemServicoController } from '../controller/OrdemServicoController';
import OrdemServico from "../entity/OrdemServico";
import { converteToObject, getLogErros } from '../utils/Utils';


export const ordemservicoRouter = Router();
const controller = new OrdemServicoController();

/** POST - Salvar Dados */
ordemservicoRouter.post('/', async (req, res) => {
    try {
        //console.log('POST/salvar -> ', req.body);
        const ordemservico = await converteToObject(OrdemServico, req.body);
        const result = await controller.salvar(ordemservico);
        res.json(result);
    } catch (err) {
        res.json(getLogErros(err));
        console.log('err.message :=> ', err.message);
    }

});

/** PUT - Alerar Dados */
ordemservicoRouter.put('/', async (req, res, next) => {
    try {
        const result = await controller.alterar(req);
        res.json(result);
    } catch (err) {
        res.json(getLogErros(err));
        console.log('err.message :=> ', err.message);
    }
})


/** DELETE - Deletar Dados */
ordemservicoRouter.delete('/:id', async (req, res, next) => {
    try {
        console.log('DELETE/excluir -> ', req.params.id);
        const result = await controller.excluir(req.params.id);
        res.json(result);
    } catch (err) {
        res.json(getLogErros(err));
        console.log('err.message :=> ', err.message);
    }

})


/** GET - Buscar Todos */
ordemservicoRouter.get('/', async (req, res) => {
    try {
        console.log('GET/buscarTodos -> ', req.body);
        const result = await controller.buscarTodos();
        res.status(201).send(result);
    }
    catch (err) {
        res.json(getLogErros(err));
        console.log('err.message :=> ', err.message);
    }
})


/** GET - Buscar por Querys --> buscar?nome=MeuNome */
ordemservicoRouter.get('/buscar', async (req, res) => {
    try {
        console.log('GET/buscar? -> ', req.query);
        const result = await controller.buscarPorCampos(req.query);
        res.status(201).send(result);
    }
    catch (err) {
        res.json(getLogErros(err));
        console.log('err.message :=> ', err.message);
    }
})

/** GET - Buscar Todos */
ordemservicoRouter.get('/:id', async (req, res) => {
    try {
        console.log('GET/buscarPorId-> ', req.params.id);
        const result = await controller.buscarPorId(req.params.id);
        res.status(201).send(result);
    }
    catch (err) {
        res.json(getLogErros(err));
        console.log('err.message :=> ', err.message);
    }
})

/** GET - Buscar por campo, usando busca parcial */
ordemservicoRouter.get('/buscar/:campo/:valor', async (req, res) => {
    try {

        console.log('GET/buscar/:campo/:valor ->', req.params.campo, req.params.valor);
        const result = await controller.
            buscarPorCampoParcial(req.params.campo, req.params.valor);
        res.status(201).send(result);
    }
    catch (err) {
        res.json(getLogErros(err));
        console.log('err.message :=> ', err.message);
    }
})

