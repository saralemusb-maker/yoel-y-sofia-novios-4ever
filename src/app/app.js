//este archivo tendra la configuracion principal de espress.

//importamos express
const express = require("express");
//creamos la aplicacion

const estudiantesRoutes = require("./routes/estudiantes.routes");

const app = express();
//permite que express pueda recibir datos enviados en formato JSON
app.use (express.json());


app.get("/", (req, res) => {
    res.send("API funcionando correctamente");
});

app.use("/estudiantes", estudiantesRoutes)

//Esta linea permite que server.js pueda utilizar la aplicacion 
module.exports = app;







/*app.get("/estudiantes", (req, res) => {
    res.json([
        {id: 1,
        nombre: "Ana"
        },
        {id: 2,
        nombre: "Carlos"
        },
        {id: 3,
        nombre: "Laura"
        }
    ]);
});

app.post('/estudiantes', (req, res) =>{
    
    const { id, nombre, correo, edad } = req.body;

    if (!id) {
        return res.status(400).json({
            error: "El id es obligatorio"
        });
    }

    if (!nombre) {
        return res.status(400).json({
            error: "El nombre es obligatorio"
        });
    }

    if (!correo) {
        return res.status(400).json({
            error: "El correo es obligatorio"
        });
    }

    if (!edad) {
        return res.status(400).json({
            error: "La edad es obligatoria"
        });
    }

    if (edad <= 0){
        return res.status(400).json({
            error: "La edad debe ser mayor a cero"
        })
    }

    if (edad < 18){
         return res.status(400).json({
            error: "El estudiante debe ser mayor de edad"
        })
    }

    res.status(201).json({
        mensaje: "Estudiante creado",
        estudiante: req.body
    });

});


app.put("/estudiantes/:id", (req, res) => {

const id = req.params.id;
const nombre = req.body.nombre;

   console.log(req.params);

   res.json({
       mensaje: "estudiante actualizado",
       id: id,
       nombre: nombre
   });
})

app.delete("/estudiantes/:id", (req, res) => {

    const id = req.params.id;

    res.json([{
        mensaje: "Estudiante eliminado",
        id: id
    }]);
});

app.get("/buscar", (req, res) => {
   console.log(req.query);

   res.json({
       mensaje: "busqueda realizada"
   });
});

app.get("/contacto", (req, res) => {
    res.send("Mi informacion de contacto es: ana@example.com");
});

app.get("/nosotros", (req, res) => {
    res.send("Somos un equipo de desarrolladores apasionados por crear soluciones innovadoras.");
});
*/




