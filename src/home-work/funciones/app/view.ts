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
import { Axis } from './axis';

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
  constructor(canvasName: string, canvasWidth: number, canvasHeight: number, private canvasScale: number = 50) {
    this.canvas = document.getElementById(canvasName) as HTMLCanvasElement;
    const context: CanvasRenderingContext2D | null = this.canvas.getContext('2d');
    this.canvas.style.backgroundColor = 'white';
    if (!context) {
      console.error('Canvas 2D context is not supported.');
      return;
    }
    this.canvas.width = canvasWidth
    this.canvas.height = canvasHeight
    
    context.strokeStyle = 'black';
    context.lineWidth = 20;
  
    context.strokeRect(0, 0, this.canvas.width, this.canvas.height);
  }
  
  /**
   * @desc Method that draws the figures in the canvas
   * @returns void
   */
  public displayFunction(mathFunction: MathFunction, color: string = 'black'): void {
    mathFunction.draw(this.canvas, this.canvasScale, color);
  }

  /**
   * @desc Method that draws the axis in the canvas
   * @returns void
   */
  public displayAxis(): void {
    const axis = new Axis(this.canvasScale);
    axis.drawAxis(this.canvas, this.canvas.width, this.canvas.height);
  }

}