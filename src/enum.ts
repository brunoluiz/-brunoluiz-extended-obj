import { IKeyValueMap, Key } from ".";

export const Enum = (arr: Key[]): IKeyValueMap => {
  return arr.reduce((acc: IKeyValueMap, v: Key, index: number) => {
    return { ...acc, [v]: index + 1 };
  }, {}) as IKeyValueMap;
};
