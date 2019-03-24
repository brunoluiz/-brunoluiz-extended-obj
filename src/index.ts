type Key = string | number;
type Value = any;

interface KeyValueMap {
  [k: string]: Value;
}

interface IExtendedObject {
  getByValue(v: Value): Key;
  get(k: Key): Value;
  values(): Value[];
  keys(): Key[];
  [k: string]: Value;
}

export const ExtendedObject = (obj: any): IExtendedObject => {
  const getByValue = (v: Value) => Object.keys(obj).find(key => obj[key] === v);

  const get = (k: Key) => (obj[k] ? obj[k] : k);

  const values = () => Object.values(obj);

  const keys = () => Object.keys(obj);

  const entries = () => Object.entries(obj);

  return {
    ...obj,
    getByValue,
    get,
    values,
    keys,
    entries
  };
};

export const ExtendedEnum = (arr: Key[]): IExtendedObject => {
  const obj = arr.reduce((acc: KeyValueMap, v: Key, index: number) => {
    return { ...acc, [v]: index };
  }, {});

  return ExtendedObject(obj);
};
