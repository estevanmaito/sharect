import renderTooltip from '../../helpers/renderTooltip'

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
  buttonMargin: 7 * 2,
  backgroundColor: '#C564A4',
  icons,
  arrowSize: 5
}

window.getSelection = () => ({
  getRangeAt: () => ({
    getBoundingClientRect: () => ({
      width: 0,
      height: 0,
      top: 0,
      left: 0
    })
  })
})

describe('renderTooltip', () => {
  it('should render desktop Tooltip', () => {
    renderTooltip(props)

    const assert = document.body.querySelector('.sharect')

    expect(assert).toBeDefined()
    expect(assert.children).toHaveLength(2)
  })
})
