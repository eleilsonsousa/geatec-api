import * as express from 'express';
import * as bodyParser from 'body-parser';
import * as logger from 'morgan';
import * as cors from 'cors';

import { connectDatabase } from './database/ConnectDB';  
import { getLogErros } from './utils/Utils';

import { clienteRouter } from './routers/ClienteRouter';
import { empresaRouter } from './routers/EmpresaRouter';
import { unidadeRouter } from './routers/UnidadeRouter';
import { servicoRouter } from './routers/ServicoRouter';
import { produtoRouter } from './routers/ProdutoRouter';
import { produtoCategoriaRouter } from './routers/ProdutoCategoriaRouter';
import { ordemservicoRouter } from './routers/OrdemServicoRouter';
import { fabricanteRouter } from './routers/FabricanteRouter';


/** CONFIGURAÇÃO DE PORTA */
const app = express();
app.use(cors());
/* app.use('Access-Control-Allow-Origin', '*');
app.use('Access-Control-Allow-Header', 'Origin', 
        'X-Requested-With', 'Content-Type', 'Accept', 'Authorization'); */

        
app.use(bodyParser.urlencoded({ extended: false })) // apenas dados simples
app.use(bodyParser.json({ limit: '6mb' }));

const port = process.env.PORT || 3000;

const server = app.listen(port, () =>
    console.log('Running Server ' + port));
/****************************************************** */



/** CRIAR CONEXAO COM BANCO DE DADOS MYSQL */
connectDatabase();

/** DEFINIÇÃO DE ROTAS */
app.get('/', (req, res) => { res.send(' =======> BEM VINDO A GEATEC API <======= '); })
app.use('/clientes', clienteRouter);
app.use('/empresas', empresaRouter);
app.use('/unidades', unidadeRouter);
app.use('/fabricantes', fabricanteRouter);
app.use('/servicos', servicoRouter);
app.use('/produtos', produtoRouter);
app.use('/produtos-categorias', produtoCategoriaRouter);
app.use('/ordens-servico', ordemservicoRouter);

/** TRANTANDO ERROS DE URL'S */
app.use((req, res, next) => {
    const erro = new Error('Url não encontrada, verifique os dados e tente novamente.')
    next(erro);
});

app.use((error, req, res, next) => {
    res.status(error.status || 500)
    return res.send({
        Atenção: {
            mensagem: ' --> ' + error.message,
        },

    });
});

/********************************************************************************** */