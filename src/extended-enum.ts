import { Enum, ExtendedObject, IExtendedObject, Key } from '.';

export const ExtendedEnum = (arr: Key[]): IExtendedObject =>
  ExtendedObject(Enum(arr)) as IExtendedObject;
