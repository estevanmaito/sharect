import { defaultStyle, desktopStyle } from './style'
import Arrow from './Arrow/Arrow'

export default function Tooltip(props) {
  const {
    top,
    left,
    iconSize,
    buttonMargin,
    backgroundColor,
    icons,
    arrowSize
  } = props

  const tooltip = document.createElement('div')
  let buttonSize = iconSize + buttonMargin
  tooltip.className = 'sharect'

  tooltip.style.cssText = defaultStyle(backgroundColor)
  tooltip.style.cssText += desktopStyle(top, left)

  tooltip.appendChild(icons.icons)

  const arrow = Arrow({
    arrowSize,
    backgroundColor,
    buttonSize,
    icons
  })

  tooltip.appendChild(arrow)

  return tooltip
}
