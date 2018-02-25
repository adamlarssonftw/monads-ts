import {pipe} from './utils/pipe';
import {Functor} from './functor';

const f = (x) => x * 2;
const g = (x) => x / 2;
const h = (x) => Math.pow(x, 4);

console.log('pipe outputs', pipe(2, [f, h, g]));
console.log('functor maps to', new Functor(2).fmap(f));
