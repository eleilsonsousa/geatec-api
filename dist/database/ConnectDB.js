"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const typeorm_1 = require("typeorm");
exports.connectDatabase = () => __awaiter(this, void 0, void 0, function* () {
    const connection = yield typeorm_1.createConnection();
    console.log("Conexão aberta com o banco de dados.");
    process.on('SIGINT', () => {
        connection.close().then(() => console.log('Conexão com o banco fechada.'));
    });
});
//# sourceMappingURL=ConnectDB.js.map