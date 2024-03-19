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
    const TICK_SIZE = 5;  
    for (let posX = 0; posX < canvasWidth; posX += this.scale) {
      context.moveTo(posX, canvasHeight / 2 - TICK_SIZE);
      context.lineTo(posX, canvasHeight / 2 + TICK_SIZE);
      context.fillText(((posX - canvasWidth / 2) / this.scale).toString(), posX, canvasHeight / 2 + 15);
    }
    for (let posY = 0; posY < canvasHeight; posY += this.scale) {
      context.moveTo(canvasWidth / 2 - TICK_SIZE, posY);
      context.lineTo(canvasWidth / 2 + TICK_SIZE, posY);
      context.fillText((-(posY - canvasHeight / 2) / this.scale).toString(), canvasWidth / 2 - 15, posY);
    }
    context.stroke();
  }
}