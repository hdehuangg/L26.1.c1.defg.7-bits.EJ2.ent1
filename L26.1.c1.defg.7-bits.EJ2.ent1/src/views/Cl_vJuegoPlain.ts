import { I_vJuego } from "../interfaces/I_vJuego.js";
export default class Cl_vJuego {
    private vista: HTMLElement | null;
    private inResultado: HTMLInputElement | null;
    private btAceptar: HTMLElement | null;
    private btCancelar: HTMLElement | null;

    constructor() {
        this.vista = document.getElementById("secView");
        this.inResultado = document.getElementById("inResultado") as HTMLInputElement;
        this.btAceptar = document.getElementById("btnAceptar");
        this.btCancelar = document.getElementById("btnCancelar");
    }

    get resultado(): number {
        return Number(this.inResultado?.value);
    }

    mostrar(): void {
        if (this.vista) this.vista.style.display = "block";
    }

    ocultar(): void {
        if (this.vista) this.vista.style.display = "none";
    }

    set controlador(c: any) {
        if (this.btAceptar) this.btAceptar.onclick = () => c.aceptar();
        if (this.btCancelar) this.btCancelar.onclick = () => c.cancelar();
    }
}