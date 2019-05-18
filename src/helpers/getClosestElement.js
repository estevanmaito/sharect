export default function getClosestElement(element, ancestor) {
  if (Element.prototype.closest) {
    return element.closest(ancestor)
  } else {
    // IE 9+ polyfill
    let el = element
    do {
      if (el.matches(ancestor)) return el
      el = el.parentNode
    } while (el !== null && el.nodeType === Node.ELEMENT_NODE)
    return null
  }
}
