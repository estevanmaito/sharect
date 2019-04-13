'use strict';

var Sharect = function () {

  function Sharect() {
    var _networks = {
      twitter: true,
      facebook: true
    };
    var _twitterConfig = {
      username: '',
      url: 'https://twitter.com/intent/tweet?text=TEXT_SELECTION&via=USERNAME&url=PAGE_URL',
      icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" class="sharect__icon"><path d="M8.2,20.2c6.5,0,11.7-5.2,11.8-11.6c0-0.1,0-0.1,0-0.2c0-0.2,0-0.4,0-0.5c0.8-0.6,1.5-1.3,2.1-2.2c-0.8,0.3-1.6,0.6-2.4,0.7c0.9-0.5,1.5-1.3,1.8-2.3c-0.8,0.5-1.7,0.8-2.6,1c-1.6-1.7-4.2-1.7-5.9-0.1c-1.1,1-1.5,2.5-1.2,3.9C8.5,8.7,5.4,7.1,3.3,4.6c-1.1,1.9-0.6,4.3,1.3,5.5c-0.7,0-1.3-0.2-1.9-0.5l0,0c0,2,1.4,3.7,3.3,4.1c-0.6,0.2-1.2,0.2-1.9,0.1c0.5,1.7,2.1,2.8,3.9,2.9c-1.7,1.4-3.9,2-6.1,1.7C3.8,19.5,6,20.2,8.2,20.2"/></svg>'
    };
    var _facebookConfig = {
      url: 'https://www.facebook.com/sharer/sharer.php?u=PAGE_URL&quote=TEXT_SELECTION',
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
    var _selectableElements = ['body'];
    var _customShareButtons = [];

    function createShareButton(icon, url) {
      var btn = new Button(icon, function () {
        var parsedURL = url.replace(/PAGE_URL/, window.location.href).replace(/TEXT_SELECTION/, _text).replace(/USERNAME/, _twitterConfig.username);
        window.open(parsedURL, 'Share', 'width=550, height=280');
      });

      return btn;
    }

    function appendIconStyle() {
      var style = document.createElement('style');
      style.innerHTML = '.sharect__icon{fill:' + _iconColor + ';}';
      document.body.appendChild(style);
    }

    function getIcons() {
      var icons = document.createElement('div');
      var length = 0;
      if (_networks.twitter) {
        var icon = _twitterConfig.icon,
            url = _twitterConfig.url;

        icons.appendChild(createShareButton(icon, url));
        length++;
      }
      if (_networks.facebook) {
        var _icon = _facebookConfig.icon,
            _url = _facebookConfig.url;

        icons.appendChild(createShareButton(_icon, _url));
        length++;
      }
      if (_customShareButtons.length) {
        _customShareButtons.forEach(function (btn) {
          icons.appendChild(createShareButton(btn.icon, btn.url));
          length++;
        });
      }
      _icons = { icons: icons, length: length };
    }

    function getTooltipPosition() {
      var selection = _selection.getRangeAt(0).getBoundingClientRect();
      var DOCUMENT_SCROLL_TOP = window.pageXOffset || document.documentElement.scrollTop || document.body.scrollTop;
      var top = selection.top + DOCUMENT_SCROLL_TOP - _iconSize - _arrowSize;
      var left = selection.left + (selection.width - _iconSize * _icons.length) / 2;
      return { top: top, left: left };
    }

    function moveTooltip() {
      var _getTooltipPosition = getTooltipPosition(),
          top = _getTooltipPosition.top,
          left = _getTooltipPosition.left;

      var tooltip = document.querySelector('.sharect');
      tooltip.style.top = top + 'px';
      tooltip.style.left = left + 'px';
    }

    function createTooltip() {
      var top = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
      var left = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;

      var tooltip = document.createElement('div');
      tooltip.className = 'sharect';
      tooltip.style.cssText = 'line-height:0;' + 'position:absolute;' + 'background-color:' + _backgroundColor + ';' + 'border-radius:3px;' + 'top:' + top + 'px;' + 'left:' + left + 'px;' + 'transition:all .2s ease-in-out;';

      tooltip.appendChild(_icons.icons);

      var arrow = document.createElement('div');
      arrow.style.cssText = 'position:absolute;' + 'border-left:' + _arrowSize + 'px solid transparent;' + 'border-right:' + _arrowSize + 'px solid transparent;' + 'border-top:' + _arrowSize + 'px solid ' + _backgroundColor + ';' + 'bottom:-' + (_arrowSize - 1) + 'px;' + 'left:' + (_iconSize * _icons.length / 2 - _arrowSize) + 'px;' + 'width:0;' + 'height:0;';

      tooltip.appendChild(arrow);

      return tooltip;
    }

    function drawTooltip() {
      var _getTooltipPosition2 = getTooltipPosition(),
          top = _getTooltipPosition2.top,
          left = _getTooltipPosition2.left;

      var tooltip = createTooltip(top, left);
      document.body.appendChild(tooltip);
    }

    function hasSelection() {
      return !!window.getSelection().toString();
    }

    function hasTooltipDrawn() {
      return !!document.querySelector('.sharect');
    }

    function updateTextSelection() {
      _selection = window.getSelection();
      _text = _selection.toString();
    }

    function getClosestElement(element, ancestor) {
      if (Element.prototype.closest) {
        return element.closest(ancestor);
      } else {
        // IE 9+ polyfill
        var el = element;
        do {
          if (el.matches(ancestor)) return el;
          el = el.parentNode;
        } while (el !== null && el.nodeType === Node.ELEMENT_NODE);
        return null;
      }
    }

    function isSelectableElement() {
      var currentSelectedElement = window.getSelection().baseNode.parentNode;
      return _selectableElements.some(function (ancestor) {
        return getClosestElement(currentSelectedElement, ancestor);
      });
    }

    function attachEvents() {
      window.addEventListener('mouseup', function () {
        setTimeout(function mouseTimeout() {
          if (hasTooltipDrawn()) {
            if (hasSelection() && isSelectableElement()) {
              updateTextSelection();
              moveTooltip();
              return;
            } else {
              document.querySelector('.sharect').remove();
            }
          }
          if (hasSelection() && isSelectableElement()) {
            updateTextSelection();
            drawTooltip();
          }
        }, 10);
      }, false);
    }

    function config(options) {
      _networks.twitter = options.twitter === undefined ? _networks.twitter : options.twitter;
      _networks.facebook = options.facebook === undefined ? _networks.facebook : options.facebook;
      _twitterConfig.username = options.twitterUsername === undefined ? _twitterConfig.username : options.twitterUsername;
      _backgroundColor = options.backgroundColor || _backgroundColor;
      _iconColor = options.iconColor || _iconColor;
      _selectableElements = options.selectableElements || _selectableElements;
      return this;
    }

    function appendCustomShareButton(arrayOfButtonObjects) {
      _customShareButtons = arrayOfButtonObjects;
      return this;
    }

    function init() {
      appendIconStyle();
      getIcons();
      attachEvents();
      return this;
    }

    return {
      config: config,
      appendCustomShareButton: appendCustomShareButton,
      init: init
    };
  }

  function Button(icon, clickFn) {
    var btn = document.createElement('div');
    btn.style.cssText = 'display:inline-block;' + 'margin:7px;' + 'cursor:pointer;' + 'transition:all .2s ease-in-out;';
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
