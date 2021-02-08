import { Router } from 'express';
import { EmpresaController } from '../controller/EmpresaController';
import { UnidadeController } from '../controller/UnidadeController';
import Unidade from "../entity/Unidade";
import { converteToObject, getLogErros } from '../utils/Utils';


export const unidadeRouter = Router();
const controller = new UnidadeController();

/** POST - Salvar Dados */
unidadeRouter.post('/', async (req, res) => {
    try {
        console.log('POST/salvar -> ', req.body);
        const unidade = await converteToObject(Unidade, req.body);
        const result = await controller.salvar(unidade);
        res.json(result);
    } catch (err) {
        res.json(getLogErros(err));
        console.log('err.message :=> ', err.message);
    }

});

/** PUT - Alerar Dados */
unidadeRouter.put('/', async (req, res, next) => {
    try {
        console.log('PUT/alterar -> ', req.body);
        const unidade = await converteToObject(Unidade, req.body);
        const result = await controller.alterar(unidade);
        res.json(result);
    } catch (err) {
        res.json(getLogErros(err));
        console.log('err.message :=> ', err.message);
    }
})


/** DELETE - Deletar Dados */
unidadeRouter.delete('/:id', async (req, res, next) => {
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
unidadeRouter.get('/', async (req, res) => {
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
unidadeRouter.get('/buscar', async (req, res) => {
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
unidadeRouter.get('/:id', async (req, res) => {
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
unidadeRouter.get('/buscar/:campo/:valor', async (req, res) => {
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

