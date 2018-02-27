import {Monad} from "./monad";
import {Nothing} from "./nothing";
import {UtilityFunctions} from "../utils/utility-functions";

export class MaybeMonad<T> extends Monad<T> {
    public fmap<Function>(fn: (value: T) => any): any {
        const newVal = this._value ? fn(this._value) : this._value;
        return UtilityFunctions.isNonNull(newVal) ? new MaybeMonad(newVal) : new Nothing();
    }
}

