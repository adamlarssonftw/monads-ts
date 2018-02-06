import {pipe} from './pipe';

const f = (x) => x * 2;
const g = (x) => x / 2;
const h = (x) => Math.pow(x, 4);

console.log('pipe outputs', pipe(2, [f, h, g]));
