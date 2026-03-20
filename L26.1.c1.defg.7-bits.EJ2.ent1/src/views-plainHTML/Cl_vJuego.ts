export default class Cl_vEquipo {
  inresultado: HTMLInputElement;
  btCancelar: HTMLButtonElement;
  btAceptar: HTMLButtonElement;
  vista: HTMLElement;
  constructor() {
    this.vista = document.getElementById("articulo") as HTMLElement;
    this.inresultado = document.getElementById(
      "articulo_inresultado",
    ) as HTMLInputElement;
    this.btCancelar = document.getElementById(
      "articulo_btCancelar",
    ) as HTMLButtonElement;
    this.btAceptar = document.getElementById(
      "articulo_btAceptar",
    ) as HTMLButtonElement;
    this.mostrar();
  }
  get resultado(): number {
    return +this.inresultado.value;
  }
  set resultado(resultado: number) {
    this.inresultado.value = resultado.toString();
  }
  mostrar(): void {
    if (this.vista === null) return;
    this.vista.hidden = false;
  }
  ocultar(): void {
    if (this.vista === null) return;
    this.vista.hidden = true;
  }
}
