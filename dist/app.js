"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const ConnectDB_1 = require("./database/ConnectDB");
const ClienteRouter_1 = require("./routers/ClienteRouter");
const EmpresaRouter_1 = require("./routers/EmpresaRouter");
const UnidadeRouter_1 = require("./routers/UnidadeRouter");
const ServicoRouter_1 = require("./routers/ServicoRouter");
const ProdutoRouter_1 = require("./routers/ProdutoRouter");
const ProdutoCategoriaRouter_1 = require("./routers/ProdutoCategoriaRouter");
const OrdemServicoRouter_1 = require("./routers/OrdemServicoRouter");
const FabricanteRouter_1 = require("./routers/FabricanteRouter");
/** CONFIGURAÇÃO DE PORTA */
const app = express();
app.use(cors());
/* app.use('Access-Control-Allow-Origin', '*');
app.use('Access-Control-Allow-Header', 'Origin',
        'X-Requested-With', 'Content-Type', 'Accept', 'Authorization'); */
app.use(bodyParser.urlencoded({ extended: false })); // apenas dados simples
app.use(bodyParser.json({ limit: '6mb' }));
const port = process.env.PORT || 3000;
const server = app.listen(port, () => console.log('Running Server ' + port));
/****************************************************** */
/** CRIAR CONEXAO COM BANCO DE DADOS MYSQL */
ConnectDB_1.connectDatabase();
/** DEFINIÇÃO DE ROTAS */
app.get('/', (req, res) => { res.send(' =======> BEM VINDO A GEATEC API <======= '); });
app.use('/clientes', ClienteRouter_1.clienteRouter);
app.use('/empresas', EmpresaRouter_1.empresaRouter);
app.use('/unidades', UnidadeRouter_1.unidadeRouter);
app.use('/fabricantes', FabricanteRouter_1.fabricanteRouter);
app.use('/servicos', ServicoRouter_1.servicoRouter);
app.use('/produtos', ProdutoRouter_1.produtoRouter);
app.use('/produtos-categorias', ProdutoCategoriaRouter_1.produtoCategoriaRouter);
app.use('/ordens-servicos', OrdemServicoRouter_1.ordemservicoRouter);
/** TRANTANDO ERROS DE URL'S */
app.use((req, res, next) => {
    const erro = new Error('Url não encontrada, verifique os dados e tente novamente.');
    next(erro);
});
app.use((error, req, res, next) => {
    res.status(error.status || 500);
    return res.send({
        Atenção: {
            mensagem: ' --> ' + error.message,
        },
    });
});
/********************************************************************************** */ 
//# sourceMappingURL=app.js.map