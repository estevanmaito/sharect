import {
  defaultStyle,
  mobileStyle,
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

  describe('mobileStyle', () => {
    it('should return mobile styles', () => {
      const buttonSize = 50

      const expected = "position:fixed;" +
        "bottom:calc(50% - 64px);" +
        "left:0;" +
        "width:" + buttonSize + "px;" +
        "border-top-right-radius:5px;" +
        "border-bottom-right-radius:5px;"
      
      expect(mobileStyle(buttonSize)).toEqual(expected)
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
