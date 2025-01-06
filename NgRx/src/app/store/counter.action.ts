import { createAction, props } from "@ngrx/store";
import { Action } from "rxjs/internal/scheduler/Action";

// export const increment = createAction(
//     '[Counter] increment',
//     props<{value: number}>()
// )


export class IncrementAction {
    readonly type = '[Counter] increment';
    constructor(public value: number){
        
    }
}

export type CounterAction = IncrementAction;