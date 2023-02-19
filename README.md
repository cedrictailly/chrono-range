# ChronoRange
ChronoRange is a simple library to parse and validate date ranges.

## Installation
 ChornoRange can be installed using npm

```
npm install chrono-range
```

## Usage
ChronoRange can be used to validate a date in a predefined range with the `check` method.

```javascript
const ChronoRange = require('chrono-range');

const range = new ChronoRange('between Jan 1 2001 and Dec 31 2011 excluded');

// will return `true`
const beforeFirst = range.check(new Date('2001-01-01'));
// will return `false`
const firstDay = range.check(new Date('2011-12-31'));
```

ChronoRange also provide methods to check if a file is in the specified range, `checkFile` supporting `async/await` and `checkFileSync` for synchronous calls.

```javascript
const ChronoRange = require('chrono-range');

const range = new ChronoRange('after Jan 1 2020');

// will return `true`
const newerFile = range.checkFile('file_1.txt');
// will return `false`
const olderFile = range.checkFile('file_2.txt');
```
