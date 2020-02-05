import getTooltipPosition, { getDistanceFromTop } from '../../helpers/getTooltipPosition'

const props = {
  iconSize: 24,
  buttonMargin: 7 * 2,
  arrowSize: 5,
  icons: {
    icons: {},
    length: 2
  }
}

window.getSelection = () => ({
  getRangeAt: () => ({
    getBoundingClientRect: () => ({
      width: 75,
      height: 21,
      top: 218,
      left: 720
    })
  })
})

describe('getDistanceFromTop', () => {
  it('should return distance from top', () => {
    const distance = getDistanceFromTop()

    expect(distance).toEqual(0)
  })
})

describe('getTooltipPosition', () => {
  it('should return the tooltip position', () => {
    const tooltipPosition = getTooltipPosition(props)

    const expected = {
      top: 175,
      left: 719.5
    }

    expect(tooltipPosition).toEqual(expected)
  })
  
})

