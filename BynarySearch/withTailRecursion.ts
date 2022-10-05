/* Typical comparison function */
let defaultCompare = (a: number, b: number) => (a > b ? 1 : a < b ? -1 : 0)

/* Version 2:
    O(n)
    Con recursion
    Se deben crear Const variables, no se deben mutar
*/

let binarySearchWithTailRecursion = (
  array: number[],
  element: number,
  compare = defaultCompare,
  left = 0,
  right = array.length - 1
): number => {
  // Recursion base case
  if (array.length === 0 || left > right) {
    return -1
  }

  const middle = Math.floor((left + right) / 2)
  const comparison = compare(element, array[middle])

  // Encuentre el valor buscado
  if (comparison === 0) return middle

  // Acota left y right
  const newBounds = comparison === -1 ? [left, middle - 1] : [middle + 1, right]

  // Llamada a la recursion
  // Con el spread operator se limpia el paso de argumentos
  return binarySearchWithTailRecursion(array, element, compare, ...newBounds)
}

export default binarySearchWithTailRecursion
