const Sharect = (function(){

  function Sharect() {
    const _networks = {
      twitter: true,
      facebook: false
    }
    const _twitterConfig = {
      username: false,
      url: 'https://twitter.com/intent/tweet?text=',
      icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" class="sharect__icon"><path d="M8.2,20.2c6.5,0,11.7-5.2,11.8-11.6c0-0.1,0-0.1,0-0.2c0-0.2,0-0.4,0-0.5c0.8-0.6,1.5-1.3,2.1-2.2c-0.8,0.3-1.6,0.6-2.4,0.7c0.9-0.5,1.5-1.3,1.8-2.3c-0.8,0.5-1.7,0.8-2.6,1c-1.6-1.7-4.2-1.7-5.9-0.1c-1.1,1-1.5,2.5-1.2,3.9C8.5,8.7,5.4,7.1,3.3,4.6c-1.1,1.9-0.6,4.3,1.3,5.5c-0.7,0-1.3-0.2-1.9-0.5l0,0c0,2,1.4,3.7,3.3,4.1c-0.6,0.2-1.2,0.2-1.9,0.1c0.5,1.7,2.1,2.8,3.9,2.9c-1.7,1.4-3.9,2-6.1,1.7C3.8,19.5,6,20.2,8.2,20.2"/></svg>'
    }
    const _facebookConfig = {
      icon: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" enable-background="new 0 0 24 24" width="24" height="24" class="sharect__icon"><path d="M20,2H4C2.9,2,2,2.9,2,4v16c0,1.1,0.9,2,2,2h16c1.1,0,2-0.9,2-2V4C22,2.9,21.1,2,20,2z M18.4,7.4H17c-0.9,0-1,0.3-1,1l0,1.3 h2.1L18,12h-1.9v7h-3.2v-7h-1.2V9.6h1.2V8.1c0-2,0.8-3.1,3.1-3.1h2.4V7.4z"/></svg>'
    }
    let _selection = ''
    let _text = ''
    let _backgroundColor = '#333'
    let _iconColor = '#fff'

    let _icons = {}
    let _arrowSize = 5
    let _buttonMargin = 7 * 2
    let _iconSize = 24 + _buttonMargin
    let _top = 0
    let _left = 0

    function facebookButton() {
      const fbBtn = new Button(_facebookConfig.icon, function() {
        FB.ui({
          method: 'share',
          display: 'popup',
          quote: _text,
          href: window.location.href
        })
      })

      return fbBtn
    }

    function twitterButton() {
      const txt = _twitterConfig.username
                  ? ` ${_twitterConfig.username} ${window.location.href}`
                  : ` ${window.location.href}`

      const twBtn = new Button(_twitterConfig.icon, function() {
        window.open(_twitterConfig.url + encodeURIComponent(_text) + txt, 'Share', 'width=550, height=280')
        return false
      })

      return twBtn
    }

    function appendIconStyleAndSharectStyle() {
      const style = document.createElement('style')
      style.innerHTML = `.sharect__icon{fill:${_iconColor};}.Show-with-transition{opacity:1 !important;ms-transform:translateY(0px) !important;-webkit-transform:translateY(0px) !important;transform:translateY(0px) !important;}.sharect{ms-transform:translateY(-20px);-webkit-transform:translateY(-20px);transform:translateY(-20px);opacity:0;-webkit-transition: .2s ease-in-out;-moz-transition: .2s ease-in-out;-o-transition:.2s ease-in-out;transition: .2s ease-in-out}`
      document.body.appendChild(style)
    }

    function appendIcons() {
      const icons = document.createElement('div')
      let length = 0
      if (_networks.twitter) {
        icons.appendChild(twitterButton())
        length++
      }
      if (_networks.facebook) {
        icons.appendChild(facebookButton())
        length++
      }
      return {
        icons,
        length
      }
    }

    function setTooltipPosition() {
      const position = _selection.getRangeAt(0).getBoundingClientRect()
      const DOCUMENT_SCROLL_TOP = window.pageXOffset
                                || document.documentElement.scrollTop
                                || document.body.scrollTop
      _top = position.top + DOCUMENT_SCROLL_TOP - _iconSize - _arrowSize
      _left = position.left + (position.width - _iconSize * _icons.length) / 2
    }

    function moveTooltip() {
      setTooltipPosition()
      let tooltip = document.querySelector('.sharect')
      tooltip.style.top = `${_top}px`
      tooltip.style.left = `${_left}px`
    }

    function drawTooltip() {
      _icons = appendIcons()
      setTooltipPosition()

      const container = document.createElement('div')
      container.className = 'sharect'
      container.style.cssText = 'line-height:0;'
                + 'position:absolute;'
                + 'background-color:' + _backgroundColor + ';'
                + 'border-radius:3px;'
                + 'top:' + _top + 'px;'
                + 'left:' + _left + 'px;'
                + 'transition:all .2s ease-in-out;'

      container.appendChild(_icons.icons)
      setTimeout(function(){container.classList.add("Show-with-transition")},100);
      const arrow = document.createElement('div')
      arrow.style.cssText = 'position:absolute;'
                  + 'border-left:' + _arrowSize + 'px solid transparent;'
                  + 'border-right:' + _arrowSize + 'px solid transparent;'
                  + 'border-top:' + _arrowSize + 'px solid ' + _backgroundColor + ';'
                  + 'bottom:-' + (_arrowSize - 1) + 'px;'
                  + 'left:' + (((_iconSize * _icons.length) / 2) - _arrowSize) + 'px;'
                  + 'width:0;'
                  + 'height:0;'

      container.appendChild(arrow)

      document.body.appendChild(container)
    }

    function attachEvents() {
      function hasSelection() {
        return !!window.getSelection().toString()
      }

      function hasTooltipDrawn() {
        return !!document.querySelector('.sharect')
      }

      window.addEventListener('mouseup', function() {
        setTimeout(function mouseTimeout() {
          if (hasTooltipDrawn()) {
            if (hasSelection()) {
              _selection = window.getSelection()
              _text = _selection.toString()
              moveTooltip()
              return
            } else {
              document.querySelector('.sharect').classList.remove("Show-with-transition");
              setTimeout(function(){document.querySelector('.sharect').remove();},100);
            }
          }
          if (hasSelection()) {
            _selection = window.getSelection()
            _text = _selection.toString()
            drawTooltip()
          }
        }, 10)
      }, false)
    }

    function config(options) {
      _networks.twitter = options.twitter === undefined
                          ? _networks.twitter
                          : options.twitter
      _networks.facebook = options.facebook === undefined
                           ? _networks.facebook
                           : options.facebook
      _twitterConfig.username = options.twitterUsername === undefined
                                ? _twitterConfig.username
                                : options.twitterUsername
      _backgroundColor = options.backgroundColor || '#333'
      _iconColor = options.iconColor || '#fff'
      return this
    }

    function init() {
      appendIconStyleAndSharectStyle()
      attachEvents()
      return this
    }

    return {
      config,
      init
    }
  }

  function Button(icon, clickFn) {
    const btn = document.createElement('div')
    btn.style.cssText = 'display:inline-block;'
              + 'margin:7px;'
              + 'cursor:pointer;'
              + 'transition:all .2s ease-in-out;'
    btn.innerHTML = icon
    btn.onclick = clickFn
    btn.onmouseover = function() {
      this.style.transform = 'scale(1.2)'
    }
    btn.onmouseout = function() {
      this.style.transform = 'scale(1)'
    }
    return btn
  }

  return Sharect
}());
