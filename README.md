# ChronoRange

ChronoRange is a node.js module for parsing and validating date ranges in a [chrono](https://github.com/wanasit/chrono) compatible format.

It allows you to easily check if a given date is in the range, and also supports file and filesystem operations.

## Usage

To create a new range, use the `ChronoRange` class:

```js
const chronoRange = require('chronoRange');
const range = new chronoRange('between 2019-06-01 and 2019-06-30');
```

To check if a date is in the range, use the `check` method:

```js
const date = new Date('2019-06-15');
console.log(range.check(date)); // true
```

To check if a file is in the range, use the `checkFile` method:

```js
const filePath = './somefile.txt';
console.log(range.checkFile(filePath));
```

## License

ChronoRange is released under the MIT License.
