const descripcion = {
    alias: 'd',
    demand: true,
    desc: 'Descripción de la tarea por hacer'
}

const completado = {
    alias: 'c',
    default: true,
    desc: 'Marca como completado o pendiente una tarea'
}

const argv = require('yargs')
    .command('actualizar', 'Actualiza el estado completado de una tarea', {
        completado, 
        descripcion
    })
    .command('crear', 'Crear tareas por hacer', {
        descripcion
    })
    .command('borrar', 'Borrar una tarea', {
        descripcion
    })
    .help()
    .argv;

module.exports = {
    argv
}