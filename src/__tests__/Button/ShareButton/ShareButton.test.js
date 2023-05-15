import ShareButton, { getParsedURL } from '../../../Button/ShareButton/ShareButton'

const icon = 'icon'
const url = 'https://api.whatsapp.com/send?text=TEXT_SELECTION%20PAGE_URL'
const username = 'username'
let selection;

beforeEach(() => {
  window.open = jest.fn()
})

describe('getParsedURL', () => {
  it('should return a parsed URL', () => {
    selection = 'Hello world!'
    window.getSelection = () => selection

    const parsedURL = getParsedURL(url, username)

    const expected = `https://api.whatsapp.com/send?text=${encodeURIComponent(selection)}%20${window.location.href}`

    expect(parsedURL).toEqual(expected)
  })

  it('should return a parsed URL, including encoded special characters', () => {
    selection = 'Special chars: \!\*\'\(\)\;\:\@\&\=\+\$\,\/\?\%\#\[\]'
    window.getSelection = () => selection

    const parsedURL = getParsedURL(url, username)

    const expected = `https://api.whatsapp.com/send?text=${encodeURIComponent(selection)}%20${window.location.href}`

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
