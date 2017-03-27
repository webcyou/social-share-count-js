# Social Share Count js
Get the social share counts from JavaScript Library

## Demo Page
[Demo](https://webcyou.github.io/social-share-count-js/)

## Table of contents

* [Quick start](#quick-start)
* [What's included](#What's-included)
* [Usage](#Usage)
* [API](#api)
* [Option](#Option)
* [Develop](#Develop)
* [Copyright and license](#copyright-and-license)

## Quick start

**Clone the repo:**
```
git clone git@github.com:webcyou/social-share-count-js.git
```

**Install with [Bower](http://bower.io):**
```
bower install social-share-count-js
```

**Install with [npm](https://www.npmjs.com):**
```
npm install social-share-count-js
```
### What's included

```
dist/
  ├── social-share-count.js
  └── social-share-count.min.js
```

### Usage

```html
<script src="./social-share-count.min.js"></script>
```

Example

```html
<p data-sc-fb="URL"></p>
```


## API
In order to avoid cross domain constraint, JSONP communication is carried out.

**Use API EndPoint**

**Facebook**
```
https://graph.facebook.com/
```

**Twitter**
```
https://jsoon.digitiminimi.com/twitter/count.json
```
Use [count.jsoon](https://jsoon.digitiminimi.com/)service.

Registration of count.jsoon service is mandatory.


**Google+**
```
https://count.donreach.com/
```
Use [donreach](https://count.donreach.com/)service.


Set Google API KEY (POST)
```
https://clients6.google.com/rpc
```
```
Deprecated as the keys are exposed.
```

**Pocket**

```
https://query.yahooapis.com/v1/public/yql
```
Use yahooapis service.

**Pinterest**

```
http://api.pinterest.com/v1/urls/count.json
```

**Linkedin**

```
http://www.linkedin.com/countserv/count/share
```

**Hatena BookMark**
```
http://api.b.st-hatena.com/entry.count
```


### DOM Binding Type

**Facebook**

```html
<p data-sc-fb="URL"></p>
```

**Twitter**

```html
<p data-sc-tw="URL"></p>
```

**Google+**

```html
<p data-sc-gp="URL"></p>
```

**Pocket**

```html
<p data-sc-pk="URL"></p>
```

**Pinterest**

```html
<p data-sc-pr="URL"></p>
```

**Linkedin**

```html
<p data-sc-ln="URL"></p>
```

**Hatena BookMark**

```html
<p data-sc-hb="URL"></p>
```

## Develop

```
npm run start
```
Browser starts using browser-sync.

Open http://localhost:3000 in your browser.

## Option



## Copyright and license

#### License: MIT
#### Daisuke Takayama

## Creators

**Daisuke Takayama**
* [@webcyou](https://twitter.com/webcyou)
* [@panicdragon](https://twitter.com/panicdragon)
* <https://github.com/webcyou>
* <https://github.com/panicdragon>
* <http://www.webcyou.com/>
