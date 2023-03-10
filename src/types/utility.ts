import { WithRequiredProp } from '@reduxjs/toolkit/dist/query/tsHelpers';

export function has<T, K extends keyof T>(
    obj: T | WithRequiredProp<T, K>,
    prop: K,
): obj is WithRequiredProp<T, K> {
    return obj[prop] != null;
}
