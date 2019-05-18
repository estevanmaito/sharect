# Upgrading guide

From 1.x to 2.x

If you're coming from 1.x, there are a couple things that changed and will be presented here in the format OLD vs NEW.

## Initializing

```javascript
// OLD
var sharect = new Sharect()
sharect.init()

// NEW
Sharect.init()
```

## Facebook SDK

There is no need to add the Facebook SDK anymore, neither create an `appId`. Because of this, Facebook sharing option is visible by default. You can change this behaviour (simulating the old one) by setting it to `false`:

```javascript
Sharect.config({
  facebook: false
}).init()
```

## Selectable Elements

You can now choose what elements can be selected and shared. [Read more in .config documention](/README.md#config).

By default, it is `body`, the same behaviour as before.

## Twitter username

You don't need to include the `@` anymore, as we are now using the default Twitter API, which includes it.

```javascript
// OLD
var sharect = new Sharect()
sharect.config({
  twitterUsername: '@estevanmaito'
}).init()

// NEW
Sharect.config({
  twitterUsername: 'estevanmaito'
}).init()
```