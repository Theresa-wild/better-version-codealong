// this is fun!!! 


// Das ist lustig

// la le lu

import {
  compareAsc,
  format,
} from 'date-fns';
// Today is a good day
import { createRequire } from 'module';

const require = createRequire(import.meta.url);



format(new Date(2014, 1, 11), 'yyyy-MM-dd')
//=> '2014-02-11'

const dates = [
  new Date(1994, 1, 2),
  new Date(1990, 10, 17),
  new Date(1989, 7, 10),
]
dates.sort(compareAsc)
//=> [
//   Wed Jan 2 1994 00:00:00,
//   Mon Oct 17 1990 00:00:00,
//   Sun Jul node 1989 00:00:00
// ]

console.log('These are the dates:', dates);
