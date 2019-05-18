import getClosestElement from './getClosestElement'

export default function isSelectableElement(selectableElements) {
  const baseNode = window.getSelection().baseNode || window.getSelection().anchorNode
  let currentSelectedElement = baseNode.parentNode
  return selectableElements.some(ancestor =>
    getClosestElement(currentSelectedElement, ancestor)
  )
}
