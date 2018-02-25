export const pipe = (x: any, fns: Function[]) => fns.reduce((acc, fn) => fn(acc), x);
