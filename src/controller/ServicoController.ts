import { getManager, Like } from "typeorm";
import Servico from "../entity/Servico";
import { removeFieldsNull } from "../utils/Utils";



export class ServicoController {

    maxResultQuery = 100;

    async salvar(servico: Servico) {
        console.log('ServicoController/salvar --> Servico.nome: ', servico.nome);
        const result = await getManager().save(servico);
        return await removeFieldsNull(result);

    }

    async excluir(servico: Servico) {
        console.log('ServicoController/excluir --> Servico.id: ', servico.id);
        const result = await getManager().delete(Servico, servico);
        return result;
    }

    async alterar(servico: Servico) {
        console.log('ServicoController/alterar --> Servico.id: ', servico.id);
        const result = await getManager().update(Servico, servico.id, servico);
        return result;
    }


    async buscarTodos() {
        console.log('ServicoController/buscarTodos');
        const [result, total] = await (await getManager().findAndCount
            (Servico, { order: { nome: 'ASC' }, take: this.maxResultQuery }));
        console.log('TOTAL ', total);
        return await removeFieldsNull(result);
    }

    async buscarPorId(id) {
        console.log('ServicoController/buscarPorId --> id:', id);
        const result = await getManager().findByIds(Servico, id);  
        return await removeFieldsNull(result);
    }

    async buscarPorCampos(json: any) {
        console.log('ServicoController/buscarPorCampos --> ', json);
        const result = await getManager().find(Servico, json);
        return await removeFieldsNull(result);
    }

    async buscarPorCampoParcial(campo: string, valor: string) {
        console.log('ServicoController/buscarPorNome [campo:valor]:', campo, ':', valor);
        const result = await getManager().query
            ('SELECT * FROM tb_servicos WHERE ' + campo + ' LIKE "%' + valor +
                '%"  LIMIT ' + this.maxResultQuery);
        return await removeFieldsNull(result);
        /** MELHORAR ESSE MÈTODO --> PERIGO DE SQL INJECTOR */
    }

    

}
