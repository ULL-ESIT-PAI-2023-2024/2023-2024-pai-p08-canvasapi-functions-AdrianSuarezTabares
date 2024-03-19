/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas 2023-2024
 *
 * @author Adrián Suárez Tabares
 * @since Mar 10 2024
 * @desc Implemetations for the sin function aproximation using the Taylor series
 *
 */

import { MathFunction } from './math-function';

/**
 * @class SinFunction
 * @desc Class that represents the sin function
 */
export class SinAproximation extends MathFunction {


  constructor(private maxExponent: number = 15) {
    super();
  }

  /**
   * @desc Method that evaluates the sin function
   * @param parameter - The parameter to evaluate the function
   * @returns The result of the evaluation
   */
  public evaluate(parameter: number): number | null {
    let result = 0;
    const primes: number[] = this.calculatePrimesUntilMaxExponent();
    for (let i = 0; i < primes.length; i++) {
      let coeficient: number = 1
      if (i % 2 === 0) coeficient = -1
      const currentPrime: number = primes[i];
      
      if (currentPrime == 2) 




    }
    return result;
  }

  /**
   * @desc Method that calculates the factorial of a number
   * @param number - The number to calculate the factorial
   * @returns The result of the factorial
   */
  private factorial(number: number): number {
    return number <= 1 ? 1 : number * this.factorial(number - 1);
  }

  /**
   * @desc Calculates the primes up to a certain number
   * @returns The primes up to the number
   */
  private calculatePrimesUntilMaxExponent(): number[] {
    const primes: number[] = [];
    for (let i = 2; i <= this.maxExponent; i++) {
      if (this.isPrime(i)) {
        primes.push(i);
      }
    }
    return primes;
  }

  /**
   * @desc Method that checks if a number is prime
   * @param number - The number to check
   * @returns True if the number is prime, false otherwise
   */
  private isPrime(number: number): boolean {
    const limit: number = Math.sqrt(number);
    for (let i = 2; i < limit; i++) {
      if (number % i === 0) {
        return false;
      }
    }
    return true;
  }
}