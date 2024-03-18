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
export abstract class MathFunction {
  
  abstract evaluate(parameter: number): number | null ;
  
  /**
   * @desc Method that draws the specific function in the canvas
   * @param canvas - The canvas where the figure is going to be drawn
   * @returns void
   */
  public draw(canvas: HTMLCanvasElement, scale: number, color: string): void {
    const context: CanvasRenderingContext2D | null = canvas.getContext('2d');
    if (!context) {
      console.error('Canvas 2D context is not supported.');
      return;
    }
    context.strokeStyle = color;
    context.lineWidth = 2;
   
    const CENTRE_X = canvas.width / 2;
    const CENTRE_Y = canvas.height / 2;
    context.beginPath();
    for (let canvasX = 0; canvasX < canvas.width; canvasX++) {
      const parameterX = (canvasX - CENTRE_X ) / scale; // Modifies the value of the parameter to be in a 2D plane
      let canvasY: number | null = (this.evaluate(parameterX));
      if (canvasY === null) continue;
      
      canvasY = canvasY * scale + CENTRE_Y;
      canvasY = this.invertYCoordinte(canvasY, canvas.height);
      context.lineTo(canvasX, canvasY);
    }
    context.stroke();
  }

  /**
   * @desc Due to the canvas coordinate system, the Y coordinate needs to be inverted in order to draw the function correctly
   * @param coordinateY - The Y coordinate to be inverted
   * @param canvasHeight - The height of the canvas
   * @returns The inverted Y coordinate, posotive if the original was negative and viceversa
   */
  private invertYCoordinte(coordinateY: number, canvasHeight: number): number {
    if (coordinateY < canvasHeight / 2) {
      return canvasHeight / 2 + (canvasHeight / 2 - coordinateY);
    }
    return canvasHeight / 2 - (coordinateY - canvasHeight / 2);
  }
}

