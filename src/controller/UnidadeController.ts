import { resolve4 } from "dns";
import { getManager, Like } from "typeorm";
import Unidade from "../entity/Unidade";
import { removeFieldsNull } from "../utils/Utils";



export class UnidadeController {

    maxResultQuery = 100;

    async salvar(unidade: Unidade) {
        console.log('UnidadeController/salvar --> Unidade.nome: ', unidade.nome);
        const result = await getManager().save(unidade);
        return await removeFieldsNull(result);

    }

    async excluir(id) {
        console.log('UnidadeController/excluir --> Unidade.id: ', id);
        const result = await getManager().delete(Unidade, { id: id} );
        return result;
    }

    async alterar(unidade: Unidade) {
        console.log('UnidadeController/alterar --> Unidade.id: ', unidade.id);
        const result = await getManager().update(Unidade, unidade.id, unidade);
        return result;
    }

    async buscarTodos() {
        console.log('UnidadeController/buscarTodos');
        const [result, total] = await (await getManager().findAndCount
            (Unidade, { order: { nome: 'ASC' }, take: this.maxResultQuery }));
        console.log('TOTAL ', total);
        return await removeFieldsNull(result);
    }

    async buscarPorId(id) {
        console.log('UnidadeController/buscarPorId --> id:', id);
        const result = await getManager().findByIds(Unidade, id);  
        return await removeFieldsNull(result);
    }

    async buscarPorCampos(json: any) {
        console.log('UnidadeController/buscarPorCampos --> ', json);
        const result = await getManager().find(Unidade, json);
        return await removeFieldsNull(result);
    }

    async buscarPorCampoParcial(campo: string, valor: string) {
        console.log('UnidadeController/buscarPorNome [campo:valor]:', campo, ':', valor);
        const result = await getManager().query
            ('SELECT * FROM tb_unidades WHERE ' + campo + ' LIKE "%' + valor +
                '%"  LIMIT ' + this.maxResultQuery);
        return await removeFieldsNull(result);
        /** MELHORAR ESSE MÈTODO --> PERIGO DE SQL INJECTOR */
    }

  

}
