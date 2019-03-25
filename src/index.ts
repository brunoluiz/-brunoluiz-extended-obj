export interface IKeyValue {
  entries(): Entries;
  get(k: Key): Value;
  getByValue(v: Value): Key;
  keys(): Key[];
  toJSON(): string;
  values(): [string | number][];
}

export type Key = string;
export type Value = string | number | undefined;
export type Entries = string[][];

export * from './enum';
export * from './key-value';
