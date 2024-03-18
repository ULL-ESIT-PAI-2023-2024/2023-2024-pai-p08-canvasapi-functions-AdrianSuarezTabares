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
 * @class CosFunction
 * @desc Class that represents the cos function
 */
export class CosFunction extends MathFunction {

  /**
   * @desc Method that evaluates the cosine function
   * @param parameter - The parameter to evaluate the function
   * @returns The result of the evaluation
   */
  public evaluate(parameter: number): number | null {
    return Math.cos(parameter);
  }
}