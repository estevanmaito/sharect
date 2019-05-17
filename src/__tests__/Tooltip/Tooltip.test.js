import Tooltip from '../../Tooltip/Tooltip'

const icon = document.createElement('div')
icon.innerHTML = 'icon'

const icons = {
  icons: icon,
  length: 1
}

const props = {
  top: 0,
  left: 0,
  iconSize: 24,
  mobileIconSize: 50,
  buttonMargin: 7 * 2,
  backgroundColor: '#C564A4',
  icons,
  arrowSize: 5,
  isMobile: false
}

describe('Tooltip', () => {
  it('should render a desktop tooltip with one icon and one arrow as children', () => {
    const tooltip = Tooltip(props)

    expect(tooltip.children).toHaveLength(2)
  })

  it('should render a mobile tooltip without arrow', () => {
    const tooltip = Tooltip({ ...props, isMobile: true })

    expect(tooltip.children).toHaveLength(1)
    expect(tooltip.children[0]).toEqual(icon)
  })
})
