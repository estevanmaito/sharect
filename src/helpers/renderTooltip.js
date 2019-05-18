import Tooltip from '../Tooltip/Tooltip'
import getTooltipPosition from './getTooltipPosition'

export default function renderTooltip(props) {
  const { top, left } = getTooltipPosition(props)

  const tooltipSettings = {
    ...props,
    top,
    left
  }

  document.body.appendChild(Tooltip(tooltipSettings))
}
