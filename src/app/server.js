//Este archivo será el punto de entrada del servidor
//su unica resonsabilidad inicial sera levantar el puerto

//Estamos importando la aplicacion que configuramos en otro archivo
const app = require("./app");
//guardamos el puerto en una constante
const port = 3000;


//Le indicamos que escuche la solicitudes en este puerto
app.listen(port, () => {
    console.log(`Servidor ejecutandose en http://localhost:${port}`);
});