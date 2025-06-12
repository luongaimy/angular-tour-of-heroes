import {interval, take } from "rxjs";

const ob$ = interval(1500);

ob$.subscribe((i) => console.log(`obs1 ${i}`));
ob$.subscribe((i) => console.log(`obs2 ${i}`));

