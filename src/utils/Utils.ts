import { getManager, getRepository } from "typeorm";

/** TRATAR ERROS DE TODAS REQUISICOES DO SISTEMA */
export function getLogErros(err) {
    if (err.status == 400) {
        return 'Erro: 404 --> ' + ' Verifique os dados de consulta, e tente novamente';
    }
    else {
        return 'Erro: ' + err.status + '--> ' + err.message;
    }
}

/** REMOVE CAMPOS NULOS DE UM JSON */
export function removeFieldsNull(obj) {
    var isArray = obj instanceof Array;
    for (var k in obj) {
      if (obj[k] === null) isArray ? obj.splice(k, 1) : delete obj[k];
      else if (typeof obj[k] == "object") removeFieldsNull(obj[k]);
      if (isArray && obj.length == k) removeFieldsNull(obj);
    }
    return obj;
  }

/** CONVERTE UM JSON EM UM INSTANCIA TYPEORM */
export function  converteToObject(Class, body ): any {
    const repos = getRepository(Class);
    const result = repos.create(body)
    return result;
}





  /* export function reqToClass(obj) {
    for (var propriedade in obj) {
      if (obj.hasOwnProperty(propriedade)) {
        if (typeof obj[propriedade] == "object") {
          percorrer(obj[propriedade]);
        } else {
          resultado.push(obj[propriedade]);
        }
      }
    }
  } */