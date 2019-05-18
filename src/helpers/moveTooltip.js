import getTooltipPosition from './getTooltipPosition'

export default function moveTooltip(props) {
  if (props.isMobile) return null

  const { top, left } = getTooltipPosition(props)
  let tooltip = document.querySelector('.sharect')
  tooltip.style.top = `${top}px`
  tooltip.style.left = `${left}px`
}
