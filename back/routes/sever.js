const app=require("./app")
const connectDatabase = require("../config/database");

//setear el archivo de configuracion
const dotenv=require("dotenv"); 
dotenv.configr({path: 'back/config/config.env'})

//configurar base de datos
connectDatabase

//llamemos al server
const sever=app.listen(process.env.PORT, () => {

    console.log('Servidor iniciado en el puerto: ${process.env.PORT} en modo: ${process.env.NODE_ENV}')

})
    
    