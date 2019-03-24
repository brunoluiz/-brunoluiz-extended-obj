export interface IExtendedObject {
  entries(): Entries;
  get(k: Key): Value;
  getByValue(v: Value): Key | undefined;
  keys(): Key[];
  toJSON(): string;
  values(): Value[];
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
