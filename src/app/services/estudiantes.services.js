//Esto es un arreglo de memoria. Ya que no tenemos base de datos 
let estudiantes = [
    {
        id: 1,
        nombre: "sof",
        correo: "sof@example.com",
        edad: 16
    }
];

//Esta funcion devuelve todos los estudiantes 
const obtenerTodos = () => {
    return estudiantes;
};

// Buscar in identificador 
const obtenerPorId = (id) => {
    return estudiantes.find((estudiante) => estudiante.id === id);
};

/* Nota:
El signo = (Asignacion) sirve para guardar un valor de una variacion 
los signos == (igualdad debil) sirve para comparar valores
los tres signos === (igualdad estricta) sirve para comparar el valor y el tipo de dato
*/

//Crear un nuevi estudiantes copiando los datos resividos
const crear = (datos) => {
    const nuevoEstudiantes = {
        id: estudiantes.length + 1,
        ...datos
    };

    estudiantes.push(nuevoEstudiantes);

    return nuevoEstudiantes;
};

const actualizar = (id, datos) => {

    // Buscamos la posición del estudiante
    const indice = estudiantes.findIndex (
        (estudiante) => estudiante.id === id
    );

    if (indice === -1){
        return null;
    };

    estudiantes [indice] = {
        ...estudiantes [indice],
        ...datos,
        id
    };

    return estudiantes [indice];
};

const eliminar = (id) => {
    const indice = estudiantes.findIndex (
        (estudiante) => estudiante.id === id
    );

    if (indice === -1){
        return null;
    }

    const estudianteEliminado = estudiantes[indice];

    // Eliminar un elemento del arreglo comenzado
    // Desde determinada posición. 
    estudiantes.splice (indice, 1);

    return estudianteEliminado

}

// Si crean una función y se les olvida exportarla
// Despues ontrollers no podra utilizarla. 
module.exports = {
    obtenerTodos,
    obtenerPorId,
    crear,
    actualizar,
    eliminar 
};
