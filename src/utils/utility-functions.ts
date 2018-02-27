export class UtilityFunctions {
    public static isNonNull = (val: any): boolean => typeof val !== 'undefined' && val !== null;
    public static pipe = (x: any, fns: Function[]) => fns.reduce((acc, fn) => fn(acc), x);
}
