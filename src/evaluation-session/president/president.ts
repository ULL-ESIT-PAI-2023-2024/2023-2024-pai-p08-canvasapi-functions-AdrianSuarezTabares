/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas 2023-2024
 *
 * @author Adrián Suárez Tabares
 * @since Mar 10 2024
 * @desc President class
 *
 */

/**
 * @class President
 * @desc Class that represents the president of the country
 * @singleton
 */
export class President {
  private static instance: President;
  private name: string;

  /**
   * @desc Method that returns the instance of the class
   * @returns The instance of the class
   */
  private constructor(name: string) {
    this.name = name;
  }

  /**
   * @desc Method that returns the instance of the class
   * @returns The instance of the class
   */
  public static getPresident(name: string = 'Biden'): President {
    if (!President.instance) {
      President.instance = new President(name);
    }
    return President.instance;
  }

  /**
   * @desc Method that returns the name of the president
   * @returns The name of the president
   */
  public getName(): string {
    return this.name;
  }
}