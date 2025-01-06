import { Action, createReducer, on } from "@ngrx/store";
import { CounterAction, IncrementAction } from "./counter.action";

// Any things
const initialState = 0;

// export const counterReducer = createReducer(
//     initialState,
//     on(increment, (state, action) => state + action.value
// )
// );

export const INCREMENT = '[Counter] increment';

export function counterReducer(state = initialState, action: CounterAction | Action){
    if(action.type === INCREMENT){
        return state + (action as IncrementAction).value;
    }
    return state;
}