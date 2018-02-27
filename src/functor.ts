export class Functor {
	private _value;
	
	constructor(value: any) {
		this._value = value;
	}

	public fmap(fn): Functor<T> {
        return new Functor(fn(this._value));
	}
}
