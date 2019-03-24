import { Key, KeyValueMap } from ".";

export const Enum = (arr: Key[]): KeyValueMap => {
  return arr.reduce((acc: KeyValueMap, v: Key, index: number) => {
    return { ...acc, [v]: index + 1 };
  }, {}) as KeyValueMap;
};
