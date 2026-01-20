// alert("Hola mundo hermoso y maravilloso");

function mostrar() {
    let numero1 = parseInt(document.getElementById("numero1").value);
    let numero2 = parseInt(document.getElementById("numero2").value);

    let resultado = 0;
    resultado = numero1 + numero2;

    let objetoResultado = document.getElementById("resultado");
    objetoResultado.innerHTML = resultado;

   // alert(resultado);    
}