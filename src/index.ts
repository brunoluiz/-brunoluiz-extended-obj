export interface IExtendedObject {
  getByValue(v: Value): Key | undefined;
  get(k: Key): Value;
  values(): Value[];
  keys(): Key[];
  entries(): Entries;
  [k: string]: Value;
}

export type Key = string;
export type Value = any;
export type KeyValueMap = { [k: string]: Value | undefined };
export type Entries = string[][];

export * from "./enum";
export * from "./extended-enum";
export * from "./extended-object";
