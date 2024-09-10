import express from 'express';
import cors from 'cors'
import dbConection from './src/config/dbConect.js';
import usurios from './src/routes/user.routes.js';
const app = express();
app.use(express.json());
const port = process.env.PORT ?? 3000
app.use(cors());


// conexión a mongo
dbConection()

app.use('/api', usurios)


app.listen(port, ()=>{
    console.log(`runing in port: ${port}`)
})