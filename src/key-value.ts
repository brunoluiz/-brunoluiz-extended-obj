import { Entries, IKeyValue, Key, Value } from '.';

export const KeyValue = (obj: { [k: string]: Value }): IKeyValue => {
  const kv: IKeyValue = {
    ...obj,
    entries: (): Entries => Object.entries(obj),
    get: (k: Key): Value => obj[k],
    getByValue: (v: Value): Key | undefined => Object.keys(obj).find(key => obj[key] === v),
    keys: (): Key[] => Object.keys(obj),
    toJSON: (): string => JSON.stringify(obj),
    values: (): Value[] => Object.values(obj),
  };

  return kv;
};
