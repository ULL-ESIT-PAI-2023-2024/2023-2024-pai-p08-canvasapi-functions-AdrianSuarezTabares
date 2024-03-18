/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas 2023-2024
 *
 * @author Adrián Suárez Tabares
 * @since Mar 10 2024
 * @desc Class view thats uses canvas to render figures
 *
 */

import { MathFunction } from './math-function';

/**
 * @class View
 * @desc Class that represents the view of the application
 */
export class View {

  private canvas: HTMLCanvasElement;

  /**
   * @constructor
   * @param canvas - The canvas where the figures are going to be drawn
   */
  constructor(canvasName: string, private canvasWidth: number, private canvasHeight: number, private scale: number = 50) {
    this.canvas = document.getElementById(canvasName) as HTMLCanvasElement;
    const context: CanvasRenderingContext2D | null = this.canvas.getContext('2d');
    this.canvas.style.backgroundColor = 'white';
    if (!context) {
      console.error('Canvas 2D context is not supported.');
      return;
    }
    this.canvas.width = this.canvasWidth
    this.canvas.height = this.canvasHeight
    
    context.strokeStyle = 'black';
    context.lineWidth = 20;
  
    context.strokeRect(0, 0, this.canvas.width, this.canvas.height);
    
  }
  
  /**
   * @desc Method that draws the figures in the canvas
   * @returns void
   */
  public displayFunction(mathFunction: MathFunction): void {
    mathFunction.draw(this.canvas, this.canvasWidth, this.canvasHeight, this.scale);
  }

}