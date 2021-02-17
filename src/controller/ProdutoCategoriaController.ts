import { resolve4 } from "dns";
import { getManager, Like } from "typeorm";
import ProdutoCategoria from "../entity/ProdutoCategoria";
import { removeFieldsNull } from "../utils/Utils";



export class ProdutoCategoriaController {

    maxResultQuery = 100;

    async salvar(produtocategoria: ProdutoCategoria) {
        console.log('ProdutoCategoriaController/salvar --> ProdutoCategoria.nome: ', produtocategoria.nome);
        const result = await getManager().save(produtocategoria);
        return await removeFieldsNull(result);

    }

    async excluir(id) {
        console.log('ClienteController/excluir --> cliente.id: ', id);
        const result = await getManager().delete(ProdutoCategoria, id);
        return result;
    }

    async alterar(produtocategoria: ProdutoCategoria) {
        console.log('ProdutoCategoriaController/alterar --> ProdutoCategoria.id: ', produtocategoria.id);
        const result = await getManager().update(ProdutoCategoria, produtocategoria.id, produtocategoria);
        return result;
    }


    async buscarTodos() {
        console.log('ProdutoCategoriaController/buscarTodos');
        const [result, total] = await (await getManager().findAndCount
            (ProdutoCategoria, { order: { nome: 'ASC' }, take: this.maxResultQuery }));
        console.log('TOTAL ', total);
        return await removeFieldsNull(result);
    }

    async buscarPorId(id) {
        console.log('ProdutoCategoriaController/buscarPorId --> id:', id);
        const result = await getManager().findByIds(ProdutoCategoria, id);  
        return await removeFieldsNull(result);
    }

    async buscarPorCampos(json: any) {
        console.log('ProdutoCategoriaController/buscarPorCampos --> ', json);
        const result = await getManager().find(ProdutoCategoria, json);
        return await removeFieldsNull(result);
    }

    async buscarPorCampoParcial(campo: string, valor: string) {
        console.log('ProdutoCategoriaController/buscarPorNome [campo:valor]:', campo, ':', valor);
        const result = await getManager().query
            ('SELECT * FROM tb_produtocategorias WHERE ' + campo + ' LIKE "%' + valor +
                '%"  LIMIT ' + this.maxResultQuery);
        return await removeFieldsNull(result);
        /** MELHORAR ESSE MÈTODO --> PERIGO DE SQL INJECTOR */
    }

}
