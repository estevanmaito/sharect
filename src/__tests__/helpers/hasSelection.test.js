import hasSelection from '../../helpers/hasSelection'

describe('hasSelection', () => {
  it('should return false if there is not a text selection', () => {
    window.getSelection = () => ''

    expect(hasSelection()).toBe(false)
  })

  it('should return true if there is a text selection', () => {
    window.getSelection = () => 'selection'

    expect(hasSelection()).toBe(true)
  })
})
