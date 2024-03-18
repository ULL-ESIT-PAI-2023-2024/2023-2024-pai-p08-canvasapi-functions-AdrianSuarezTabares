/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas 2023-2024
 *
 * @author Adrián Suárez Tabares
 * @since Mar 10 2024
 * @desc Script for the main file of the project
 *
 */

import { View } from './view';
import { MathFunction } from './math-function';
import { SinFunction } from './sin-function';
import { CosFunction } from './cos-function';
import { SquareRootFunction } from './square-root-function';
import { QuadraticFunction } from './quadratic-function';

/**
 * @desc Main function of the project
 * @returns void
 */
function main() {
  const scale = 50;
  const canvasHeight: number = 800;
  const canvasWidth: number = 800;
  const view: View = new View('FunctionCanvas', canvasWidth, canvasHeight, scale);
  view.displayAxis();
  
  const sinFunction: MathFunction = new SinFunction();
  view.displayFunction(sinFunction, 'blue');
  const cosFunction: MathFunction = new CosFunction();
  view.displayFunction(cosFunction);
  const sqrtFunction: MathFunction = new SquareRootFunction();
  view.displayFunction(sqrtFunction);
  const quadraticFunction: MathFunction = new QuadraticFunction(1, 0, -1);
  view.displayFunction(quadraticFunction, 'red');

  
}

main();