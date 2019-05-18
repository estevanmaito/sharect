import { defaultStyle, mobileStyle, desktopStyle } from './style'
import Arrow from './Arrow/Arrow'

export default function Tooltip(props) {
  const {
    top,
    left,
    iconSize,
    mobileIconSize,
    buttonMargin,
    backgroundColor,
    icons,
    arrowSize,
    isMobile
  } = props

  const tooltip = document.createElement('div')
  let buttonSize = iconSize + buttonMargin
  tooltip.className = 'sharect'

  tooltip.style.cssText = defaultStyle(backgroundColor)
  if (isMobile) {
    buttonSize = mobileIconSize + buttonMargin
    tooltip.style.cssText += mobileStyle(buttonSize)
  } else {
    tooltip.style.cssText += desktopStyle(top, left)
  }

  tooltip.appendChild(icons.icons)

  if (!isMobile) {
    const arrow = Arrow({
      arrowSize,
      backgroundColor,
      buttonSize,
      icons
    })

    tooltip.appendChild(arrow)
  }

  return tooltip
}
