export class Functor {
	private _value;
	
	constructor(value: any){
		this._value = value;
	}

	public map(fn: Function){
		return new Functor(fn(this._value));
	}
}
