/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas 2023-2024
 *
 * @author Adrián Suárez Tabares
 * @since Mar 10 2024
 * @desc  Implemetations for the sin function
 *
 */

import { MathFunction } from './math-function';

/**
 * @class QuadradicFunction
 * @desc Class that represents a quadratic function
 * @extends MathFunction
 */
export class QuadraticFunction extends MathFunction {

  constructor(private cuadraticCoeficient: number, private linearCoeficient: number, private independentTerm: number) {
    super();
  }
  
  /**
   * @desc Method that evaluates the quadratic function
   * @param parameter - The parameter to evaluate the function
   * @returns The result of the evaluation
   */
  public evaluate(parameter: number): number | null {
    return this.cuadraticCoeficient * (parameter * parameter) + this.linearCoeficient * parameter + this.independentTerm;
  }
}