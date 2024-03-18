/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas 2023-2024
 *
 * @author Adrián Suárez Tabares
 * @since Mar 10 2024
 * @desc Implemetations for the cosine function
 *
 */

import { MathFunction } from './math-function';

/**
 * @class TanFunction
 * @desc Class that represents the tan function
 */
export class SquareRootFunction extends MathFunction {

  /**
   * @desc Method that evaluates the tan function
   * @param parameter - The parameter to evaluate the function
   * @returns The result of the evaluation
   */
  public evaluate(parameter: number): number | null {
    if (parameter < 0) return null;
    return Math.sqrt(parameter);
  }
}