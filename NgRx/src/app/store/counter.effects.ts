import { Actions, createEffect, ofType } from "@ngrx/effects";
import { Action, Store } from "@ngrx/store";
import { decrement, increment } from "./counter.action";
import { tap, withLatestFrom } from "rxjs";
import { Injectable } from "@angular/core";
import { selectCount } from "./count.selector";

@Injectable()
export class CounterEffects {
    saveCount = createEffect(
        () => this.action$.pipe(
            ofType(increment, decrement),
            withLatestFrom(this.store.select(selectCount)),
            tap(([action, counter]) => {
                console.log(action);
                localStorage.setItem('count', action.value.toString());
            })
        ),
        {dispatch: false}
    )

    constructor(private action$: Actions, private store: Store<{counter: number}>){}
}

