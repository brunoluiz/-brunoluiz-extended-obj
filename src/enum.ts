import { IKeyValue, Key, KeyValue } from '.';

export const Enum = (keys: Key[]): IKeyValue => {
  const map = keys.reduce((acc, v, index) => ({ ...acc, [v]: index + 1 }), {});

  return KeyValue(map);
};
