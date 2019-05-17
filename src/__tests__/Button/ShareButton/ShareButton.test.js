import ShareButton, { getParsedURL } from '../../../Button/ShareButton/ShareButton'

const icon = 'icon'
const url = 'https://api.whatsapp.com/send?text=TEXT_SELECTION%20PAGE_URL'
const username = 'username'
const selection = 'Hello world!'

beforeEach(() => {
  window.getSelection = () => selection
  window.open = jest.fn()
})

describe('getParsedURL', () => {
  it('should return a parsed URL', () => {
    const parsedURL = getParsedURL(url, username)

    const expected = `https://api.whatsapp.com/send?text=${selection}%20${window.location.href}`

    expect(parsedURL).toEqual(expected)
  })
  
})


describe('ShareButton', () => {
  it('should open a window when mouse is down', () => {

    const btn = ShareButton(icon, url, username)
    btn.onmousedown()
    
    expect(window.open).toHaveBeenCalled()
  })
})
