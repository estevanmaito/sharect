import { appendIconStyle } from './helpers/appendIconStyles'
import attachEvents from './helpers/attachEvents'
import getIcons from './helpers/getIcons'

export default (function() {
  let _networks = {
    twitter: {
      isActive: true,
      username: '',
      url: 'https://twitter.com/intent/tweet?text=TEXT_SELECTION&via=USERNAME&url=PAGE_URL',
      icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M8.2,20.2c6.5,0,11.7-5.2,11.8-11.6c0-0.1,0-0.1,0-0.2c0-0.2,0-0.4,0-0.5c0.8-0.6,1.5-1.3,2.1-2.2c-0.8,0.3-1.6,0.6-2.4,0.7c0.9-0.5,1.5-1.3,1.8-2.3c-0.8,0.5-1.7,0.8-2.6,1c-1.6-1.7-4.2-1.7-5.9-0.1c-1.1,1-1.5,2.5-1.2,3.9C8.5,8.7,5.4,7.1,3.3,4.6c-1.1,1.9-0.6,4.3,1.3,5.5c-0.7,0-1.3-0.2-1.9-0.5l0,0c0,2,1.4,3.7,3.3,4.1c-0.6,0.2-1.2,0.2-1.9,0.1c0.5,1.7,2.1,2.8,3.9,2.9c-1.7,1.4-3.9,2-6.1,1.7C3.8,19.5,6,20.2,8.2,20.2"/></svg>'
    },
    facebook: {
      isActive: true,
      url: 'https://www.facebook.com/sharer/sharer.php?u=PAGE_URL&quote=TEXT_SELECTION',
      icon: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" enable-background="new 0 0 24 24" width="24" height="24" class="sharect__icon"><path d="M20,2H4C2.9,2,2,2.9,2,4v16c0,1.1,0.9,2,2,2h16c1.1,0,2-0.9,2-2V4C22,2.9,21.1,2,20,2z M18.4,7.4H17c-0.9,0-1,0.3-1,1l0,1.3 h2.1L18,12h-1.9v7h-3.2v-7h-1.2V9.6h1.2V8.1c0-2,0.8-3.1,3.1-3.1h2.4V7.4z"/></svg>'
    }
  }
  let _icons = {}
  let _selectableElements = ['body']
  let _customShareButtons = []
  let _backgroundColor = '#333'
  let _iconColor = '#fff'
  
  let _arrowSize = 5
  let _buttonMargin = 7 * 2
  let _iconSize = 24
  let _mobileIconSize = 50

  function config(o) {
    if (o.twitter !== undefined) _networks.twitter.isActive = o.twitter
    if (o.facebook !== undefined) _networks.facebook.isActive = o.facebook
    if (o.twitterUsername) _networks.twitter.username = o.twitterUsername
    if (o.backgroundColor) _backgroundColor = o.backgroundColor
    if (o.iconColor) _iconColor = o.iconColor
    if (o.selectableElements) _selectableElements = o.selectableElements

    return this
  }

  function appendCustomShareButtons(arrayOfButtonObjects) {
    _customShareButtons = arrayOfButtonObjects
    return this
  }

  function init() {
    const props = {
      backgroundColor: _backgroundColor,
      iconColor: _iconColor,
      arrowSize: _arrowSize,
      buttonMargin: _buttonMargin,
      iconSize: _iconSize,
      mobileIconSize: _mobileIconSize,
      selectableElements: _selectableElements,
      networks: _networks,
      customShareButtons: _customShareButtons
    }
    
    appendIconStyle({ ...props })
    _icons = getIcons({ ...props })
    attachEvents({ ...props, icons: _icons })
    return this
  }

  return {
    config,
    appendCustomShareButtons,
    init
  }
})()
