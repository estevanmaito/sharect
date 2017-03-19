const Sharect = (function(){

  function Sharect() {
    const _networks = {
      twitter: true,
      facebook: false
    }
    const _twitterConfig = {
      username: false,
      url: 'https://twitter.com/intent/tweet?text=',
      icon: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="24" height="24" class="sharect__icon"><path d="M28,8.557c-0.883,0.392-1.832,0.656-2.828,0.775c1.017-0.609,1.797-1.574,2.165-2.724c-0.951,0.564-2.005,0.974-3.127,1.195&#9c-0.898-0.957-2.178-1.555-3.594-1.555c-2.719,0-4.924,2.205-4.924,4.924c0,0.386,0.044,0.762,0.127,1.122&#9c-4.092-0.205-7.72-2.166-10.149-5.145C5.247,7.876,5.004,8.722,5.004,9.625c0,1.708,0.869,3.215,2.19,4.098&#9c-0.807-0.026-1.566-0.247-2.23-0.616c0,0.021,0,0.041,0,0.062c0,2.386,1.697,4.376,3.95,4.828C8.501,18.11,8.066,18.17,7.616,18.17&#9c-0.317,0-0.626-0.031-0.926-0.088c0.627,1.956,2.445,3.38,4.6,3.42c-1.685,1.321-3.808,2.108-6.115,2.108&#9c-0.397,0-0.789-0.023-1.175-0.069c2.179,1.397,4.767,2.212,7.548,2.212c9.057,0,14.009-7.503,14.009-14.01&#9c0-0.213-0.005-0.426-0.014-0.637C26.505,10.411,27.34,9.544,28,8.557z"/></svg>'
    }
    const _facebookConfig = {
      icon: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" enable-background="new 0 0 24 24" width="24" height="24" class="sharect__icon"><path d="M20,2H4C2.9,2,2,2.9,2,4v16c0,1.1,0.9,2,2,2h16c1.1,0,2-0.9,2-2V4C22,2.9,21.1,2,20,2z M18.4,7.4H17c-0.9,0-1,0.3-1,1l0,1.3 h2.1L18,12h-1.9v7h-3.2v-7h-1.2V9.6h1.2V8.1c0-2,0.8-3.1,3.1-3.1h2.4V7.4z"/></svg>'
    }
    let _selection = ''
    let _text = ''
    let _backgroundColor = '#333333'
    let _iconColor = '#ffffff'

    function facebookButton() {
      const fbBtn = new Button(_facebookConfig.icon, function() {
        FB.ui({ // eslint-disable-line
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
                  ? `${_text} ${_twitterConfig.username} ${window.location.href}`
                  : `${_text} ${window.location.href}`

      const twBtn = new Button(_twitterConfig.icon, function() {
        window.open(_twitterConfig.url + txt, 'Share', 'width=550, height=280')
        return false
      })

      return twBtn
    }

    function addIconStyle() {
      const style = document.createElement('style')
      style.innerHTML = `.sharect__icon { fill: ${_iconColor}; }`
      document.body.appendChild(style)
    }

    function appendIcons() {
      const div = document.createElement('div')
      let count = 0
      if (_networks.twitter) {
        div.appendChild(twitterButton())
        count++
      }
      if (_networks.facebook) {
        div.appendChild(facebookButton())
        count++
      }
      return {
        icons: div,
        length: count
      }
    }

    function drawTooltip(position) {
      const div = document.createElement('div')
      const ICONS = appendIcons()
      const TRIANGLE_SIZE = 5
      const MARGIN = 7 * 2
      const ICON_SIZE = 24 + MARGIN
      const DOCUMENT_SCROLL_TOP = window.pageXOffset || document.documentElement.scrollTop || document.body.scrollTop
      const TOP = `${position.top + DOCUMENT_SCROLL_TOP - ICON_SIZE - TRIANGLE_SIZE}px`
      const LEFT = `${position.left + (position.width - ICON_SIZE * ICONS.length) / 2}px`
      div.className = 'sharect'
      div.style = `line-height: 0;
                   position: absolute;
                   background-color: ${_backgroundColor};
                   border-radius: 3px;
                   top: ${TOP};
                   left: ${LEFT};`

      div.appendChild(ICONS.icons)

      const arrow = document.createElement('div')
      arrow.style = `position: absolute;
                     border-left: ${TRIANGLE_SIZE}px solid transparent;
                     border-right: ${TRIANGLE_SIZE}px solid transparent;
                     border-top: ${TRIANGLE_SIZE}px solid ${_backgroundColor};
                     bottom: -${TRIANGLE_SIZE}px;
                     left: ${((ICON_SIZE * ICONS.length) / 2) - TRIANGLE_SIZE}px;
                     width: 0;
                     height: 0;`

      div.appendChild(arrow)

      document.body.appendChild(div)
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
            document.querySelector('.sharect').remove()
          }
          if (hasSelection()) {
            _selection = window.getSelection()
            _text = _selection.toString()
            let position = _selection.getRangeAt(0).getBoundingClientRect()
            drawTooltip(position)
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
      _backgroundColor = options.backgroundColor || '#333333'
      _iconColor = options.iconColor || '#ffffff'
      return this
    }

    function init() {
      addIconStyle()
      attachEvents()
      return this
    }

    return {
      config: config,
      init: init
    }
  }

  function Button(icon, clickFn) {
    const btn = document.createElement('div')
    btn.style = `display: inline-block;
                 margin: 7px;
                 cursor: pointer;
                 transition: all 0.2s ease-in-out;`
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
