/*
 * Modelo
 */
var Modelo = function() {
    // this.preguntas = [];
    this.ultimoId = 0;
    let storage = localStorage.getItem("preguntas");
    this.preguntas = storage ? JSON.parse(storage) : [];


    //inicializacion de eventos
    this.preguntaAgregada = new Evento(this);
    this.preguntaEliminada = new Evento(this);
    this.preguntaEditada = new Evento(this); //llevar a linea 52
    this.preguntasBorradas = new Evento(this);
    this.preguntaVotada = new Evento(this);
};

Modelo.prototype = {
    //se obtiene el id más grande asignado a una pregunta

    obtenerUltimoId: function() {
        let _ultimoId = -1;
        this.preguntas.forEach(element => {
            while (element.id > _ultimoId) {
                _ultimoId++;
            }
        });
        return _ultimoId;
    },


    agregarPregunta: function(nombre, respuestas) {
        let id = this.obtenerUltimoId();
        id++;
        let nuevaPregunta = {
            'textoPregunta': nombre,
            'id': id,
            'cantidadPorRespuesta': respuestas
        };

        this.preguntas.push(nuevaPregunta);
        this.guardar();
        this.preguntaAgregada.notificar();
    },

    //se guardan las preguntas
    guardar: function() {
        localStorage.setItem('preguntas', JSON.stringify(this.preguntas));
    },

    eliminarPregunta: function(id) {
        // let index = this.preguntas.find(elemento => {
        //     return elemento.id == id
        // })

        let index = this.preguntas.findIndex(elemento => elemento.id == idPregunta);

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

    agregarVotos: function(nombrePregunta, respuestaSeleccionada) {
        this.preguntas.forEach((pregunta) => {
            if (pregunta.textoPregunta === nombrePregunta) {
                pregunta.cantidadPorRespuesta.forEach((respuesta) => {
                    if (respuesta.textoRespuesta === respuestaSeleccionada) {
                        respuesta.cantidad++;
                    }
                })
            }
        })
        this.guardar();
        this.preguntaVotada.notificar()
    },

    obtenerPreguntas: function() {
        localStorage.getItem('preguntas', JSON.parse())
    }

}