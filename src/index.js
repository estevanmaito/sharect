import { appendIconStyle } from './helpers/appendIconStyles'
import attachEvents from './helpers/attachEvents'
import getIcons from './helpers/getIcons'

export default (function () {
  let _networks = {
    twitter: {
      isActive: true,
      username: '',
      url: 'https://twitter.com/intent/tweet?text=TEXT_SELECTION&via=USERNAME&url=PAGE_URL',
      icon: '<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 512 512"><!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z"/></svg>'
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
