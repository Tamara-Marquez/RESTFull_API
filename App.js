import express from 'express'

const app = express() 

//Apartado de usuarios

app.get('/usuarios', (req, res) => {
    res.send("Obtener todos los usuarios");
});


app.get('/usuarios/:id', (req, res) => {
    res.send ("Obtener un usuario por su id_usuario");
});

app.post('/usuarios', (req, res) => {
    res.send ("Crear un nuevo usuario");
});

app.put('/usuarios/:id', (req, res) => {
    res.send ( "Actualizar los datos de un usuario");
});

app.delete('/usuarios/:id', (req, res) => {
    res.send ("Eliminar un usuario");
});


//Apartado de libros

app.get('/libros', (req, res) => {
    res.send("Obtener todos los libros");
});

app.get('/libros/:id', (req, res) => {
    res.send("Obtener un libro por su id_libro (o cualquiera de sus campos)");
});

app.post('/prestamos',(req, res)=> {
    res.send("Crear un nuevo libro");
});

app.put('/libros/:id', (req, res) => {
    res.send ("Actualizar los datos de un libro");
});

app.put('/libros/:id/existencia', (req, res) => {
    res.send ("Acualizar la existencia de un libro (cantidad disponible)");
});

app.delete('/libros/:id', (req, res) => {
    res.send ("Eliminar un libro");
});

//Apartado de prestamos

app.get('/prestamos', (req, res) => {
    res.send ("Obtener todos los prestamos");
 });

app.get('/prestamos/:id', (req, res) => {
    res.send ("Obtener un prestamo por su id_prestamo");
});

app.post('/prestamos', (req, res) => {
    res.send ("Creamos un nuevo prestamo (reserva de un libro)");
}); 

app.put('/prestamos/:id', (req, res) => {
    res.send ("Actualizar los datos de un prestamo");
});

app.delete('/prestamos/:id', (req, res) => {
    res.send ("Eliminar un prestamo");
});

//Apartado de reseñas

app.get('/resenias', (req, res)=> {
    res.send ("Obtener todas las reseñas");
});

app.get('/resenias/:id', (req, res)=> {
    res.send ("Obtener una reseña por su id_reseña");
});

app.get('/resenias/libro/:id_libro', (req, res)=> {
    res.send ("Obtener reseñas de un libro especifico");
});

app.post('/resenia', (req, res) => {
    res.send("Crear una nueva reseña");
});

app.put('/resenia/:id', (req, res) => {
    res.send ("Actualizar una reseña existente");
});

app.delete('/resenia/:id', (req, res) => {
    res.send ("Eliminar un prestamo");
});

//Apartado de logica especifica

app.get('/libros/disponibles', (req, res) => {
    res.send ("Obtener todos los libros con existencia disponible para prestamos");
});

app.get('/prestamos/usuarios/:id', (req, res) => {
    res.send("Obtener todos los prestamos de un usuarios especifico")
})

app.get('/prestamos/libros/:id_libro', (req, res) => {
    res.send ("Obtener todos los prestamos realizados por un libro")
})


//Conectar al servidor

app.listen(8080, () => {
    console.log ("Servidor escuchado en : http://localhost:8080 ")
})