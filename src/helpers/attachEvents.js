import hasTooltipDrawn from './hasTooltipDrawn'
import hasSelection from './hasSelection'
import isSelectableElement from './isSelectableElement'
import moveTooltip from './moveTooltip'
import renderTooltip from './renderTooltip'

function handleMouseUp(props) {
  setTimeout(function mouseTimeout() {
    if (hasTooltipDrawn()) {
      if (hasSelection() && isSelectableElement(props.selectableElements)) {
        moveTooltip({ ...props })
        return
      } else {
        document.body.removeChild(document.querySelector('.sharect'))
      }
    }
    if (hasSelection() && isSelectableElement(props.selectableElements)) {
      renderTooltip({ ...props })
    }
  }, 10)
}

export default function attachEvents(props) {
  window.addEventListener('mouseup', () => handleMouseUp(props), false)
}
