/*
 * Controlador
 */
var Controlador = function(modelo) {
    this.modelo = modelo;
};

Controlador.prototype = {
    agregarPregunta: function(pregunta, respuestas) {
        this.modelo.agregarPregunta(pregunta, respuestas);
    },

    borrarPregunta: function(idPregunta) {
        this.modelo.eliminarPregunta(idPregunta)
    },

    editarPregunta: function(id, nuevaPregunta) {
        this.modelo.editarPreguntaSeleccionada(id, nuevaPregunta)
    },

    borrarLasPreguntas: function() {
        this.modelo.borrarTodasLasPreguntas();
    },

    agregarVotos: function(nombrePregunta, respuestaSeleccionada) {
        this.modelo.agregarVotos(nombrePregunta, respuestaSeleccionada);
    }

};