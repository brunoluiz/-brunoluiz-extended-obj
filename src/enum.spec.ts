import { Enum } from './index';

describe('Enum', () => {
  const obj = Enum(['FOO', 'BAR']);

  it('should build extended enum and work as enum', () => {
    expect(obj.FOO).toBe(1);
    expect(obj.BAR).toBe(2);
  });

  it('should return key on valid getByValue()', () => {
    expect(obj.getByValue(1)).toBe('FOO');
    expect(obj.getByValue(2)).toBe('BAR');
  });

  it('should return undefined on invalid getByValue()', () => {
    expect(obj.getByValue(3)).toBe(undefined);
  });

  it('should return value on valid get()', () => {
    expect(obj.get('FOO')).toBe(1);
    expect(obj.get('BAR')).toBe(2);
  });

  it('should return key on invalid get()', () => {
    expect(obj.get('X')).toBe(undefined);
  });

  it('should return all values', () => {
    expect(obj.values()).toEqual([1, 2]);
  });

  it('should return all keys', () => {
    expect(obj.keys()).toEqual(['FOO', 'BAR']);
  });

  it('should return all entries', () => {
    expect(obj.entries()).toEqual([['FOO', 1], ['BAR', 2]]);
  });

  it('should return JSON string', () => {
    expect(obj.toJSON()).toEqual(JSON.stringify({ FOO: 1, BAR: 2 }));
  });
});
