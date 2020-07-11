/*
 * Modelo
 */
var Modelo = function() {
    this.preguntas = [];
    this.ultimoId = 0;

    //inicializacion de eventos
    this.preguntaAgregada = new Evento(this);
    this.preguntaEliminada = new Evento(this);
    this.preguntaEditada = new Evento(this); //llevar a linea 52
    this.preguntasBorradas = new Evento(this);
};

Modelo.prototype = {
    //se obtiene el id más grande asignado a una pregunta

    obtenerUltimoId: function() {
        let ultId = -1;
        this.preguntas.forEach(element => {
            while (element.id > ultId) {
                ultId++;
            }
        });
        return ultId;
    },


    agregarPregunta: function(nombre, respuestas) {
        var id = this.obtenerUltimoId();
        id++;
        var nuevaPregunta = { 'textoPregunta': nombre, 'id': id, 'cantidadPorRespuesta': respuestas };
        this.preguntas.push(nuevaPregunta);
        this.guardar();
        this.preguntaAgregada.notificar();
    },

    eliminarPregunta: function(id) {
        let index = this.preguntas.find(elemento => {
            return elemento.id == id
        })
        this.preguntas.splice(index, 1)
        this.guardar();
        this.preguntaEliminada.notificar();

    },

    editarPreguntaSeleccionada: function(idPregunta, nuevaPregunta) {
        let index = this.preguntas.findIndex(elemento => elemento.id == idPregunta);
        this.preguntas[index].textoPregunta = nuevaPregunta;
        this.guardar();
        this.preguntaEditada.notificar(); // evento!!!
    },

    borrarTodasLasPreguntas: function() {
        this.preguntas = [];
        this.guardar();
        this.preguntasBorradas.notificar(); // evento!!!
    },

    //se guardan las preguntas
    guardar: function() {}


};