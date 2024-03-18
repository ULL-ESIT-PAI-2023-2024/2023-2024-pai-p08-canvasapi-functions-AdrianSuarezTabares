/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas 2023-2024
 *
 * @author Adrián Suárez Tabares
 * @since Mar 10 2024
 * @desc Implemetations for the sin function
 *
 */

/**
 * @class Axis
 * @desc Class that represents the axis
 */
export class Axis {

  /**
   * @desc Constructor of the class
   * @param scale - The scale of the axis
   */
  constructor(private scale: number) {
    this.scale = scale;
  }

  /**
   * @desc Method that draws the axis
   * @param context - The context of the canvas
   * @param canvasWidth - The width of the canvas
   * @param canvasHeight - The height of the canvas
   * @returns void
   */
  public drawAxis(canvas: HTMLCanvasElement, canvasWidth: number, canvasHeight: number): void {
    const context: CanvasRenderingContext2D | null = canvas.getContext('2d');
    if (!context) {
      console.error('Canvas 2D context is not supported.');
      return;
    } 
    //Draw the axis
    context.strokeStyle = 'black';
    context.lineWidth = 1;
    context.beginPath();
    context.moveTo(canvasWidth / 2, 0);
    context.lineTo(canvasWidth / 2, canvasHeight);
    context.moveTo(0, canvasHeight / 2);
    context.lineTo(canvasWidth, canvasHeight / 2);
        
    //Draw the ticks
    for (let x = 0; x < canvasWidth; x += this.scale) {
      context.moveTo(x, canvasHeight / 2 - 5);
      context.lineTo(x, canvasHeight / 2 + 5);
    }
    for (let y = 0; y < canvasHeight; y += this.scale) {
      context.moveTo(canvasWidth / 2 - 5, y);
      context.lineTo(canvasWidth / 2 + 5, y);
    }
    context.stroke();
  }
}