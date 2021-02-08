import { resolve4 } from "dns";
import { getManager, Like } from "typeorm";
import Produto from "../entity/Produto";
import { removeFieldsNull } from "../utils/Utils";



export class ProdutoController {

    maxResultQuery = 100;

    async salvar(produto: Produto) {
        console.log('ProdutoController/salvar --> Produto.nome: ', produto.nome);
        const result = await getManager().save(produto);
        return await removeFieldsNull(result);

    }

    async excluir(produto: Produto) {
        console.log('ProdutoController/excluir --> Produto.id: ', produto.id);
        const result = await getManager().delete(Produto, produto);
        return result;
    }

    async alterar(produto: Produto) {
        console.log('ProdutoController/alterar --> Produto.id: ', produto.id);
        const result = await getManager().update(Produto, produto.id, produto);
        return result;
    }


    async buscarTodos() {
        console.log('ProdutoController/buscarTodos');
        const [result, total] = await (await getManager().findAndCount
            (Produto, { order: { nome: 'ASC' }, take: this.maxResultQuery }));
        console.log('TOTAL ', total);
        return await removeFieldsNull(result);
       
    }

    async buscarPorId(id) {
        const result = await getManager().findByIds(Produto, id);         
        return await removeFieldsNull(result);
    }

    async buscarPorCampos(json: any) {
        console.log('ProdutoController/buscarPorCampos --> ', json);
        const result = await getManager().find(Produto, json);
        return await removeFieldsNull(result);
    }

    async buscarPorCampoParcial(campo: string, valor: string) {
        console.log('ProdutoController/buscarPorNome [campo:valor]:', campo, ':', valor);
        const result = await getManager().query
            ('SELECT * FROM tb_produtos WHERE ' + campo + ' LIKE "%' + valor +
                '%"  LIMIT ' + this.maxResultQuery);
        return await removeFieldsNull(result);
        /** MELHORAR ESSE MÈTODO --> PERIGO DE SQL INJECTOR */
    }
    

}
