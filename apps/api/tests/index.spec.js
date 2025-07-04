const { addService } = require("../services/addService");

describe("add", () => {
  it("should return the sum of two numbers", () => {
    expect(addService().add(1, 2)).toBe(3);
  });
});
