import { createConnection } from 'typeorm';

export const connectDatabase = async () => {
    const connection = await createConnection();
    console.log("Conexão aberta com o banco de dados.");

    process.on('SIGINT', () => {
        connection.close().then( () => 
        console.log('Conexão com o banco fechada.'))
    })
}

   