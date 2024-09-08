import mongoose from 'mongoose';


const dbConection = async () => {

    try {
        await mongoose.connect( process.env.DB_URI);
        console.log( 'Base de datos inicializada correctamente' );
    }
    catch( error ) {
        console.error( error );
        throw new Error( 'Error al inicializar la base de datos' );
    }

}


export default dbConection