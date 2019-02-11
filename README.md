# [Tite API](https://github.com/alipiry/tite-api)
Get time & date together with Tite API.
> Note: I've develop this API to make my [tite-cli](https://github.com/alipiry/tite-cli) work, so it is not a complete API.

## Installation
```bash
  > yarn add @alipiry/tite-api
```

## Usage
`TypeScript`:
```typescript
import * as tite from '@alipiry/tite-api';

// get time
console.log(tite.nowTime: string);
// get jalali date
console.log(tite.jalaliDate: string);
// get gregorian date
console.log(tite.gregorianDate: string);
// get jalali & gregorian year
console.log(tite.getYear(): string);
// get jalali & gregorian month
console.log(tite.getMonth(): string);
// get jalali & gregorian day
console.log(tite.getDay(): string);
// get jalali & gregorian week day
console.log(tite.getWeekDay(): string);
```

## Author
[Ali Piry](https://github.com/alipiry)

## LICENCE
MIT