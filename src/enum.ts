import { IKeyValue, KeyValueObject, Key } from '.';

export const Enum = (arr: Key[]): IKeyValue => {
  const toObject = (arr: Key[]): any =>
    arr.reduce((acc, v, index) => ({ ...acc, [v]: index + 1 }), {});

  return KeyValueObject(toObject(arr));
};
