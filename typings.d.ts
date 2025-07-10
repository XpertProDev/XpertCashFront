// typings.d.ts
declare module 'jspdf' {
  interface jsPDF {
    translate(x: number, y: number): void;
    rotate(angle: number, unit?: "degrees" | "radians"): void;
    saveGraphicsState(): void;
    restoreGraphicsState(): void;
  }
}