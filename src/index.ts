export interface IExtendedObject {
  getByValue(v: Value): Key | undefined;
  get(k: Key): Value;
  values(): Value[];
  keys(): Key[];
  entries(): Entries;
  [k: string]: Value;
}

type Key = string;
type Value = any;
type KeyValueMap = { [k: string]: Value | undefined };
type Entries = string[][];

export const ExtendedObject = (obj: any): IExtendedObject => {
  const getByValue = (v: Value): Key | undefined =>
    Object.keys(obj).find(key => obj[key] === v);

  const get = (k: Key): Value => obj[k];

  const values = (): Value[] => Object.values(obj);

  const keys = (): Key[] => Object.keys(obj);

  const entries = (): Entries => Object.entries(obj);

  return {
    ...obj,
    getByValue,
    get,
    values,
    keys,
    entries
  };
};

export const Enum = (arr: Key[]): KeyValueMap => {
  return arr.reduce((acc: KeyValueMap, v: Key, index: number) => {
    return { ...acc, [v]: index + 1 };
  }, {});
};

export const ExtendedEnum = (arr: Key[]): IExtendedObject =>
  ExtendedObject(Enum(arr)) as IExtendedObject;
