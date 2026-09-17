// Acceso a estudiantes services 
const estudiantesServices = require("../services/estudiantes.services");


const obtenerEstudiantes = (req, res) => {
    const estudiantes = estudiantesServices.obtenerTodos();

    res.json(estudiantes);
};

const obtenerEstudiantesPorId = (req, res) => {
    const id = Number (req.params.id);

    const estudiantes = estudiantesServices.obtenerPorId(id);

    if(!estudiantes){
        return res.status (404).json({
            error: "Estudiante no encontrado"
        });
    }

    res.json(estudiantes);
};

const crearEstudiante = (req, res) => {
    const {nombre, correo, edad} = req.body;

    if(!nombre || !correo || !edad){
        return res.status(400).json({
            error: "Todos los campos son obligatorios"
        });
    };

    const nuevoEstudiante = estudiantesServices.crear([
        nombre,
        correo,
        edad
    ]);

    res.status(201).json(nuevoEstudiante);
};

const actualizarEstudiante = (req, res) => {
    const id = Number (req.params.id);

    const datos = req.body;

    const estudianteActualizado =estudiantesServices.actualizar (id, datos);

    if (!estudianteActualizado) {
        return res.status (404).json({
            error: "Estudiante no encontrado"
        });
    }

    res.status  (200).json({
        mensaje: "Estudiante actualizado correctamente",
        estudiante: estudianteActualizado
    });
};

const eliminarEstudiante = (req, res) => {
    const id = Number (req.params.id);

    const estudianteEliminado = estudiantesServices.eliminar(id, datos);

    if (!estudianteEliminado) {
        return res.status (404).json({
            error: "Estudiante no encontramos"
        });
    }

    res.status (200).json({
        mensaje: "Estudiante eliminado correctamente",
        estudiante: estudianteEliminado
    });
};

module.exports = {
    obtenerEstudiantes,
    obtenerEstudiantesPorId,
    crearEstudiante,
    actualizarEstudiante,
    eliminarEstudiante
};





