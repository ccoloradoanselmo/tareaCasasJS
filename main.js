import { Casa } from "./clases/Casa.js";

const casaStark = new Casa(
    "El Norte",
    "Lobo huargo gris sobre fondo blanco",
    "Se acerca el invierno",
    "Eddard, Robb, Sansa, Arya y Bran Stark",
    "Honor, lealtad y tradición"
);

const casaTargaryen = new Casa(
    "Tierras de la Corona",
    "Dragón rojo de tres cabezas sobre fondo negro",
    "Fuego y sangre",
    "Daenerys, Viserys y Aegon Targaryen",
    "Antigua dinastía real vinculada a los dragones"
);

const casaBaratheon = new Casa(
    "Tierras de la Tormenta",
    "Ciervo negro coronado sobre fondo dorado",
    "Nuestra es la furia",
    "Robert, Stannis y Renly Baratheon",
    "Fuerza, orgullo y espíritu guerrero"
);

const casaArryn = new Casa(
    "El Valle de Arryn",
    "Halcón y luna blanca sobre fondo azul",
    "Tan alto como el honor",
    "Jon Arryn y Robin Arryn",
    "Una fortaleza situada en lo alto de las montañas"
);

const casaLannister = new Casa(
    "Occidente",
    "León dorado sobre fondo carmesí",
    "¡Oye mi rugido!",
    "Tywin, Cersei, Jaime y Tyrion Lannister",
    "Riqueza, poder político y ambición"
);

const casaGreyjoy = new Casa(
    "Islas del Hierro",
    "Kraken dorado sobre fondo negro",
    "Nosotros no sembramos",
    "Balon, Theon y Yara Greyjoy",
    "Navegación, independencia y tradición marinera"
);

const casaTully = new Casa(
    "Tierras de los Ríos",
    "Trucha plateada sobre fondo azul y rojo",
    "Familia, deber, honor",
    "Hoster, Edmure y Catelyn Tully",
    "Lealtad familiar y alianzas políticas"
);

const casaTyrell = new Casa(
    "El Dominio",
    "Rosa dorada sobre fondo verde",
    "Crecer fuerte",
    "Mace, Margaery y Olenna Tyrell",
    "Riqueza agrícola, diplomacia e influencia"
);

const casaBolton = new Casa(
    "El Norte",
    "Hombre desollado sobre fondo rojo",
    "Nuestras hojas son afiladas",
    "Roose y Ramsay Bolton",
    "Casa norteña conocida por su crueldad y rivalidad histórica con los Stark"
);

const casaMartell = new Casa(
    "Dorne",
    "Sol rojo atravesado por una lanza sobre fondo naranja",
    "Nunca doblegado, nunca roto",
    "Doran, Oberyn y Trystane Martell",
    "Independencia, orgullo y resistencia"
);

// Referencias a las zonas clicables del mapa
const cajaStark = document.querySelector("#cajaStark");
const cajaTargaryen = document.querySelector("#cajaTargaryen");
const cajaBaratheon = document.querySelector("#cajaBaratheon");
const cajaArryn = document.querySelector("#cajaArryn");
const cajaLannister = document.querySelector("#cajaLannister");
const cajaGreyjoy = document.querySelector("#cajaGreyjoy");
const cajaTully = document.querySelector("#cajaTully");
const cajaTyrell = document.querySelector("#cajaTyrell");
const cajaBolton = document.querySelector("#cajaBolton");
const cajaMartell = document.querySelector("#cajaMartell");

const mapa = document.querySelector("#mapa");
const tarjetaHover = document.querySelector("#tarjetaHover");
const tarjetaClick = document.querySelector("#tarjetaClick");

// Qué imagen de emblema corresponde a cada región
const imagenesCasas = {
    "El Norte": "Stark",
    "Tierras de la Corona": "Targaryen",
    "Tierras de la Tormenta": "Baratheon",
    "El Valle de Arryn": "Arryn",
    "Occidente": "Lannister",
    "Islas del Hierro": "Greyjoy",
    "Tierras de los Ríos": "Tully",
    "El Dominio": "Tyrell",
    "Dorne": "Martell"
};

