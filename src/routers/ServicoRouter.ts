import { Router } from 'express';
import { EmpresaController } from '../controller/EmpresaController';
import { ServicoController } from '../controller/ServicoController';
import Servico from "../entity/Servico";
import { converteToObject, getLogErros } from '../utils/Utils';


export const servicoRouter = Router();
const controller = new ServicoController();

/** POST - Salvar Dados */
servicoRouter.post('/', async (req, res) => {
    try {
        console.log('POST/salvar -> ', req.body);
        const servico = await converteToObject(Servico, req.body);
        const result = await controller.salvar(servico);
        res.json(result);
    } catch (err) {
        res.json(getLogErros(err));
        console.log('err.message :=> ', err.message);
    }

});

/** PUT - Alerar Dados */
servicoRouter.put('/', async (req, res, next) => {
    try {
        console.log('PUT/alterar -> ', req.body);
        const servico = await converteToObject(Servico, req.body);
        const result = await controller.alterar(servico);
        res.json(result);
    } catch (err) {
        res.json(getLogErros(err));
        console.log('err.message :=> ', err.message);
    }
})


/** DELETE - Deletar Dados */
servicoRouter.delete('/', async (req, res, next) => {
    try {
        console.log('DELETE/excluir -> ', req.body);
        const servico = await converteToObject(Servico, req.body);
        const result = await controller.excluir(servico);
        res.json(result);
    } catch (err) {
        res.json(getLogErros(err));
        console.log('err.message :=> ', err.message);
    }

})


/** GET - Buscar Todos */
servicoRouter.get('/', async (req, res) => {
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
servicoRouter.get('/buscar', async (req, res) => {
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
servicoRouter.get('/:id', async (req, res) => {
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
servicoRouter.get('/buscar/:campo/:valor', async (req, res) => {
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

