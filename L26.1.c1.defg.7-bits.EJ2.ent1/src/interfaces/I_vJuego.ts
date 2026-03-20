export interface I_vJuego {
  get resultado(): number;
  mostrar(): void;
  ocultar(): void;
  onAgregar(callback: () => void): void;
  onAceptar(callback: () => void): void;
  onCancelar(callback: () => void): void;
}