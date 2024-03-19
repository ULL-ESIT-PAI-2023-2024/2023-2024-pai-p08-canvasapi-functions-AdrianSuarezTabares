/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas 2023-2024
 *
 * @author Adrián Suárez Tabares
 * @since Mar 10 2024
 * @desc Implemetations for the grid class
 *
 */

/**
 * @class Axis
 * @desc Class that represents the axis
 */
export class Grid {

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
    public drawGrid(canvas: HTMLCanvasElement, canvasWidth: number, canvasHeight: number): void {
      const context: CanvasRenderingContext2D | null = canvas.getContext('2d');
      if (!context) {
        console.error('Canvas 2D context is not supported.');
        return;
      } 
      context.strokeStyle = 'gray';
      context.lineWidth = 1;
      
      context.setLineDash([7]);
      for (let posX = 0; posX < canvasWidth; posX += (this.scale)) {
        for (let posY = 0; posY < canvasHeight; posY += (this.scale)) {
          context.strokeRect(posX, posY, this.scale, this.scale);
        }
      }
      context.setLineDash([]);
    }
  }