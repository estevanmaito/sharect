'use strict';

var Sharect = function () {

  function Sharect() {
    var _networks = {
      twitter: true,
      facebook: false
    };
    var _twitterConfig = {
      username: false,
      url: 'https://twitter.com/intent/tweet?text=',
      icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" class="sharect__icon"><path d="M9,18.5a9.28,9.28,0,0,0,9.34-9.34q0-.21,0-0.42A6.68,6.68,0,0,0,20,7a6.55,6.55,0,0,1-1.89.52,3.29,3.29,0,0,0,1.44-1.82,6.57,6.57,0,0,1-2.08.8,3.29,3.29,0,0,0-5.59,3A9.32,9.32,0,0,1,5.11,6.1a3.28,3.28,0,0,0,1,4.38,3.26,3.26,0,0,1-1.49-.41s0,0,0,0a3.28,3.28,0,0,0,2.63,3.22,3.29,3.29,0,0,1-1.48.06,3.29,3.29,0,0,0,3.07,2.28A6.63,6.63,0,0,1,4,17,9.3,9.3,0,0,0,9,18.5"/></svg>'
    };
    var _facebookConfig = {
      icon: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" enable-background="new 0 0 24 24" width="24" height="24" class="sharect__icon"><path d="M20,2H4C2.9,2,2,2.9,2,4v16c0,1.1,0.9,2,2,2h16c1.1,0,2-0.9,2-2V4C22,2.9,21.1,2,20,2z M18.4,7.4H17c-0.9,0-1,0.3-1,1l0,1.3 h2.1L18,12h-1.9v7h-3.2v-7h-1.2V9.6h1.2V8.1c0-2,0.8-3.1,3.1-3.1h2.4V7.4z"/></svg>'
    };
    var _selection = '';
    var _text = '';
    var _backgroundColor = '#333';
    var _iconColor = '#fff';

    var _icons = {};
    var _arrowSize = 5;
    var _buttonMargin = 7 * 2;
    var _iconSize = 24 + _buttonMargin;
    var _top = 0;
    var _left = 0;

    function facebookButton() {
      var fbBtn = new Button(_facebookConfig.icon, function () {
        FB.ui({
          method: 'share',
          display: 'popup',
          quote: _text,
          href: window.location.href
        });
      });

      return fbBtn;
    }

    function twitterButton() {
      var txt = _twitterConfig.username ? ' ' + _twitterConfig.username + ' ' + window.location.href : ' ' + window.location.href;

      var twBtn = new Button(_twitterConfig.icon, function () {
        window.open(_twitterConfig.url + _text + txt, 'Share', 'width=550, height=280');
        return false;
      });

      return twBtn;
    }

    function appendIconStyle() {
      var style = document.createElement('style');
      style.innerHTML = '.sharect__icon { fill: ' + _iconColor + '; }';
      document.body.appendChild(style);
    }

    function appendIcons() {
      var div = document.createElement('div');
      var count = 0;
      if (_networks.twitter) {
        div.appendChild(twitterButton());
        count++;
      }
      if (_networks.facebook) {
        div.appendChild(facebookButton());
        count++;
      }
      return {
        icons: div,
        length: count
      };
    }

    function setTooltipPosition() {
      var position = _selection.getRangeAt(0).getBoundingClientRect();
      var DOCUMENT_SCROLL_TOP = window.pageXOffset || document.documentElement.scrollTop || document.body.scrollTop;
      _top = position.top + DOCUMENT_SCROLL_TOP - _iconSize - _arrowSize;
      _left = position.left + (position.width - _iconSize * _icons.length) / 2;
    }

    function moveTooltip() {
      setTooltipPosition();
      var tooltip = document.querySelector('.sharect');
      tooltip.style.top = _top + 'px';
      tooltip.style.left = _left + 'px';
    }

    function drawTooltip() {
      _icons = appendIcons();
      setTooltipPosition();

      var div = document.createElement('div');
      div.className = 'sharect';
      div.style = 'line-height:0;' + 'position:absolute;' + 'background-color:' + _backgroundColor + ';' + 'border-radius:3px;' + 'top:' + _top + 'px;' + 'left:' + _left + 'px;' + 'transition:all .2s ease-in-out;';

      div.appendChild(_icons.icons);

      var arrow = document.createElement('div');
      arrow.style = 'position:absolute;' + 'border-left:' + _arrowSize + 'px solid transparent;' + 'border-right:' + _arrowSize + 'px solid transparent;' + 'border-top:' + _arrowSize + 'px solid ' + _backgroundColor + ';' + 'bottom:-' + _arrowSize + 'px;' + 'left:' + (_iconSize * _icons.length / 2 - _arrowSize) + 'px;' + 'width:0;' + 'height:0;';

      div.appendChild(arrow);

      document.body.appendChild(div);
    }

    function attachEvents() {
      function hasSelection() {
        return !!window.getSelection().toString();
      }

      function hasTooltipDrawn() {
        return !!document.querySelector('.sharect');
      }

      window.addEventListener('mouseup', function () {
        setTimeout(function mouseTimeout() {
          if (hasTooltipDrawn()) {
            if (hasSelection()) {
              _selection = window.getSelection();
              _text = _selection.toString();
              moveTooltip();
              return;
            } else {
              document.querySelector('.sharect').remove();
            }
          }
          if (hasSelection()) {
            _selection = window.getSelection();
            _text = _selection.toString();
            drawTooltip();
          }
        }, 10);
      }, false);
    }

    function config(options) {
      _networks.twitter = options.twitter === undefined ? _networks.twitter : options.twitter;
      _networks.facebook = options.facebook === undefined ? _networks.facebook : options.facebook;
      _twitterConfig.username = options.twitterUsername === undefined ? _twitterConfig.username : options.twitterUsername;
      _backgroundColor = options.backgroundColor || '#333';
      _iconColor = options.iconColor || '#fff';
      return this;
    }

    function init() {
      appendIconStyle();
      attachEvents();
      return this;
    }

    return {
      config: config,
      init: init
    };
  }

  function Button(icon, clickFn) {
    var btn = document.createElement('div');
    btn.style = 'display:inline-block;' + 'margin:7px;' + 'cursor:pointer;' + 'transition:all .2s ease-in-out;';
    btn.innerHTML = icon;
    btn.onclick = clickFn;
    btn.onmouseover = function () {
      this.style.transform = 'scale(1.2)';
    };
    btn.onmouseout = function () {
      this.style.transform = 'scale(1)';
    };
    return btn;
  }

  return Sharect;
}();
