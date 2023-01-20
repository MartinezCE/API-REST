import express from 'express'
import {  deleteById, editById,  getForm, getFormEdit } from './controllers/products.js';
import router from './routes/products.js';

const app = express();
const PORT = 8080;
const __dirname = new URL('.', import.meta.url).pathname

app.use('/public', express.static(__dirname + '/public'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use('/products',router)

app.set('view engine', 'ejs');




app.get('/form', getForm);

app.delete('/:id', deleteById);

app.get('/edit/:id',getFormEdit)

app.put('/:id', editById)



const server = app.listen(PORT, () => {
    console.log(`Servidor http escuchando en el puerto ${server.address().port}`);
});
server.on('error', (error) => console.log(`Error en servidor ${error}`));

