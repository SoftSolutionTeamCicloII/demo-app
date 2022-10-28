const mongoose=require("mongoose"); 

const connectDatabase = () => {
    mongoose.connect(process.enviroment.DB_LOCAL_UR, {
        userNewUrlParser: true,
        useUnifiedTopology: true

    }), then (con => {
        console.log(`Base de datos conectada con el servidor: ${con.connection.host}`)

    })

}

