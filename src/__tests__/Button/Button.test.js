import Button from '../../Button/Button'
import style from '../../Button/style'

describe('Button', () => {
  it('should render a button element', () => {
    const button = Button('icon')
    expect(button).toMatchSnapshot()
  })

  it('should call handleMouseDown on mousedown', () => {
    const handleMouseDown = jest.fn()
    const button = Button('icon', handleMouseDown)
    button.onmousedown()

    expect(handleMouseDown).toHaveBeenCalled()
  })
  
  it('should contain an icon in innerHTML', () => {
    const button = Button('icon')

    expect(button.innerHTML).toBe('icon')
  })

  it('should have style', () => {
    const button = Button('icon')

    const styledButton = document.createElement('div')
    styledButton.style.cssText = style

    expect(button.style.cssText).toEqual(styledButton.style.cssText)
  })  

  it('should grow transform scale on mouseover', () => {
    const button = Button('icon')
    button.onmouseover()

    expect(button.style.transform).toEqual("scale(1.2)")
  })

  it('should return to the initial transform scale on mouseout', () => {
    const button = Button('icon')
    button.onmouseout()

    expect(button.style.transform).toEqual("scale(1)")
  })
  
})
