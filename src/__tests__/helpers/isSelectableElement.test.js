import isSelectableElement from '../../helpers/isSelectableElement'

const selectableElements = ['p']

const template = `
<div class="outer">
  <div class="inner">
    <span class="unselectable"></span>
    <p class="selectable"></p>
  </div>
</div>
`

document.body.innerHTML = template

let currentSelectedElement

window.getSelection = () => ({
  baseNode: {
    parentNode: currentSelectedElement
  }
})

describe('isSelectableElement', () => {
  it('should return false if the selected text is not inside a selectable element', () => {
    currentSelectedElement = document.querySelector('.unselectable')

    expect(isSelectableElement(selectableElements)).toBe(false)
  })

  it('should return true if the selected text is inside a selectable element', () => {
    currentSelectedElement = document.querySelector('.selectable')
    
    expect(isSelectableElement(selectableElements)).toBe(true)
  })
})
