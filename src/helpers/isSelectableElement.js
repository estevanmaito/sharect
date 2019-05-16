import getClosestElement from "./getClosestElement";

export default function isSelectableElement(selectableElements) {
  let currentSelectedElement = window.getSelection().baseNode.parentNode
  return selectableElements.some(ancestor =>
    getClosestElement(currentSelectedElement, ancestor)
  )
}
