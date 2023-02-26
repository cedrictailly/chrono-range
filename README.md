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

You can also handle relative dates:

```javascript

// `before` range example
const range1 = new ChronoRange('before 10 days ago');

// `after` range example with keyword `excluded`
const range2 = new ChronoRange('after 10 minutes ago excluded');

```

ChronoRange also provide methods to check if a file is in the specified range, `checkFile` supporting `async/await` and `checkFileSync` for synchronous calls.

```javascript
const range = new ChronoRange('after Jan 1 2020');

// will return `true`, async version
const newerFile = await range.checkFile('file_1.txt');
// will return `false`, sync version
const olderFile = range.checkFileSync('file_2.txt');
```
