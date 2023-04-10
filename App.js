import express from 'express';
import routerCart from "./Routes/Cart.js"
import routerProd from "./Routes/Productos.js"

const app = express();
const PORT = 8080;
app.use(express.json());
app.use(express.urlencoded({ extended: true }));



app.use( "/cart", routerCart)
app.use( "/productos", routerProd)
app.get ("/", (req,res)=> res.send
(`<h1 style="color:blue;text-align: center;">Primera Entrega del Proyecto Final </h1>
  <h2 Style="text-align:center">CRUD de productos y Carrito utilizando Express-Router</h2>
`))


app.listen(PORT, () => {
    console.log(`Servidor http escuchando en el puerto`+PORT)
    })