import { getManager, Like } from "typeorm";
import Empresa from "../entity/Empresa";
import { removeFieldsNull } from "../utils/Utils";
export class EmpresaController {

    maxResultQuery = 100;

    async salvar(empresa: Empresa) {
        console.log('EmpresaController/salvar --> Empresa.nome: ', empresa.nome);
        const result = await getManager().save(empresa);
        return await removeFieldsNull(result);

    }

    async excluir(empresa: Empresa) {
        console.log('EmpresaController/excluir --> Empresa.id: ', empresa.id);
        const result = await getManager().delete(Empresa, empresa);
        return result;
    }

    async alterar(empresa: Empresa) {
        console.log('EmpresaController/alterar --> Empresa.id: ', empresa.id);
        const result = await getManager().update(Empresa, empresa.id, empresa);
        return result;
    }


    async buscarTodos() {
        console.log('EmpresaController/buscarTodos');
        const [result, total] = await (await getManager().findAndCount
            (Empresa, { order: { nome: 'ASC' }, take: this.maxResultQuery }));
        console.log('TOTAL ', total);
        return await removeFieldsNull(result);
    }

    async buscarPorId(id) {
        console.log('EmpresaController/buscarPorId --> id:', id);
        const result = await getManager().findByIds(Empresa, id);  
        return await removeFieldsNull(result);
    }

    async buscarPorCampos(json: any) {
        console.log('EmpresaController/buscarPorCampos --> ', json);
        const result = await getManager().find(Empresa, json);
        return await removeFieldsNull(result);
    }

    async buscarPorCampoParcial(campo: string, valor: string) {
        console.log('EmpresaController/buscarPorNome [campo:valor]:', campo, ':', valor);
        const result = await getManager().query
            ('SELECT * FROM tb_empresas WHERE ' + campo + ' LIKE "%' + valor +
                '%"  LIMIT ' + this.maxResultQuery);
        return await removeFieldsNull(result);
        /** MELHORAR ESSE MÈTODO --> PERIGO DE SQL INJECTOR */
    }

}
