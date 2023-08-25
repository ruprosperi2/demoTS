import {addition} from "../../src/helpers/helper";

describe("testing addition", function () {
  it("should return 6", function () {
    expect(addition(3,3)).toBe(6);
  });
});