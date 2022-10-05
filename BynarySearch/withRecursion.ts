/* Typical comparison function */
let defaultCompare = (a: number, b: number) => (a > b ? 1 : a < b ? -1 : 0)

/* Version 2:
    O(n)
    Con recursion
    Se deben crear Const variables, no se deben mutar
*/

let binarySearchWithRecursion = (
  array: number[],
  element: number,
  left = 0,
  right = array.length - 1,
  compare = defaultCompare
): number => {
  // Recursion base case
  if (array.length === 0 || left > right) {
    return -1
  }

  const middle = Math.floor((left + right) / 2)

  switch (compare(element, array[middle])) {
    case -1: {
      // Always return because of the recursion
      return binarySearchWithRecursion(array, element, 0, middle - 1)
    }
    case 1: {
      return binarySearchWithRecursion(array, element, middle + 1)
    }
    default:
      return middle
  }
}

export default binarySearchWithRecursion
