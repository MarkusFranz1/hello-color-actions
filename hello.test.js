const hello = require("./hello");
describe("My hello", () => {
  test("works", () => {
    expect(hello.hello()).toEqual("Hello World from Germany");
  });
});
Update: Changed Hello World from the Office Hours in the terminal! message to 'Hello World from Germany'
