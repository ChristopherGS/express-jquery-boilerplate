describe("chai", function () {
  it("asserts", function () {
    expect(["one", "two"]).to.contain("two");
    expect({foo: {bar: 12}})
      .to.have.deep.property("foo.bar", 12);
  });
});



describe("fail", function () {
  it("fails", function () {
    expect("one").to.equal("two");
  });
});
