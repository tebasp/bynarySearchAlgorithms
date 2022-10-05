/* Typical comparison function */
let defaultCompare = (a: number, b: number) => (a > b ? 1 : a < b ? -1 : 0)

/* Version 2:
    O(n)
    Con recursion
    Se deben crear Const variables, no se deben mutar
*/

let binarySearchWithArrayView = (
  array: number[],
  element: number,
  compare = defaultCompare
): number => {
  if (array.length === 0) return -1

  const middle = Math.floor(array.length / 2)

  const comparison = compare(element, array[middle])
  if (comparison === 0) return middle

  const [left, right] =
    comparison === -1 ? [0, middle - 1] : [middle + 1, array.length]

  const subIndex = binarySearchWithArrayView(
    array.slice(left, right),
    element,
    compare
  )

  return subIndex === -1 ? -1 : left + subIndex
}

export default binarySearchWithArrayView
