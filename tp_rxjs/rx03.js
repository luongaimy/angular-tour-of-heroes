import {interval, map, take, tap } from "rxjs";

const ob$ = interval(1500).pipe(
    take(2),
    tap(i=> console.log('before ' + i)),
    map(i => i*2),
    tap(i=> console.log('after ' + i)),
);

ob$.subscribe((i) => console.log(`obs1 ${i}`));
ob$.subscribe((i) => console.log(`obs2 ${i}`));

setTimeout(() => {
  ob$.subscribe((i) => console.log(`obs3 ${i}`));
}, 4000);

const a = [1, 2, 3]
// [2, 4, 6]

const b = a.map(i=> i*2)

//console.log(a)
//console.log(b)
