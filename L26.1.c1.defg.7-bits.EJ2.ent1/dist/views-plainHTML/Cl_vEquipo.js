export default class Cl_vEquipo {
  lblPorcentaje: HTMLInputElement;
  lblTotaljugados: HTMLInputElement;
  btNuevoGol: HTMLButtonElement;
  vista: HTMLElement | null;
  constructor() {
    this.vista = document.getElementById("body");
    this.btNuevoGol = document.getElementById(
      "body_btNuevoGol",
    ) as HTMLButtonElement;
    this.lblPorcentaje = document.getElementById(
      "body_lblPorcentaje",
    ) as HTMLInputElement;
    this.lblTotaljugados = document.getElementById(
      "body_lblTotaljugados",
    ) as HTMLInputElement;
  }
  reportar({ porcentaje, totaljugados }: { porcentaje: number, totaljugados: number }): void {
    this.lblPorcentaje.innerHTML = `${porcentaje}`;
    this.lblTotaljugados.innerHTML = `${totaljugados}`;
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
