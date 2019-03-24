export interface IExtendedObject {
  get(k: Key): Value;
  getByValue(v: Value): Key | undefined;
  values(): Value[];
  keys(): Key[];
  entries(): Entries;
  [k: string]: Value;
}

export type Key = string;
export type Value = any;
export interface IKeyValueMap {
  [k: string]: Value | undefined;
}
export type Entries = string[][];

export * from './enum';
export * from './extended-enum';
export * from './extended-object';
