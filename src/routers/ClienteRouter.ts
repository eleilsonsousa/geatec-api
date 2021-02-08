import { Router } from 'express';
import { ClienteController } from '../controller/ClienteController';
import Cliente from "../entity/Cliente";
import { converteToObject, getLogErros } from '../utils/Utils';


export const clienteRouter = Router();
const controller = new ClienteController();

/** POST - Salvar Dados */
clienteRouter.post('/', async (req, res) => {
    try {
        console.log('POST/salvar -> ', req.body);
        const cliente = await converteToObject(Cliente, req.body);
        const result = await controller.salvar(cliente);
        res.json(result);
    } catch (err) {
        res.json(getLogErros(err));
        console.log('err.message :=> ', err.message);
    }

});

/** PUT - Alerar Dados */
clienteRouter.put('/', async (req, res, next) => {
    try {
        console.log('PUT/alterar -> ', req.body);
        const cliente = await converteToObject(Cliente, req.body);
        const result = await controller.alterar(cliente);
        res.json(result);
    } catch (err) {
        res.json(getLogErros(err));
        console.log('err.message :=> ', err.message);
    }
})


/** DELETE - Deletar Dados */
clienteRouter.delete('/:id', async (req, res, next) => {
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
clienteRouter.get('/', async (req, res) => {
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
clienteRouter.get('/buscar', async (req, res) => {
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
clienteRouter.get('/:id', async (req, res) => {
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
clienteRouter.get('/buscar/:campo/:valor', async (req, res) => {
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

