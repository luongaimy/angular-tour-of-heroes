import {interval, map, take, tap, switchMap } from "rxjs";

const source$ = interval(1000)

const result$ = source$.pipe(
    take(5),
    tap(i=> console.log(`iteration ${i}`)),
    switchMap(()=>{
        const other$ = interval(200).pipe(take(4))
        return other$
    }),

)

result$.subscribe(
    x=> console.log(`subscribe ${x}`)
)