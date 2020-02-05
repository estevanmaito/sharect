import {
  appendIconStyle
} from '../../helpers/appendIconStyles'

const iconColor = '#F34'

describe('appendIconStyle', () => {
  it('should create a style tag', () => {
    appendIconStyle({ iconColor })

    expect(document.body).toMatchSnapshot()
  })
})
