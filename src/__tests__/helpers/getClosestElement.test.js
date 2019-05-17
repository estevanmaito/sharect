import getClosestElement from '../../helpers/getClosestElement'

const template = `
<div class="outer">
  <div class="inner">
    <span class="element"></span>
  </div>
</div>
`

document.body.innerHTML = template
const element = document.querySelector('.element')

describe('getClosestElement', () => {
  it('should return the closest matching ancestor', () => {
    const ancestor = getClosestElement(element, 'div')

    expect(ancestor.classList).toContain('inner')
  })
  
  it('should return null if there isn\'t a matching ancestor', () => {
    const ancestor = getClosestElement(element, 'section')

    expect(ancestor).toBeNull()
  })
  
})
