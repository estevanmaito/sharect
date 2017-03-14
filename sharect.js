function Sharect () {
  this.networks = {
    twitter: true,
    facebook: true
  }
  this.twitterConfig = {
    username: null,
    url: 'https://twitter.com/intent/tweet?text=',
    icon: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="24" height="24" style="fill: rgb(255, 255, 255);"><path d="M28,8.557c-0.883,0.392-1.832,0.656-2.828,0.775c1.017-0.609,1.797-1.574,2.165-2.724c-0.951,0.564-2.005,0.974-3.127,1.195&#9;c-0.898-0.957-2.178-1.555-3.594-1.555c-2.719,0-4.924,2.205-4.924,4.924c0,0.386,0.044,0.762,0.127,1.122&#9;c-4.092-0.205-7.72-2.166-10.149-5.145C5.247,7.876,5.004,8.722,5.004,9.625c0,1.708,0.869,3.215,2.19,4.098&#9;c-0.807-0.026-1.566-0.247-2.23-0.616c0,0.021,0,0.041,0,0.062c0,2.386,1.697,4.376,3.95,4.828C8.501,18.11,8.066,18.17,7.616,18.17&#9;c-0.317,0-0.626-0.031-0.926-0.088c0.627,1.956,2.445,3.38,4.6,3.42c-1.685,1.321-3.808,2.108-6.115,2.108&#9;c-0.397,0-0.789-0.023-1.175-0.069c2.179,1.397,4.767,2.212,7.548,2.212c9.057,0,14.009-7.503,14.009-14.01&#9;c0-0.213-0.005-0.426-0.014-0.637C26.505,10.411,27.34,9.544,28,8.557z"/></svg>'
  };
  this.facebookConfig = {
    icon: '<svg version="1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" enable-background="new 0 0 24 24" width="24" height="24" style="fill: rgb(255, 255, 255);"><path d="M20,2H4C2.9,2,2,2.9,2,4v16c0,1.1,0.9,2,2,2h16c1.1,0,2-0.9,2-2V4C22,2.9,21.1,2,20,2z M18.4,7.4H17c-0.9,0-1,0.3-1,1l0,1.3 h2.1L18,12h-1.9v7h-3.2v-7h-1.2V9.6h1.2V8.1c0-2,0.8-3.1,3.1-3.1h2.4V7.4z"/></svg>'
  };
  this.selection = '';
  this.text = '';
}

Sharect.prototype.config = function (options) {
  this.networks.twitter = options.twitter;
  this.networks.facebook = options.facebook;
  this.twitterConfig.username = options.twitterUsername;
  return this;
}

function Button (icon, clickFn) {
  var btn = document.createElement('div');
  btn.style.display = 'inline-block';
  btn.style.margin = '7px';
  btn.innerHTML = icon;
  btn.style.cursor = 'pointer';
  btn.onclick = clickFn;
  btn.style.transition = 'all 0.2s ease-in-out';
  btn.onmouseover = function() {
    this.style.transform = 'scale(1.2)';
  };
  btn.onmouseout = function() {
    this.style.transform = 'scale(1)';
  };
  return btn;
}

Sharect.prototype.facebookButton = function () {
  var fbBtn = new Button(this.facebookConfig.icon, function() {
    var text = this.text;
    FB.ui({
      method: 'share',
      display: 'popup',
      quote: text,
      href: 'https://developers.facebook.com/docs/',
    }, function(response){});
  }.bind(this))

  return fbBtn;
}

Sharect.prototype.twitterButton = function () {
  var twBtn = new Button(this.twitterConfig.icon, function() {
    window.open(this.twitterConfig.url + this.text, 'Share', 'width=550, height=280');
    return false;
  }.bind(this))
  return twBtn;
}

Sharect.prototype.drawTooltip = function (position) {
  var TRIANGLE_SIZE = 5;
  var MARGIN = 7 * 2;
  var ICON_SIZE = 24 + MARGIN;
  var ICONS_COUNT = 2;
  var LEFT = (position.left + (position.width - ICON_SIZE * ICONS_COUNT) / 2) + 'px';
  var div = document.createElement('div');
  div.className = 'sharect';
  div.style.lineHeight = 0;
  div.style.position = 'absolute';
  div.style.backgroundColor = '#333333';
  div.style.borderRadius = '3px';
  div.style.top = (position.top + document.body.scrollTop - ICON_SIZE - TRIANGLE_SIZE) + 'px';
  div.style.left = LEFT;

  div.appendChild(this.twitterButton());
  div.appendChild(this.facebookButton());

  var arrow = document.createElement('div');
  arrow.style.position = 'absolute';
  arrow.style.borderLeft = '5px solid transparent';
  arrow.style.borderRight = '5px solid transparent';
  arrow.style.borderTop = '5px solid #333333';
  arrow.style.bottom = '-5px';
  arrow.style.left = ((ICON_SIZE * ICONS_COUNT) / 2) - 5 + 'px';
  arrow.style.width = 0;
  arrow.style.height = 0;

  div.appendChild(arrow);

  document.body.appendChild(div);
}

Sharect.prototype.attachEvents = function () {
  function hasSelection () {
    return !!window.getSelection().toString();
  }

  function hasTooltipDrawn () {
    return !!document.querySelector('.sharect')
  }

  window.addEventListener('mouseup', function(e) {
    setTimeout(function mouseTimeout() {
      if (hasTooltipDrawn()) {
        document.querySelector('.sharect').remove();
      }
      if (hasSelection()) {
        this.selection = window.getSelection();
        this.text = this.selection.toString();
        var position = this.selection.getRangeAt(0).getBoundingClientRect();
        this.drawTooltip(position);
      }
    }.bind(this), 10)
  }.bind(this), false);
}

Sharect.prototype.init = function () {
  this.attachEvents();
  return this;
}
