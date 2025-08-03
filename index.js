import express from 'express'
const app = express() 

import libroRouter from "./Src/Routes/libro.router.js";
import prestamoRouter from "./Src/Routes/prestamos.router.js";
import usuarioRouter from "./Src/Routes/usuarios.router.js"


app.use(express.text());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(libroRouter);
app.use(prestamoRouter);
app.use(usuarioRouter);


//Apartado de logica especifica

/*app.get('/libros/disponibles', (req, res) => {
    res.send ("Obtener todos los libros con existencia disponible para prestamos");
});

app.get('/prestamos/usuarios/:id', (req, res) => {
    res.send("Obtener todos los prestamos de un usuarios especifico")
})

app.get('/prestamos/libros/:id_libro', (req, res) => {
    res.send ("Obtener todos los prestamos realizados por un libro")
})

})*/

//Conectar al servidor

app.listen(8080, () => {
    console.log ("Servidor escuchado en : http://localhost:8080 ")});