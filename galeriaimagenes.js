class Imagen{
    constructor(url) {
        this.direccion = url;
    }

    mostrar() {
        return `
            <div class="card">
                <img src="${this.direccion}" alt="img">
            </div>
        `;
    }

}

//funcion para renderizar
const renderImagenes = (imagenes) => {
    const contenedor = document.getElementById("galeria");
    contenedor.innerHTML = imagenes.map(i => i.mostrar()).join("");
}

const obtenerImagenes = async () => {
    const res = await fetch('https://picsum.photos/v2/list?page=2&limit=6');
    const datos = await res.json();

    listImagenes = [];
    datos.map((img) =>
    {
        listImagenes.push(new Imagen(img.download_url));
    });

    renderImagenes(listImagenes);

document.getElementById("galeria").innerText
        = lista.map(i => i.mostrar()).join("");

}

let button = document.getElementById("btnAction");
button.addEventListener("click", obtenerImagenes);