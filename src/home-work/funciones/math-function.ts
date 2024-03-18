/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas 2023-2024
 *
 * @author Adrián Suárez Tabares
 * @since Mar 10 2024
 * @desc Interface for the function class family
 *
 */

/**
 * @interface MathFunction
 * @desc Interface that represents a math function
 */
export interface MathFunction {
  evaluate(parameter: number): number;
  draw(canvas: HTMLCanvasElement, canvasWidth: number, canvasHeight: number, scale: number): void;
}

/**
 * @class CosFunction
 * @desc Class that represents the cos function
 */
export class CosFunction implements MathFunction {

  /**
   * @desc Method that evaluates the cos function
   * @param parameter - The parameter to evaluate the function
   * @returns The result of the evaluation
   */
  public evaluate(parameter: number): number {
    return Math.cos(parameter);
  }

  /**
   * @desc Method that draws the cos function in the canvas
   * @param canvas - The canvas where the figure is going to be drawn
   * @returns void
   */
  public draw(canvas: HTMLCanvasElement, canvasWidth: number, canvasHeight: number): void {
    const context: CanvasRenderingContext2D | null = canvas.getContext('2d');
    if (!context) {
      console.error('Canvas 2D context is not supported.');
      return;
    }
    context.strokeStyle = 'black';
    context.lineWidth = 20;

    context.beginPath();
    for (let x = 0; x < canvas.width; x++) {
      const y = Math.cos(x);
      context.lineTo(x, y);
    }
    context.stroke();
  }
}

/**
 * @class TanFunction
 * @desc Class that represents the tan function
 */
export class SqrtFunction implements MathFunction {

  /**
   * @desc Method that evaluates the tan function
   * @param parameter - The parameter to evaluate the function
   * @returns The result of the evaluation
   */
  public evaluate(parameter: number): number {
    return Math.sqrt(parameter);
  }

  /**
   * @desc Method that draws the tan function in the canvas
   * @param canvas - The canvas where the figure is going to be drawn
   * @returns void
   */
  public draw(canvas: HTMLCanvasElement, canvasWidth: number, canvasHeight: number): void {
    const context: CanvasRenderingContext2D | null = canvas.getContext('2d');
    if (!context) {
      console.error('Canvas 2D context is not supported.');
      return;
    }
    context.strokeStyle = 'black';
    context.lineWidth = 20;

    context.beginPath();
    for (let x = 0; x < canvas.width; x++) {
      const y = Math.sqrt(x);
      context.lineTo(x, y);
    }
    context.stroke();
  }
}