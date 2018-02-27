import {Functor} from './functor';
import {Monad} from "./monads/monad";
import {MaybeMonad} from "./monads/maybe-monad";
import {UtilityFunctions} from "./utils/utility-functions";

const f = (x) => x * 2;
const g = (x) => x / 2;
const h = (x) => Math.pow(x, 4);
const length = (x) => x.length;

console.log('pipe outputs', UtilityFunctions.pipe(2, [f, h, g]));
console.log('functor maps to', new Functor(2).fmap(f));
console.log('functor null', new Functor(null).fmap(f));
console.log('monad maps to', new Monad<string>('hello').fmap(length));
console.log('maybe maps to',
    new MaybeMonad<number>(-1).fmap(g).fmap(g)
);
console.log('monad wont map to', new MaybeMonad(null).fmap(f));
