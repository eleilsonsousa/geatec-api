import { getManager, Like } from "typeorm";
import Cliente from "../entity/Cliente";
import { removeFieldsNull } from "../utils/Utils";
export class ClienteController {

    maxResultQuery = 100;

    async salvar(cliente: Cliente) {
        console.log('ClienteController/salvar --> cliente.nome: ', cliente.nome);
        const result = await getManager().save(cliente);
        return await removeFieldsNull(result);
    }

    async excluir(id) {
        console.log('ClienteController/excluir --> cliente.id: ', id);
        const result = await getManager().delete(Cliente, id);
        return result;
    }

    async alterar(cliente: Cliente) {
        console.log('ClienteController/alterar --> cliente.id: ', cliente.id);
        const result = await getManager().update(Cliente, cliente.id, cliente);
        return result;
    }


    async buscarTodos() {
        console.log('ClienteController/buscarTodos');
        const [result, total] = await (await getManager().findAndCount
            (Cliente, { order: { nome: 'ASC' }, take: this.maxResultQuery }));
        console.log('TOTAL ', total);
        return await removeFieldsNull(result); 
    }

    async buscarPorId(id) {
        console.log('ClienteController/buscarPorId --> id:', id);
        const result = await getManager().findByIds(Cliente, id);  
        return await removeFieldsNull(result);
    }

    async buscarPorCampos(json: any) {
        console.log('ClienteController/buscarPorCampos --> ', json);
        const result = await getManager().find(Cliente, json);
        return await removeFieldsNull(result);
    }

    async buscarPorCampoParcial(campo: string, valor: string) {
        console.log('ClienteController/buscarPorNome [campo:valor]:', campo, ':', valor);
        const result = await getManager().query
            ('SELECT * FROM tb_clientes WHERE ' + campo + ' LIKE "%' + valor +
                '%"  LIMIT ' + this.maxResultQuery);
        return await removeFieldsNull(result);
        /** MELHORAR ESSE MÈTODO --> PERIGO DE SQL INJECTOR */
    }

    


}
