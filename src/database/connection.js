const { Sequelize } = require('sequelize');
require('dotenv').config();

class Connection{

    constructor(){
        this.name_database = process.env.name_database;
        this.username = process.env.username;
        this.password = process.env.password;
        this.host = process.env.host;
        this.dialect = process.env.dialect;
        this.sequelize = new Sequelize(this.name_database, this.username, this.password, {
            host: this.host,
            dialect: this.dialect
        });
    }

    async dbConnect(){
        try {
            await this.sequelize.authenticate();
            console.log('¡Conexión establecida con la base de datos!');
        } catch (error) {
            console.error(`Error conectando con la base de datos: ${ error }`);
        }
    }
}



module.exports = Connection;
