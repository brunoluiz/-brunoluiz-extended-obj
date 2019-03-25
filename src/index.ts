export interface IKeyValue {
  entries(): Entries;
  get(k: Key): Value;
  getByValue(v: Value): Key | undefined;
  keys(): Key[];
  toJSON(): string;
  values(): Value[];
}

export type Key = string;
export type Value = string | number | undefined;
export type Entries = Value[][];

export * from './enum';
export * from './key-value';