function mostrarTarjeta(tarjeta, caja, casa) {
    const region = casa.getRegion();
    const nombreImagen = imagenesCasas[region] || "Stark";

    tarjeta.innerHTML = `
        <div class="tarjeta-contenido">
            <div class="casa-header">
                <div class="casa-logo">
                    <img src="img/${nombreImagen}.jpeg" alt="Emblema de ${region}">
                </div>
                <h3 class="casa-region">${region}</h3>
            </div>
            <div class="casa-detalles">
                <p class="casa-emblema"><strong>Emblema:</strong> ${casa.getEmblema()}</p>
                <p class="casa-lema">"${casa.getLema()}"</p>
                <p class="casa-personajes"><strong>Personajes:</strong> ${casa.getPersonajes()}</p>
                <p class="casa-caracteristicas"><strong>Características:</strong> ${casa.getCaracteristicas()}</p>
            </div>
        </div>
    `;
    tarjeta.style.display = "block";

    // Horizontal: a la derecha de la caja, o a la izquierda si no cabe
    let left = caja.offsetLeft + caja.offsetWidth + 10;
    if (left + tarjeta.offsetWidth > mapa.offsetWidth) {
        left = caja.offsetLeft - tarjeta.offsetWidth - 10;
    }
    tarjeta.style.left = left + "px";

    // Vertical: al nivel de la caja, pero sin salirse del mapa
    let top = caja.offsetTop;
    const maxTop = mapa.offsetHeight - tarjeta.offsetHeight;
    if (top > maxTop) top = maxTop;
    if (top < 0) top = 0;
    tarjeta.style.top = top + "px";
}

// Norte: hover para mostrar/ocultar
cajaStark.addEventListener("mouseenter", () => mostrarTarjeta(tarjetaHover, cajaStark, casaStark));
cajaStark.addEventListener("mouseleave", () => tarjetaHover.style.display = "none");

cajaTargaryen.addEventListener("mouseenter", () => mostrarTarjeta(tarjetaHover, cajaTargaryen, casaTargaryen));
cajaTargaryen.addEventListener("mouseleave", () => tarjetaHover.style.display = "none");

cajaBaratheon.addEventListener("mouseenter", () => mostrarTarjeta(tarjetaHover, cajaBaratheon, casaBaratheon));
cajaBaratheon.addEventListener("mouseleave", () => tarjetaHover.style.display = "none");

cajaArryn.addEventListener("mouseenter", () => mostrarTarjeta(tarjetaHover, cajaArryn, casaArryn));
cajaArryn.addEventListener("mouseleave", () => tarjetaHover.style.display = "none");

cajaLannister.addEventListener("mouseenter", () => mostrarTarjeta(tarjetaHover, cajaLannister, casaLannister));
cajaLannister.addEventListener("mouseleave", () => tarjetaHover.style.display = "none");

// Sur: click para mostrar (persiste hasta click fuera)
cajaGreyjoy.addEventListener("click", () => mostrarTarjeta(tarjetaClick, cajaGreyjoy, casaGreyjoy));
cajaTully.addEventListener("click", () => mostrarTarjeta(tarjetaClick, cajaTully, casaTully));
cajaTyrell.addEventListener("click", () => mostrarTarjeta(tarjetaClick, cajaTyrell, casaTyrell));
cajaBolton.addEventListener("click", () => mostrarTarjeta(tarjetaClick, cajaBolton, casaBolton));
cajaMartell.addEventListener("click", () => mostrarTarjeta(tarjetaClick, cajaMartell, casaMartell));

// Cierra la tarjeta de click al pulsar fuera
mapa.addEventListener("click", (e) => {
    if (!e.target.closest(".caja-invisible") && !e.target.closest("#tarjetaClick")) {
        tarjetaClick.style.display = "none";
    }
});