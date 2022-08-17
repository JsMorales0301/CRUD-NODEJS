const express = require('express');
const cors = require('cors');
const Connection = require('../database/connection');

class Server{

    constructor(){
        this.app = express();
        this.port = process.env.PORT;
        this.middlewares();
        this.connect = new Connection();
        this.paths = {
            users: '/api/users'
        }
        this.dbConnect();
        this.routes();
    }

    async dbConnect(){
        await this.connect.dbConnect();
    }

    middlewares(){
        this.app.use(cors());
        this.app.use(express.json());
    }

    listen(){
        this.app.listen(this.port, () => {
            console.log(`Server ready in PORT: ${ this.port }`);
        })
    }

    routes(){
        this.app.use(this.paths.users, require('../routes/user.routes'));
    }

}

module.exports = Server;