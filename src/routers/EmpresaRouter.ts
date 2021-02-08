import { Router } from 'express';
import { EmpresaController } from '../controller/EmpresaController';
import Empresa from "../entity/Empresa";
import { converteToObject, getLogErros } from '../utils/Utils';


export const empresaRouter = Router();
const controller = new EmpresaController();

/** POST - Salvar Dados */
empresaRouter.post('/', async (req, res) => {
    try {
        console.log('POST/salvar -> ', req.body);
        const empresa = await converteToObject(Empresa, req.body);
        const result = await controller.salvar(empresa);
        res.json(result);
    } catch (err) {
        res.json(getLogErros(err));
        console.log('err.message :=> ', err.message);
    }

});

/** PUT - Alerar Dados */
empresaRouter.put('/', async (req, res, next) => {
    try {
        console.log('PUT/alterar -> ', req.body);
        const empresa = await converteToObject(Empresa, req.body);
        const result = await controller.alterar(empresa);
        res.json(result);
    } catch (err) {
        res.json(getLogErros(err));
        console.log('err.message :=> ', err.message);
    }
})


/** DELETE - Deletar Dados */
empresaRouter.delete('/', async (req, res, next) => {
    try {
        console.log('DELETE/excluir -> ', req.body);
        const empresa = await converteToObject(Empresa, req.body);
        const result = await controller.excluir(empresa);
        res.json(result);
    } catch (err) {
        res.json(getLogErros(err));
        console.log('err.message :=> ', err.message);
    }

})


/** GET - Buscar Todos */
empresaRouter.get('/', async (req, res) => {
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
empresaRouter.get('/buscar', async (req, res) => {
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
empresaRouter.get('/:id', async (req, res) => {
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
empresaRouter.get('/buscar/:campo/:valor', async (req, res) => {
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
