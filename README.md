# ique

[![ique on Travis](https://img.shields.io/travis/callmecavs/ique.svg?style=flat-square)](https://travis-ci.org/callmecavs/ique) [![ique on NPM](https://img.shields.io/npm/v/ique.svg?style=flat-square)](https://www.npmjs.com/package/ique) [![ique Downloads on NPM](https://img.shields.io/npm/dm/ique.svg?style=flat-square)](https://www.npmjs.com/package/ique) [![Standard JavaScript Style](https://img.shields.io/badge/code_style-standard-brightgreen.svg?style=flat-square)](http://standardjs.com/)

## Install

```sh
$ npm install ique --save
```

## Use

```javascript
import ique from 'ique'

// create a queue, passing a timeout (default shown)
const queue = ique(1000)

// add tasks to it, to be flushed automatically when the browser is idle
for (let i = 0; i < 1000; i++) {
  queue.add({
    func: x => console.log(x),
    args: ['test']
  })
}
```

## Browser Support

Requires [`requestIdleCallback`](https://developer.mozilla.org/en-US/docs/Web/API/Window/requestIdleCallback), and as such supports the following:

* Chrome 47+
* Firefox 55+
* Opera 34+

Consider using this [shim](https://gist.github.com/paullewis/55efe5d6f05434a96c36) in unsupported browsers.

## License

[MIT](https://opensource.org/licenses/MIT). © 2018 Michael Cavalea
