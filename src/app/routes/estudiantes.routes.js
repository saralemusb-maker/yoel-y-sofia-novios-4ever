const express = require("express");

//Un router permite agrupar las rutas de un recurso 
const router = express.Router();

const estudiantesControllers = require("../controllers/estudiantes.controllers");

//Cunado llegue el GET a la ruta principal de esgtudiantes, ejecuta obtenerEstudiantes
router.get("/", estudiantesControllers.obtenerEstudiantes);

//Cuando LLegue el GET
router.get("/.id", estudiantesControllers.obtenerEstudiantesPorId);

// Cuando llegue el POST
router.post("/", estudiantesControllers.crearEstudiante);

router.put("/:id", estudiantesControllers.actualizarEstudiante);

router.delete("/:id", estudiantesControllers.eliminarEstudiante);

module.exports = router;