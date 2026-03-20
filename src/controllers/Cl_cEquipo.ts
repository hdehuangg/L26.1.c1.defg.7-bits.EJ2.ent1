import Cl_mEquipo from "../models/Cl_mEquipo.js";
import Cl_vEquipo from "../views/Cl_vEquipoPlain.js";
import Cl_cJuego from "./Cl_cJuego.js";

export default class Cl_cEquipo {
    private mEquipo: Cl_mEquipo;
    private vEquipo: Cl_vEquipo;

    constructor() {
        this.mEquipo = new Cl_mEquipo();
        this.vEquipo = new Cl_vEquipo();
    }

    agregarJuego(): void {
        this.vEquipo.ocultar();
        new Cl_cJuego(this);
    }

    procesarJuego(mJuego: any): void {
        if (mJuego) this.mEquipo.procesarJuego(mJuego);
        this.vEquipo.reportar(this.mEquipo.porcentajeGanados(), this.mEquipo.obtenerTotalJuegos());
        this.vEquipo.mostrar();
    }
}