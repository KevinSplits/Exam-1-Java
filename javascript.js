class Comentario {
    constructor(descripcion) {
        this.descripcion=descripcion;
        this.nombre="Anonimo";

    }
}

let Comentarios =[];

function agregarComentario() {
    const descripcion = document.getElementById('comentario').value;
    if (descripcion.trim() !== "") {
        Comentarios.push(new Comentario(descripcion));
        document.getElementById('comentario').value = '';
        mostrarComentarios();
    } else {
        alert('Por favor, ingrese un comentario.');     
    }
}



function mostrarComentarios() {
    const resultadoDiv = document.getElementById('resultado');
    resultadoDiv.innerHTML = ''; 

    Comentarios.forEach((Comentario, index) => {
        resultadoDiv.innerHTML += `
            <div id="Comentario-${index}">
                ${index + 1}. ${Comentario.descripcion} <br>
                Escrito por ${Comentario.nombre}
            </div><br>
        `;
    });
}