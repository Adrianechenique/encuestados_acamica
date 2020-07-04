/*
 * Modelo
 */
var Modelo = function() {
    this.preguntas = [];
    this.ultimoId = 0;

    //inicializacion de eventos
    this.preguntaAgregada = new Evento(this);
    this.preguntaEliminada = new Evento(this);
};

Modelo.prototype = {
    //se obtiene el id más grande asignado a una pregunta
    obtenerUltimoId: function() {

        let arrayId = this.preguntas.map(elemento => {
            let $id = elemento.id;
            return $id
        })
        let idMayor = Math.max.apply(null, arrayId);
        return idMayor
    },

    //se agrega una pregunta dado un nombre y sus respuestas
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




    //se guardan las preguntas
    guardar: function() {}


};