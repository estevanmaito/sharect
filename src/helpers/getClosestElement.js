export default function getClosestElement(element, ancestor) {
  if (Element.prototype.closest) {
    return element.closest(ancestor)
  } else {
    // IE 9+ closest polyfill + matches polyfill
    if (!Element.prototype.matches) {
      Element.prototype.matches = 
        Element.prototype.matchesSelector || 
        Element.prototype.mozMatchesSelector ||
        Element.prototype.msMatchesSelector || 
        Element.prototype.oMatchesSelector || 
        Element.prototype.webkitMatchesSelector
    }
    let el = element
    do {
      if (el.matches(ancestor)) return el
      el = el.parentNode
    } while (el !== null && el.nodeType === Node.ELEMENT_NODE)
    return null
  }
}
