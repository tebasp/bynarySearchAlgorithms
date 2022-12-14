/* Typical comparison function */
let defaultCompare = (a: number, b: number) => (a > b ? 1 : a < b ? -1 : 0)

/* Version 1:
    O(n)
    Fixed memory => Osea sin crear variables
    Loops
*/

let binarySearchWithLoops = (
  array: number[],
  element: number,
  compare = defaultCompare
) => {
  let left = 0
  let right = array.length - 1

  while (left <= right) {
    // Como es un let se pierde despues que acaba la funcion
    // Funciona como Fixed Memory
    let middle = Math.floor((left + right) / 2)

    switch (compare(element, array[middle])) {
      case -1: {
        right = middle - 1
        break
      }
      case 1: {
        left = middle + 1
        break
      }

      default:
        return middle
    }
  }

  return -1
}

export default binarySearchWithLoops
