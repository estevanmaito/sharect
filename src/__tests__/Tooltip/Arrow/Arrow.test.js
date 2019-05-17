import Arrow from '../../../Tooltip/Arrow/Arrow'
import style from '../../../Tooltip/Arrow/style'

describe('Arrow', () => {
  const [arrowSize, buttonSize, backgroundColor, icons] = [
    5, 10, '#C565A4', { length: 2 }
  ]
  const props = { arrowSize, buttonSize, backgroundColor, icons }

  it('should render the tooltip arrow', () => {
    const arrow = Arrow(props)

    expect(arrow.nodeName).toEqual('DIV')
  })

  it('should render the arrow with the correct style', () => {
    const arrow = Arrow(props)

    const expected = document.createElement('div')
    expected.style.cssText = style(props)

    expect(arrow.style.cssText).toEqual(expected.style.cssText)
  })
})
