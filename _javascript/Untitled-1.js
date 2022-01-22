const idadeComprador = 18;
const estaAcompanhada = false;
let temPassagemComprada = false;
const destino = "Curitiba"

const podeComprar = idadeComprador >= 18 || estaAcompanhada == true;

let contador = 0
while (contador < 3) {
    if (listaDeDestinos[contador] == destino) {
        console.log("Destino existe")
    } else {
        console.log("Destino não existe");
    }
    contador += 1;
}