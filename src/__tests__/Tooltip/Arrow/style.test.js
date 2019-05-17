import style from '../../../Tooltip/Arrow/style'

describe('Arrow styles', () => {
  it('should return the default styles', () => {
    const [arrowSize, buttonSize, backgroundColor, icons] = [
      5, 10, '#C565A4', { length: 2 }
    ]

    const props = { arrowSize, buttonSize, backgroundColor, icons }

    const expected = "position:absolute;" +
      "border-left:" + arrowSize + "px solid transparent;" +
      "border-right:" + arrowSize + "px solid transparent;" +
      "border-top:" + arrowSize + "px solid " + backgroundColor + ";" +
      "bottom:-" + (arrowSize - 1) + "px;" +
      "left:" + ((buttonSize * icons.length) / 2 - arrowSize) + "px;" +
      "width:0;" +
      "height:0;"
    
    expect(style(props)).toEqual(expected)
    })
})
