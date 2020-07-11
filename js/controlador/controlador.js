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

    borrarPregunta: function(id) {
        this.modelo.eliminarPregunta(id)
    },

    editarPregunta: function(id, nuevaPregunta) {
        this.modelo.editarPreguntaSeleccionada(id, nuevaPregunta)
    }


};