import hasTooltipDrawn from '../../helpers/hasTooltipDrawn'

describe('hasTooltipDrawn', () => {
  beforeEach(() => {
    document.body.innerHTML = ''
  })

  it('should return true if there is an element with class .sharect', () => {
    document.body.innerHTML = `<div class="sharect"></div>`

    expect(hasTooltipDrawn()).toBe(true)
  })

  it('should return false if there is not an element with class .sharect', () => {
    expect(hasTooltipDrawn()).toBe(false)
  })
})
