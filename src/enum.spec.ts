import { Enum } from "./index";

describe("enum", () => {
  it("should build enum and work as enum", () => {
    const obj = Enum(["FOO", "BAR"]);
    expect(obj.FOO).toBe(1);
    expect(obj.BAR).toBe(2);
  });
});
