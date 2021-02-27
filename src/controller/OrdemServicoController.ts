import { getManager, getRepository, Like } from "typeorm";
import OrdemServico from "../entity/OrdemServico";
import OrdemServicoItemProd from "../entity/OrdemServicoItemProd";
import OrdemServicoItemServ from "../entity/OrdemServicoItemServ";
import { removeFieldsNull } from "../utils/Utils";



export class OrdemServicoController {

    maxResultQuery = 100;

    async salvar(ordemservico: OrdemServico) {
     
       // const proxNumOs = await this.buscarProxNumeroOrdemServico(ordemservico);
       // ordemservico.numero = proxNumOs;
      // // console.log('ProxNum', proxNumOs);

        console.log(ordemservico);

        console.log('OrdemServicoController/salvar --> OrdemServico ', ordemservico);
        const result = await getManager().save(OrdemServico, ordemservico);
        return await removeFieldsNull(result);

    }
    async buscarProxNumeroOrdemServico(ordemservico: OrdemServico) {
        if(!ordemservico.id) {
            ordemservico.id = 1;
        }

       // console.log('OrdemServicoController/buscarProxNumeroOrdemServico :', ordemservico);
        const sql = (' SELECT id FROM tb_ordens_servico os WHERE idEmpresa = ' + ordemservico.empresa.id +
            ' AND os.id = ( SELECT MAX(id) FROM tb_ordens_servico )');

            console.log(sql);

        const result = await getManager().query(sql);

        if (result) return 1
        else {
            return result;
        }



       

        

        return await removeFieldsNull(result);
        /** MELHORAR ESSE MÈTODO --> PERIGO DE SQL INJECTOR */
    }

    async excluir(id) {
        console.log('OrdemServicoController/excluir --> OrdemServico.id: ', id);
        const result = await getManager().delete(OrdemServico, id);
        return result;
    }

    async alterar(req) {
        console.log('OrdemServicoController/alterar --> por Request: ', req.body);
        const ordemServicoJson = req.body;

        /** Excluindo produtos da Ordem de Serviço */
        await getManager().delete(OrdemServicoItemProd, { ordemServico: ordemServicoJson.id });

        /** Excluindo servico da Ordem de Serviço */
        await getManager().delete(OrdemServicoItemServ, { ordemServico: ordemServicoJson.id });

        /** Salvando Novos Produtos na OrdemServiço */
        await ordemServicoJson.itensProdutos.forEach(itemProduto => {
            const itemProd = getManager().create(OrdemServicoItemProd, itemProduto);
            itemProd.ordemServico = new OrdemServico();
            itemProd.ordemServico.id = ordemServicoJson.id;
            getManager().save(OrdemServicoItemProd, itemProd);
        });

        /** Salvando Novos Servico na OrdemServiço */
        await ordemServicoJson.itensServicos.forEach(itemServico => {
            const itemServ = getManager().create(OrdemServicoItemServ, itemServico);
            console.log("itemSev - ", itemServ)
            itemServ.ordemServico = new OrdemServico();
            itemServ.ordemServico.id = ordemServicoJson.id;
            getManager().save(OrdemServicoItemServ, itemServ);
        });

        /** Salvando Dados da nota */
        await delete ordemServicoJson['itensProdutos'];
        await delete ordemServicoJson['itensServicos'];
        const result = getManager().update(OrdemServico, ordemServicoJson.id, ordemServicoJson);
        return result;
    }


    async buscarTodos() {
        console.log('OrdemServicoController/buscarTodos');
        const [result, total] = await (await getManager().findAndCount
            (OrdemServico, { take: this.maxResultQuery }));
        console.log('TOTAL ', total);
        return await removeFieldsNull(result);
    }

    async buscarPorId(id) {
        console.log('OrdemServicoController/buscarPorId --> id:', id);
        const result = await getManager().findByIds(OrdemServico, id);
        return await removeFieldsNull(result);
    }

    async buscarPorCampos(json: any) {
        console.log('OrdemServicoController/buscarPorCampos --> ', json);
        const result = await getManager().find(OrdemServico, json);
        return await removeFieldsNull(result);
    }

    async buscarPorCampoParcial(campo: string, valor: string) {
        console.log('OrdemServicoController/buscarPorNome [campo:valor]:', campo, ':', valor);
        const result = await getManager().query
            ('SELECT * FROM tb_ordens_servicos WHERE ' + campo + ' LIKE "%' + valor +
                '%"  LIMIT ' + this.maxResultQuery);
        return await removeFieldsNull(result);
        /** MELHORAR ESSE MÈTODO --> PERIGO DE SQL INJECTOR */
    }




}
