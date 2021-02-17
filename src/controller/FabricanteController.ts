import { getManager, Like } from "typeorm";
import Fabricante from "../entity/Fabricante";
import { removeFieldsNull } from "../utils/Utils";



export class FabricanteController {

    maxResultQuery = 100;

    async salvar(fabricante: Fabricante) {
        console.log('FabricanteController/salvar --> Fabricante.nome: ', fabricante.nome);
        const result = await getManager().save(fabricante);
        return await removeFieldsNull(result);

    }

    async excluir(id) {
        console.log('FabricanteController/excluir --> Fabricante.id: ', id);
        const result = await getManager().delete(Fabricante, { id: id} );
        return result;
    }

    async alterar(fabricante: Fabricante) {
        console.log('FabricanteController/alterar --> Fabricante.id: ', fabricante.id);
        const result = await getManager().update(Fabricante, fabricante.id, fabricante);
        return result;
    }

    async buscarTodos() {
        console.log('FabricanteController/buscarTodos');
        const [result, total] = await (await getManager().findAndCount
            (Fabricante, { order: { nome: 'ASC' }, take: this.maxResultQuery }));
        console.log('TOTAL ', total);
        return await removeFieldsNull(result);
    }

    async buscarPorId(id) {
        console.log('FabricanteController/buscarPorId --> id:', id);
        const result = await getManager().findByIds(Fabricante, id);  
        return await removeFieldsNull(result);
    }

    async buscarPorCampos(json: any) {
        console.log('FabricanteController/buscarPorCampos --> ', json);
        const result = await getManager().find(Fabricante, json);
        return await removeFieldsNull(result);
    }

    async buscarPorCampoParcial(campo: string, valor: string) {
        console.log('FabricanteController/buscarPorNome [campo:valor]:', campo, ':', valor);
        const result = await getManager().query
            ('SELECT * FROM tb_fabricantes WHERE ' + campo + ' LIKE "%' + valor +
                '%"  LIMIT ' + this.maxResultQuery);
        return await removeFieldsNull(result);
        /** MELHORAR ESSE MÈTODO --> PERIGO DE SQL INJECTOR */
    }

  

}
