export interface IKeyValue {
  entries(): Entries;
  get(k: Key): Value;
  getByValue(v: Value): Key | undefined;
  keys(): Key[];
  toJSON(): string;
  values(): Value[];
  [k: string]: Value | undefined;
}

export type Key = string;
export type Value = any;
export type Entries = string[][];

export * from './enum';
export * from './key-value';
