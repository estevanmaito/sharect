import {
  appendIconStyle,
  appendMobileIconStyle
} from '../../helpers/appendIconStyles'

const iconColor = '#F34'
const mobileIconSize = 5

describe('appendIconStyle', () => {
  it('should create a style tag', () => {
    appendIconStyle({ iconColor })

    expect(document.body).toMatchSnapshot()
  })
})

describe('appendMobileIconStyle', () => {
  it('should update the style for mobile', () => {
    appendMobileIconStyle(iconColor, mobileIconSize)

    expect(document.body).toMatchSnapshot()
  })
  
})

