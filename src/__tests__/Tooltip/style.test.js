import {
  defaultStyle,
  desktopStyle
} from '../../Tooltip/style'

describe('Tooltip styles', () => {
  describe('defaultStyle', () => {
    it('should return the default styles', () => {
      const backgroundColor = '#C562A4'

      const expected = "line-height:0;" +
        "transition:all .2s ease-in-out;" +
        "background:" + backgroundColor + ";"

      expect(defaultStyle(backgroundColor)).toEqual(expected)
    })
  })

  describe('desktopStyle', () => {
    it('should return desktop styles', () => {
      const [top, left] = [10, 20]

      const expected = "position:absolute;" +
        "border-radius:3px;" +
        "top:" + top + "px;" +
        "left:" + left + "px;"

      expect(desktopStyle(top, left)).toEqual(expected)
    })
  })
})
