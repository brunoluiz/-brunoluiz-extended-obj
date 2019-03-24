import { ExtendedEnum } from "./index";

describe("extended-enum", () => {
  it("should build extended enum and work as enum", () => {
    const obj = ExtendedEnum(["FOO", "BAR"]);
    expect(obj.FOO).toBe(0);
    expect(obj.BAR).toBe(1);
  });
});
