import {Functor} from "../functor";

export class Monad<T> extends Functor<T> {
	public fmap<Function>(fn: (value: T) => any): Monad<any> {
		return new Monad(fn(this._value));
	}
}
