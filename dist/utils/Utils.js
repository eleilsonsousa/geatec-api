"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const typeorm_1 = require("typeorm");
/** TRATAR ERROS DE TODAS REQUISICOES DO SISTEMA */
function getLogErros(err) {
    if (err.status == 400) {
        return 'Erro: 404 --> ' + ' Verifique os dados de consulta, e tente novamente';
    }
    else {
        return 'Erro: ' + err.status + '--> ' + err.message;
    }
}
exports.getLogErros = getLogErros;
/** REMOVE CAMPOS NULOS DE UM JSON */
function removeFieldsNull(obj) {
    var isArray = obj instanceof Array;
    for (var k in obj) {
        if (obj[k] === null)
            isArray ? obj.splice(k, 1) : delete obj[k];
        else if (typeof obj[k] == "object")
            removeFieldsNull(obj[k]);
        if (isArray && obj.length == k)
            removeFieldsNull(obj);
    }
    return obj;
}
exports.removeFieldsNull = removeFieldsNull;
/** CONVERTE UM JSON EM UM INSTANCIA TYPEORM */
function converteToObject(Class, body) {
    const repos = typeorm_1.getRepository(Class);
    const result = repos.create(body);
    return result;
}
exports.converteToObject = converteToObject;
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
//# sourceMappingURL=Utils.js.map