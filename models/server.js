const express = require('express');
const cors = require('cors');


class Server {

    constructor() {
        this.app = express();
        this.port = process.env.PORT;
        this.usuariosPath = '/api/usuarios';

        //MIDDLEWARES
        this.middlewares();


        //RUTAS
        this.routes();
    }

    middlewares() {
        //CORS
        this.app.use( cors() );

        //Lectura y parse del body
        this.app.use( express.json() ) //Con este middleware se permite obtener los body de los JSON

        //Directorio publico
        this.app.use( express.static('public') );
    }

    routes() {
       this.app.use(this.usuariosPath, require('../routes/user'));
    }

    listen() {
        this.app.listen(this.port, () => {
            console.log(`Server is running on port ${this.port}`)	
        })
    }
}

module.exports = Server;