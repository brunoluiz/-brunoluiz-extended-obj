import { Entries, IExtendedObject, Key, Value } from '.';

export const ExtendedObject = (obj: any): IExtendedObject => {
  const getByValue = (v: Value): Key | undefined => Object.keys(obj).find(key => obj[key] === v);

  const get = (k: Key): Value => obj[k];

  const values = (): Value[] => Object.values(obj);

  const keys = (): Key[] => Object.keys(obj);

  const entries = (): Entries => Object.entries(obj);

  const toJSON = (): string => JSON.stringify(obj);

  return {
    ...obj,
    entries,
    get,
    getByValue,
    keys,
    toJSON,
    values,
  } as IExtendedObject;
};
