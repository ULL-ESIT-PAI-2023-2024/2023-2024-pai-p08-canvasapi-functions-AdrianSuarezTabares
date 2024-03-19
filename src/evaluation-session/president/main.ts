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

import {President} from './president.js';

const main = function (): void {
  const president: President = President.getPresident();
  console.log(president.getName());
  const anotherPresident: President = President.getPresident();
  console.log(anotherPresident.getName());
  // You can't do this:
  // const oneMorePresident = new President('Trump');
}

main();

