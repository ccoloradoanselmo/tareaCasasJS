import { Casa } from "/clases/Casa.js";

// Orden del constructor: region, emblema, lema, personajes, caracteristicas

// 1. Stark - Invernalia (Winterfell)
const casaStark = new Casa(
    "El Norte",
    "Lobo huargo gris sobre fondo blanco",
    "Se acerca el invierno",
    "Eddard, Robb, Sansa, Arya y Bran Stark",
    "Honor, lealtad y tradición"
);

// 2. Targaryen - Rocadragón (Dragonstone)
const casaTargaryen = new Casa(
    "Tierras de la Corona",
    "Dragón rojo de tres cabezas sobre fondo negro",
    "Fuego y sangre",
    "Daenerys, Viserys y Aegon Targaryen",
    "Antigua dinastía real vinculada a los dragones"
);

// 3. Baratheon - Bastión de Tormentas (Storm's End)
const casaBaratheon = new Casa(
    "Tierras de la Tormenta",
    "Ciervo negro coronado sobre fondo dorado",
    "Nuestra es la furia",
    "Robert, Stannis y Renly Baratheon",
    "Fuerza, orgullo y espíritu guerrero"
);

// 4. Arryn - Nido de Águilas (The Eyrie)
const casaArryn = new Casa(
    "El Valle de Arryn",
    "Halcón y luna blanca sobre fondo azul",
    "Tan alto como el honor",
    "Jon Arryn y Robin Arryn",
    "Una fortaleza situada en lo alto de las montañas"
);

// 5. Lannister - Roca Casterly (Casterly Rock)
const casaLannister = new Casa(
    "Occidente",
    "León dorado sobre fondo carmesí",
    "¡Oye mi rugido!",
    "Tywin, Cersei, Jaime y Tyrion Lannister",
    "Riqueza, poder político y ambición"
);

// 6. Greyjoy - Pyke
const casaGreyjoy = new Casa(
    "Islas del Hierro",
    "Kraken dorado sobre fondo negro",
    "Nosotros no sembramos",
    "Balon, Theon y Yara Greyjoy",
    "Navegación, independencia y tradición marinera"
);

// 7. Tully - Aguasdulces (Riverrun)
const casaTully = new Casa(
    "Tierras de los Ríos",
    "Trucha plateada sobre fondo azul y rojo",
    "Familia, deber, honor",
    "Hoster, Edmure y Catelyn Tully",
    "Lealtad familiar y alianzas políticas"
);

// 8. Tyrell - Altojardín (Highgarden)
const casaTyrell = new Casa(
    "El Dominio",
    "Rosa dorada sobre fondo verde",
    "Crecer fuerte",
    "Mace, Margaery y Olenna Tyrell",
    "Riqueza agrícola, diplomacia e influencia"
);

// 9. Bolton - Fuerte Terror (The Dreadfort)
const casaBolton = new Casa(
    "El Norte",
    "Hombre desollado sobre fondo rojo",
    "Nuestras hojas son afiladas",
    "Roose y Ramsay Bolton",
    "Casa norteña conocida por su crueldad y rivalidad histórica con los Stark"
);

// 10. Martell - Lanza del Sol (Sunspear)
const casaMartell = new Casa(
    "Dorne",
    "Sol rojo atravesado por una lanza sobre fondo naranja",
    "Nunca doblegado, nunca roto",
    "Doran, Oberyn y Trystane Martell",
    "Independencia, orgullo y resistencia"
);

// ===== Cajas =====
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

// ===== Tarjetas =====
const mapa = document.querySelector("#mapa");
const tarjetaHover = document.querySelector("#tarjetaHover");
const tarjetaClick = document.querySelector("#tarjetaClick");

// Mapeo de casas a sus archivos de imagen
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
    tarjeta.style.display = "block"; // primero se muestra para poder medir su ancho y alto

    // A la derecha de la caja; si se sale del mapa, a la izquierda
    let left = caja.offsetLeft + caja.offsetWidth + 10;
    if (left + tarjeta.offsetWidth > mapa.offsetWidth) {
        left = caja.offsetLeft - tarjeta.offsetWidth - 10;
    }
    tarjeta.style.left = left + "px";

    // Posición vertical: empieza en la caja, pero clampa para no salirse del main
    let top = caja.offsetTop;
    const maxTop = mapa.offsetHeight - tarjeta.offsetHeight;
    if (top > maxTop) top = maxTop;
    if (top < 0) top = 0;
    tarjeta.style.top = top + "px";
}

// ===== Eventos: el norte con HOVER =====
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

// ===== Eventos: el sur con CLICK =====
cajaGreyjoy.addEventListener("click", () => mostrarTarjeta(tarjetaClick, cajaGreyjoy, casaGreyjoy));
cajaTully.addEventListener("click", () => mostrarTarjeta(tarjetaClick, cajaTully, casaTully));
cajaTyrell.addEventListener("click", () => mostrarTarjeta(tarjetaClick, cajaTyrell, casaTyrell));
cajaBolton.addEventListener("click", () => mostrarTarjeta(tarjetaClick, cajaBolton, casaBolton));
cajaMartell.addEventListener("click", () => mostrarTarjeta(tarjetaClick, cajaMartell, casaMartell));

// Cierra la tarjeta de clic al pulsar fuera de una caja o de la propia tarjeta
mapa.addEventListener("click", (e) => {
    if (!e.target.closest(".caja-invisible") && !e.target.closest("#tarjetaClick")) {
        tarjetaClick.style.display = "none";
    }
});