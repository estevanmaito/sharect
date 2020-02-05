<p align="center">
  <a href="https://estevanmaito.github.io/sharect"><img alt="Sharect" src="./docs/sharect.gif"></a>
</p>

<p align="center">
  <a href="https://www.npmjs.com/package/sharect"><img src="https://img.shields.io/npm/v/sharect.svg?style=flat-square"></a>
  <a href="https://github.com/estevanmaito/sharect/releases/download/2.0.0/sharect.js"><img src="https://img.shields.io/github/downloads/estevanmaito/sharect/total.svg?style=flat-square"></a>
  <a href="https://github.com/estevanmaito/sharect"><img src="https://img.shields.io/npm/l/sharect.svg?style=flat-square"></a>
  <a href="http://twitter.com/home?status=Sharect%20is%20a%20JavaScript%20library%20to%20let%20people%20share%20their%20text%20selections%20to%20social%20networks%20%23Sharect%20via%20%40estevanmaito"><img src="https://img.shields.io/twitter/url/https/shields.io.svg?style=social"></a>
</p>

A **lightweight** (8kb, 2.9kb gziped) JavaScript library to let people share their text selections to social networks. (Yes, like Medium)

[Watch it live.](https://estevanmaito.github.io/sharect)

### Get started with 2 lines

```javascript
<script src="https://unpkg.com/sharect@2.0.0/dist/sharect.js"></script>
<script>Sharect.init()</script>
```

## Table of contents

- [Demo](https://estevanmaito.github.io/sharect)
- [Quick Start](#quick-start)
- [Browser Support](#browser-support)
- [Documentation](#documentation)
- [Usage](#usage)
- [Adding more social icons](#adding-more-social-icons)
- [Upgrade to 2.0](#upgrade)
- [Contributing](#contributing)

## Quick Start

### Install (choose one)

- `npm install sharect`
- [Download from Github](https://github.com/estevanmaito/sharect/releases/download/2.0.0/sharect.js)
- CDN `<script src="https://unpkg.com/sharect@2.0.0/dist/sharect.js"></script>`

### Initialize

```javascript
Sharect.init();
```

## Browser Support

![Internet Explore 9+](/docs/browsers/ie.png)
![Chrome 4+](/docs/browsers/chrome.png)
![Firefox 3.5+](/docs/browsers/firefox.png)
![Safari 5.1+](/docs/browsers/safari.png)
![Opera 10+](/docs/browsers/opera.png)
![Edge 12+](/docs/browsers/edge.png)

## Documentation

The complete API is composed by 3 methods:

- [.config](#config)
- [.appendCustomShareButtons](#appendcustomsharebuttons)
- [.init](#init)

### .config

**Optional**. Configure the core library. Expects an object as argument with any of the following options.

Property | Default | Type | Description
-- | -- | -- | --
`twitter` | `true` | `boolean` | If Twitter should be shown in tooltip
`facebook` | `true` | `boolean` | If Facebook should be shown in tooltip.
`twitterUsername` | `""` | `string` | The username that should be cited when shared. Ex: `estevanmaito`
`backgroundColor` | `#333333` | `string` | The background color of the tooltip. Can be any valid CSS color name
`iconColor` | `#FFFFFF` | `string` | The color of the icons in the tooltip. Can be any valid CSS color name
`selectableElements` | `['body']` | `array` | Define the elements that can be selected, including it's children. **It expects a valid selector string** like `['p', '.article', '#main']`

<details><summary>Example</summary>

```javascript
Sharect.config({
  twitterUsername: 'estevanmaito',
  backgroundColor: '#C53364'
}).init()
```

Result

![result](/docs/simple-pink.png)
</details>

### .appendCustomShareButtons

**⚠️DISCLAIMER⚠️: If you don't plan to share on any social media other than Facebook and Twitter (covered by the `.config` method above) you can safely ignore this method.**

**Optional**. Extends the core social buttons. Expects an array of object(s) as argument containing an `icon` and a `url`.

#### `icon`

`icon` must be a string containing a monochromatic 24x24px SVG.

#### `url`

`url` must be a string containing the sharing URL (a list of options can be found [in this project](https://github.com/bradvin/social-share-urls)). Note that `PAGE_URL` and `TEXT_SELECTION` are required placeholders that will be replaced by the library.

<details><summary>Example</summary>

```javascript
Sharect.appendCustomShareButtons([{
  icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 478.165 478.165"><path d="M478.165 232.946c0 128.567-105.057 232.966-234.679 232.966-41.102 0-79.814-10.599-113.445-28.969L0 478.165l42.437-125.04c-21.438-35.065-33.77-76.207-33.77-120.159C8.667 104.34 113.763 0 243.485 0c129.623 0 234.68 104.34 234.68 232.946zM243.485 37.098c-108.802 0-197.422 87.803-197.422 195.868 0 42.915 13.986 82.603 37.576 114.879l-24.586 72.542 75.849-23.968c31.121 20.481 68.457 32.296 108.583 32.296 108.723 0 197.323-87.843 197.323-195.908 0-107.886-88.6-195.709-197.323-195.709zM361.931 286.62c-1.395-2.331-5.22-3.746-10.898-6.814-5.917-2.849-34.089-16.497-39.508-18.37-5.16-1.913-8.986-2.849-12.811 2.829-4.005 5.638-14.903 18.629-18.23 22.354-3.546 3.785-6.854 4.264-12.552 1.435-5.618-2.809-24.267-8.866-46.203-28.391-17.055-15.042-28.67-33.711-31.997-39.508-3.427-5.758-.398-8.826 2.471-11.635 2.69-2.59 5.778-6.734 8.627-10.041 2.969-3.287 3.905-5.638 5.798-9.424 1.913-3.905.936-7.192-.478-10.141-1.415-2.849-13.01-30.881-17.752-42.337-4.841-11.416-9.543-9.523-12.871-9.523-3.467 0-7.212-.478-11.117-.478-3.785 0-10.041 1.395-15.381 7.192-5.2 5.658-20.123 19.465-20.123 47.597 0 28.052 20.601 55.308 23.55 59.053 2.869 3.785 39.747 63.197 98.303 86.07 58.476 22.872 58.476 15.321 69.115 14.365 10.38-.956 34.069-13.867 38.811-27.096 4.66-13.45 4.66-24.766 3.246-27.137z"/></svg>',
  url: 'https://api.whatsapp.com/send?text=TEXT_SELECTION%20PAGE_URL'
}]).init()
```

Result

![result](/docs/complete.png)
</details>

### .init

**Required**. Initialize the library.

## Usage

### Smallest example

```html
<script src="https://unpkg.com/sharect@2.0.0/dist/sharect.min.js"></script>
<script>
  Sharect.init();
</script>
```

### Complete core API

```html
<script src="https://unpkg.com/sharect@2.0.0/dist/sharect.min.js"></script>
<script>
  Sharect.config({
    facebook: true,
    twitter: true,
    twitterUsername: 'estevanmaito',
    backgroundColor: '#C53364',
    iconColor: '#fff',
    selectableElements: ['p']
  }).init();
</script>
```

## Adding more social icons

You can find a list of social share options [in this project](https://github.com/bradvin/social-share-urls), and below are some common social networks so you can save time or use it as reference.

<details><summary><img src="https://camo.githubusercontent.com/e7e945f0a3889033af612fe079140af72609c199/68747470733a2f2f6564656e742e6769746875622e696f2f537570657254696e7949636f6e732f696d616765732f7376672f77686174736170702e737667" width="24"> Whatsapp</summary>

```javascript
{
  icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 478.165 478.165"><path d="M478.165 232.946c0 128.567-105.057 232.966-234.679 232.966-41.102 0-79.814-10.599-113.445-28.969L0 478.165l42.437-125.04c-21.438-35.065-33.77-76.207-33.77-120.159C8.667 104.34 113.763 0 243.485 0c129.623 0 234.68 104.34 234.68 232.946zM243.485 37.098c-108.802 0-197.422 87.803-197.422 195.868 0 42.915 13.986 82.603 37.576 114.879l-24.586 72.542 75.849-23.968c31.121 20.481 68.457 32.296 108.583 32.296 108.723 0 197.323-87.843 197.323-195.908 0-107.886-88.6-195.709-197.323-195.709zM361.931 286.62c-1.395-2.331-5.22-3.746-10.898-6.814-5.917-2.849-34.089-16.497-39.508-18.37-5.16-1.913-8.986-2.849-12.811 2.829-4.005 5.638-14.903 18.629-18.23 22.354-3.546 3.785-6.854 4.264-12.552 1.435-5.618-2.809-24.267-8.866-46.203-28.391-17.055-15.042-28.67-33.711-31.997-39.508-3.427-5.758-.398-8.826 2.471-11.635 2.69-2.59 5.778-6.734 8.627-10.041 2.969-3.287 3.905-5.638 5.798-9.424 1.913-3.905.936-7.192-.478-10.141-1.415-2.849-13.01-30.881-17.752-42.337-4.841-11.416-9.543-9.523-12.871-9.523-3.467 0-7.212-.478-11.117-.478-3.785 0-10.041 1.395-15.381 7.192-5.2 5.658-20.123 19.465-20.123 47.597 0 28.052 20.601 55.308 23.55 59.053 2.869 3.785 39.747 63.197 98.303 86.07 58.476 22.872 58.476 15.321 69.115 14.365 10.38-.956 34.069-13.867 38.811-27.096 4.66-13.45 4.66-24.766 3.246-27.137z"/></svg>',
  url: 'https://api.whatsapp.com/send?text=TEXT_SELECTION%20PAGE_URL'
}
```
</details>

<details><summary><img src="https://camo.githubusercontent.com/2ed658492cb094825d26b06c1275a7e0414f32e4/68747470733a2f2f6564656e742e6769746875622e696f2f537570657254696e7949636f6e732f696d616765732f7376672f7265646469742e737667" width="24"> Reddit</summary>

```javascript
{
  icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"><path d="M133.333 300c0 18.41 14.924 33.333 33.333 33.333S200 318.41 200 300s-14.924-33.333-33.333-33.333S133.333 281.59 133.333 300zm200 0c0 18.41 14.924 33.333 33.333 33.333S400 318.41 400 300s-14.924-33.333-33.333-33.333S333.333 281.59 333.333 300zm1.621 71.238c8.585-6.763 21.029-5.288 27.796 3.298 6.765 8.587 5.287 21.03-3.3 27.796-23.905 18.832-60.324 31.001-92.783 31.001s-68.879-12.169-92.783-31.001c-8.586-6.766-10.062-19.209-3.298-27.796 6.765-8.584 19.209-10.061 27.794-3.298 13.762 10.843 41.001 22.512 68.287 22.512s54.524-11.669 68.287-22.512zm198.379-137.905c0-36.819-29.849-66.667-66.667-66.667-25.06 0-46.871 13.839-58.256 34.282-34.268-18.747-76.019-30.857-121.501-33.65l39.782-89.336 76.142 21.979c6.852 19.449 25.376 33.393 47.166 33.393 27.614 0 50-22.386 50-50s-22.386-50-50-50c-19.042 0-35.595 10.647-44.038 26.309l-84.848-24.491c-9.49-2.739-19.551 1.938-23.567 10.964l-54.048 121.368c-44.342 3.123-85.032 15.116-118.56 33.456-11.388-20.443-33.211-34.273-58.272-34.273C29.848 166.667 0 196.515 0 233.333c0 27.246 16.355 50.653 39.777 60.991-4.203 12.514-6.444 25.575-6.444 39.009C33.333 425.381 137.8 500 266.667 500 395.532 500 500 425.381 500 333.333c0-13.434-2.239-26.491-6.44-39.003 23.42-10.339 39.773-33.75 39.773-60.997zM450 64.583c10.355 0 18.75 8.395 18.75 18.75s-8.395 18.75-18.75 18.75-18.75-8.395-18.75-18.75 8.394-18.75 18.75-18.75zM33.333 233.333c0-18.38 14.953-33.333 33.333-33.333 13.285 0 24.777 7.814 30.128 19.087-17.42 13.211-31.857 28.449-42.534 45.174-12.252-4.931-20.927-16.932-20.927-30.928zm233.334 227.084c-107.005 0-193.75-56.897-193.75-127.084 0-70.186 86.745-127.083 193.75-127.083s193.75 56.897 193.75 127.083c0 70.187-86.746 127.084-193.75 127.084zm212.406-196.156c-10.677-16.725-25.113-31.964-42.534-45.175C441.89 207.814 453.381 200 466.667 200c18.38 0 33.333 14.953 33.333 33.333 0 13.996-8.675 25.997-20.927 30.928z"/></svg>',
  url: 'https://reddit.com/submit?url=PAGE_URL&title=TEXT_SELECTION'
}
```
</details>

## Upgrade

If you are coming from 1.x, please refer to our [guide on upgrading](/UPGRADING.md).

## Contributing

Please, read the [CONTRIBUTING.md](CONTRIBUTING.md).