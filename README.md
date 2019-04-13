<p align="center">
  <a href="https://estevanmaito.github.io/sharect"><img alt="Sharect" src="./docs/sharect.gif"></a>
</p>

<p align="center">
  <a href="https://www.npmjs.com/package/sharect"><img src="https://img.shields.io/npm/v/sharect.svg?style=flat-square"></a>
  <a href="https://github.com/estevanmaito/sharect/releases/download/v1.1.0/sharect.min.js"><img src="https://img.shields.io/github/downloads/estevanmaito/sharect/total.svg?style=flat-square"></a>
  <a href="https://github.com/estevanmaito/sharect"><img src="https://img.shields.io/npm/l/sharect.svg?style=flat-square"></a>
</p>

A **lightweight** (4kb, 1.7kb gziped) JavaScript library to let users share their text selections to social networks, in desktop browsers. (Yes, like Medium)

[Watch it live.](https://estevanmaito.github.io/sharect)

## Packages

| Package | Version | Description |
|---------|---------|-------------|
|sharect|<a href="https://www.npmjs.com/package/sharect"><img src="https://img.shields.io/npm/v/sharect.svg?style=flat-square"></a>|No dependencies, plug-n-play|
|sharect-react|Soon|React.js plugin|

## Usage

### NPM

```
npm install sharect
```

### Script

[Download](https://github.com/estevanmaito/sharect/releases/download/v1.1.0/sharect.min.js)

Add the script to the project and initialize

```html
<script src="sharect.min.js"></script>
<script>
  var sharect = new Sharect();
  sharect.init();
</script>
```

More use cases below.

## Docs

### API settings

#### `.config(object)` optional

Configure the core library. Expects an object as argument with any of the following options.

Property | Default | Type | Description
-- | -- | -- | --
`twitter` | `true` | `boolean` | If Twitter should be shown in tooltip
`facebook` | `true` | `boolean` | If Facebook should be shown in tooltip.
`twitterUsername` | `""` | `string` | The username that should be cited when shared. Ex: `estevanmaito`
`backgroundColor` | `#333333` | `string` | The background color of the tooltip. Can be any valid CSS color name
`iconColor` | `#FFFFFF` | `string` | The color of the icons in the tooltip. Can be any valid CSS color name
`selectableElements` | `['body']` | `array` | Define the elements that can be selected, including it's children. **It expects a valid selector string** like `['p', '.article', '#main']`

#### `.appendCustomShareButton(array)` optional

**DISCLAIMER: If you don't plan to share on any social media other than Facebook and Twitter (covered by the `.config` method above) you can safely ignore this method.**

Extends the core social buttons. Expects an array of object(s) as argument containing an `icon` and a `url`.

##### `icon`

`icon` must be a string containing a monochromatic 24x24px SVG.

Example: 

```javascript
icon: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" enable-background="new 0 0 24 24" width="24" height="24"><path d="M20,2H4C2.9,2,2,2.9,2,4v16c0,1.1,0.9,2,2,2h16c1.1,0,2-0.9,2-2V4C22,2.9,21.1,2,20,2z M18.4,7.4H17c-0.9,0-1,0.3-1,1l0,1.3 h2.1L18,12h-1.9v7h-3.2v-7h-1.2V9.6h1.2V8.1c0-2,0.8-3.1,3.1-3.1h2.4V7.4z"/></svg>'
```

##### `url`

`url` must be a string containing the sharing URL (a list of options can be found [in this project](https://github.com/bradvin/social-share-urls)). Note that `PAGE_URL` and `TEXT_SELECTION` are required placeholders that will be replaced by the library. These are the only options available for now.

Example:

```javascript
url: 'https://reddit.com/submit?url=PAGE_URL&title=TEXT_SELECTION'
```

The complete example of `appendCustomShareButton` would look like this:

```javascript
appendCustomShareButton([{
  icon: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" enable-background="new 0 0 24 24" width="24" height="24"><path d="M20,2H4C2.9,2,2,2.9,2,4v16c0,1.1,0.9,2,2,2h16c1.1,0,2-0.9,2-2V4C22,2.9,21.1,2,20,2z M18.4,7.4H17c-0.9,0-1,0.3-1,1l0,1.3 h2.1L18,12h-1.9v7h-3.2v-7h-1.2V9.6h1.2V8.1c0-2,0.8-3.1,3.1-3.1h2.4V7.4z"/></svg>',
  url: 'https://reddit.com/submit?url=PAGE_URL&title=TEXT_SELECTION'
}])
```

#### `.init()`

Initialize the library. The only required method to be called.

### Minimum example

```html
  ...
  <script src="sharect.min.js"></script>
  <script>
    var sharect = new Sharect();
    sharect.init();
  </script>
</body>
```

Result

![Default](./docs/default.png)

### Complete core API

Assuming you already added the above Facebook SDK script.

```html
  ...
  <script src="sharect.min.js"></script>
  <script>
    var sharect = new Sharect();
    sharect.config({
      facebook: true,
      twitter: true,
      twitterUsername: '@estevanmaito',
      backgroundColor: '#ff4081',
      iconColor: '#fff',
      selectableElements: ['p', '.header', 'blockquote']
    }).init();
  </script>
</body>
```

Note that ```twitter``` and `facebook` are ```true``` by default, as ```iconColor``` is ```#ffffff```. This example just exposes the available API.

Result

![Complete](./docs/custom.png)

### Complete API with extended share buttons

TODO: Improve the SVG icons from the example below

```html
...
<script src="sharect.min.js"></script>
<script>
  var sharect = new Sharect();
    sharect.config({
      facebook: true,
      twitter: true,
      twitterUsername: '@estevanmaito',
      backgroundColor: '#9bab2f',
      iconColor: '#fff'
    })
    // append Reddit share button
    .appendCustomShareButton({
      icon: `<svg enable-background="new 0 0 512 512" height="24px" class="sharect__icon" version="1.1" viewBox="0 0 512 512" width="24px" xml:space="preserve" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><g><path clip-rule="evenodd" d="M175.958,256.004c17.686,0,32.192,14.503,32.192,32.176   c0,17.672-14.506,31.724-32.192,31.724c-17.693,0-31.747-14.052-31.747-31.724C144.211,270.507,158.265,256.004,175.958,256.004   L175.958,256.004z M336.034,256.004c-17.686,0-31.746,14.503-31.746,32.176c0,17.672,14.061,31.724,31.746,31.724   c17.687,0,32.2-14.052,32.2-31.724C368.234,270.507,353.721,256.004,336.034,256.004L336.034,256.004z" /><path d="M166.428,371.109c-7.249-5.448-8.163-15.408-2.719-22.215c4.992-7.245,15.421-8.15,22.225-2.717   c18.139,14.05,47.159,21.762,70.297,21.762c22.67,0,51.698-7.712,70.29-21.762c6.796-5.434,16.779-4.528,22.216,2.717   c5.438,6.807,4.078,16.767-2.719,22.215c-23.591,18.578-60.321,29.007-89.787,29.007   C226.296,400.116,190.011,389.688,166.428,371.109L166.428,371.109z M401.34,196.187c-35.371-20.389-79.819-33.081-128.799-35.797   l25.857-76.584l69.836,20.389c0,30.818,24.95,55.742,55.775,55.742c30.84,0,56.244-24.924,56.244-55.742   C480.254,72.924,454.85,48,424.01,48c-19.498,0-36.73,10.429-46.698,25.377l-84.804-24.464c-8.171-2.724-16.779,1.811-19.514,9.968   L238.99,160.389c-48.526,2.716-92.967,15.409-128.338,35.797c-11.342-12.231-28.114-19.936-46.714-19.936   C28.567,176.251,0,204.796,0,240.142c0,24.011,13.601,44.869,33.106,55.734c-0.906,5.449-1.359,10.882-1.359,16.315   C31.747,396.025,132.416,464,256.23,464c123.347,0,224.023-67.975,224.023-151.809c0-5.434-0.453-10.866-1.359-16.315   C498.846,285.011,512,264.153,512,240.142c0-35.346-28.575-63.891-63.946-63.891C429.462,176.251,413.136,183.956,401.34,196.187   L401.34,196.187z M256.23,192.105c105.661,0,191.823,53.478,191.823,120.086c0,66.162-86.162,119.633-191.823,119.633   c-106.129,0-192.292-53.471-192.292-119.633C63.938,245.583,150.102,192.105,256.23,192.105L256.23,192.105z M468.911,264.153   c-9.062-18.118-22.67-34.885-40.355-49.389c5.438-4.074,12.233-6.798,19.498-6.798c17.686,0,31.747,14.503,31.747,32.176   C479.801,249.658,475.707,258.268,468.911,264.153L468.911,264.153z M83.444,214.765c-17.686,14.504-31.293,31.271-40.363,49.389   c-6.804-5.886-10.881-14.496-10.881-24.011c0-17.672,14.506-32.176,31.738-32.176C71.649,207.966,78.453,210.69,83.444,214.765   L83.444,214.765z M424.01,128.213c-13.14,0-24.029-10.874-24.029-24.019c0-13.598,10.89-24.019,24.029-24.019   c13.154,0,24.044,10.421,24.044,24.019C448.054,117.34,437.164,128.213,424.01,128.213L424.01,128.213z"/></g></svg>`,
      url: `https://reddit.com/submit?url=PAGE_URL&title=TEXT_SELECTION`
    })
    // append Hacker News share button
    .appendCustomShareButton({
      icon: `<svg version="1.1" class="sharect__icon" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="24px" height="24px" viewBox="0 0 430.117 430.118" style="enable-background:new 0 0 430.117 430.118;" xml:space="preserve"><g><path d="M0,0v430.118h430.117V0H0z M234.175,248.167v105.485h-38.232V248.167L101.985,62.128h44.265 l68.713,140.07l71.446-140.07h41.499L234.175,248.167z"/></g></svg>`,
      url: `https://news.ycombinator.com/submitlink?u=PAGE_URL&t=TEXT_SELECTION`
    })
    .init();
</script>
</body>
```

## Contributing

Please, read the [CONTRIBUTING.md](CONTRIBUTING.md).