const { json } = require('express');
const express = require('express');
const router = express.Router();
const app = express();
app.use(express.json())
   

async function getReserv(req,response){
     //console.log(req.body)
     //console.log(req.body)
    // const {nombre } = req.body
    // console.log(nombre)

    try{
        fs = require('fs');
        await fs.readFile("./data/reservas.json", 'utf8', async function (err,data) {
            if (err){
                return console.log(err)
            }
            const resultadoJSON = await JSON.parse(data);
            try{
                 response.json(resultadoJSON);
            }catch(e){console.log(e)}      
        })
    }catch(err){console.log(err)}
}



// //app.use(cors(corsOptions))
app.use('/api/reservas', (req,res) => {
    // // Website you wish to allow to connect
     res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');

    // // Request methods you wish to allow
    // res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    // // Request headers you wish to allow
    // res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

    // res.setHeader('Access-Control-Allow-Origin', '*');
    // res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE'); // If needed
    // res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type'); // If needed
    // res.setHeader('Access-Control-Allow-Credentials', true); // If needed
    getReserv(req,res);
    console.log(req.body)
    // res.status(200).send(req.body);
    


})



const PORT = process.env.PORT || 4000;

app.listen(PORT,() => {
    console.log("Servidor funcionando en el puerto 4000");
})


module.exports = app;