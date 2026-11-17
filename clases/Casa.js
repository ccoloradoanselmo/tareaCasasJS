export class Casa {
    #region;
    #emblema;
    #lema;
    #personajes;
    #caracteristicas;

    constructor(region = "", emblema = "", lema = "", personajes = [], caracteristicas = "") {
        this.#region = region;
        this.#emblema = emblema;
        this.#lema = lema;
        this.#personajes = personajes;
        this.#caracteristicas = caracteristicas;
    }

    // Getters
    getRegion() {
        return this.#region;
    }

    getEmblema() {
        return this.#emblema;
    }

    getLema() {
        return this.#lema;
    }

    getPersonajes() {
        return this.#personajes;
    }

    getCaracteristicas() {
        return this.#caracteristicas;
    }

    // Setters
    setRegion(region) {
        this.#region = region;
    }

    setEmblema(emblema) {
        this.#emblema = emblema;
    }

    setLema(lema) {
        this.#lema = lema;
    }

    setPersonajes(personajes) {
        this.#personajes = personajes;
    }

    setCaracteristicas(caracteristicas) {
        this.#caracteristicas = caracteristicas;
    }
}