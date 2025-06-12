import {interval, map, take, tap, switchMap, merge } from "rxjs";

const source01$ = interval(1000).pipe((map(d => `source01 ${d}`)))

const source02$ = interval(500).pipe((map(d => `source02 ${d}`)) )

const m$ = merge(source01$, source02$)

m$.subscribe(d => console.log(d))
