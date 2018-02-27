export class Functor<T> {
	protected _value;
	
	constructor(value: T) {
		this._value = value;
	}

    public fmap<Function>(fn: (value: T) => any): Functor<any> {
        return new Functor(fn(this._value));
	}
}
