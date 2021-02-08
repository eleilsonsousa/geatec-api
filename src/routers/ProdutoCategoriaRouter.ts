import { Router } from 'express';
import { EmpresaController } from '../controller/EmpresaController';
import { ProdutoCategoriaController } from '../controller/ProdutoCategoriaController';
import ProdutoCategoria from "../entity/ProdutoCategoria";
import { converteToObject, getLogErros } from '../utils/Utils';


export const produtoCategoriaRouter = Router();
const controller = new ProdutoCategoriaController();

/** POST - Salvar Dados */
produtoCategoriaRouter.post('/', async (req, res) => {
    try {
        console.log('POST/salvar -> ', req.body);
        const produtocategoria = await converteToObject(ProdutoCategoria, req.body);
        const result = await controller.salvar(produtocategoria);
        res.json(result);
    } catch (err) {
        res.json(getLogErros(err));
        console.log('err.message :=> ', err.message);
    }

});

/** PUT - Alerar Dados */
produtoCategoriaRouter.put('/', async (req, res, next) => {
    try {
        console.log('PUT/alterar -> ', req.body);
        const produtocategoria = await converteToObject(ProdutoCategoria, req.body);
        const result = await controller.alterar(produtocategoria);
        res.json(result);
    } catch (err) {
        res.json(getLogErros(err));
        console.log('err.message :=> ', err.message);
    }
})


/** DELETE - Deletar Dados */
produtoCategoriaRouter.delete('/', async (req, res, next) => {
    try {
        console.log('DELETE/excluir -> ', req.body);
        const produtocategoria = await converteToObject(ProdutoCategoria, req.body);
        const result = await controller.excluir(produtocategoria);
        res.json(result);
    } catch (err) {
        res.json(getLogErros(err));
        console.log('err.message :=> ', err.message);
    }

})


/** GET - Buscar Todos */
produtoCategoriaRouter.get('/', async (req, res) => {
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
produtoCategoriaRouter.get('/buscar', async (req, res) => {
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
produtoCategoriaRouter.get('/:id', async (req, res) => {
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
produtoCategoriaRouter.get('/buscar/:campo/:valor', async (req, res) => {
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

