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

import { MathFunction } from './math-function';

/**
 * @class SinFunction
 * @desc Class that represents the sin function
 */
export class SinFunction implements MathFunction {

  /**
   * @desc Method that evaluates the sin function
   * @param parameter - The parameter to evaluate the function
   * @returns The result of the evaluation
   */
  public evaluate(parameter: number): number {
    return Math.sin(parameter);
  }

  /**
   * @desc Method that draws the sin function in the canvas
   * @param canvas - The canvas where the figure is going to be drawn
   * @returns void
   */
  public draw(canvas: HTMLCanvasElement, canvasWidth: number, canvasHeight: number, scale: number): void {
    const context: CanvasRenderingContext2D | null = canvas.getContext('2d');
    if (!context) {
      console.error('Canvas 2D context is not supported.');
      return;
    }
    context.strokeStyle = 'black';
    context.lineWidth = 2;
   
    const CENTRE_X = canvasWidth / 2;
    const CENTRE_Y = canvasHeight / 2;
    context.beginPath();
    for (let canvasX = 0; canvasX < canvas.width; canvasX++) {
      const parameter = (canvasX - CENTRE_X) 
      const canvasY = (Math.sin(parameter / scale) * scale) + CENTRE_Y;
      context.lineTo(canvasX, canvasY);
    }
    context.stroke();
  }
}