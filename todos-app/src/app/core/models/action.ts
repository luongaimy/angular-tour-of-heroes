import { Actions } from "../enums/actions";

export interface Action {
    type: Actions,
    payload?: any
}
