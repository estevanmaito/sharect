import renderTooltip from '../../helpers/renderTooltip'
import moveTooltip from '../../helpers/moveTooltip'
import getTooltipPosition from '../../helpers/getTooltipPosition'

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

describe('moveTooltip', () => {
  beforeEach(() => {
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

    renderTooltip(props)
  })

  it('should move the drawn tooltip on desktop', () => {
    window.getSelection = () => ({
      getRangeAt: () => ({
        getBoundingClientRect: () => ({
          width: 10,
          height: 0,
          top: 10,
          left: 50
        })
      })
    })

    moveTooltip(props)

    const assert = document.querySelector('.sharect').style
    const expectedLeft = `${getTooltipPosition(props).left}px`

    expect(assert.left).toEqual(expectedLeft)
  })

  it('should not move the tooltip on mobile', () => {
    window.getSelection = () => ({
      getRangeAt: () => ({
        getBoundingClientRect: () => ({
          width: 10,
          height: 0,
          top: 10,
          left: 50
        })
      })
    })

    const mobileMovement = moveTooltip({ ...props, isMobile: true })

    const assert = document.querySelector('.sharect').style
    const expectedLeft = `${getTooltipPosition(props).left}px`

    expect(assert.left).toEqual(expectedLeft)
    expect(mobileMovement).toBeNull()
  })
  
  
})
