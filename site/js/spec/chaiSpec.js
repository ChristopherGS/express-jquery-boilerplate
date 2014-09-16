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


describe('should test', function() {

	it("counts", function() {
		
		foo.should.exist;

	});
});

describe('belt check', function() {

	it("if user wins are equal to or greater than 1, then they should be a blue belt", function() {
		expect(user).to.have.property('belt');
		expect(user).to.have.property('wins');
		expect(user.wins).to.be.above(0);
	});
		
});

describe('purple belt', function() {

	it("expect that purple belts have 25 wins, 10 sweeps, and 5 losses", function() {
		expect(user).to.have.property('belt');
		expect(user).to.have.property('wins');
		expect(user.wins).to.be.above(24);
		expect(user.sweeps).to.be.above(9);
		expect(user.losses).to.be.above(4);
	});
});

describe('will the user object respond to the check function', function() {
	it("expect that user responds to the check function", function() {
		expect(user).to.respondTo('check');
	});
});

describe('will the user object respond to the check function on itself', function() {
	it("expect that user responds to the check function", function() {
		expect(user).itself.to.respondTo('check');
	});
});

//score checks

describe('will the player be awarded 2 points for a sweep', function() {
	it("expect that player is awarded 2 points for a sweep", function() {
		expect(user).to.exist;
		expect(user.score).to.exist;
		expect(scoreCalculator.onChangePosition).to.exist;
		
		//for backbone
		//this.model.get('complete').should.be.false;
		//this.user.get('score').should.be.false;
		
		user.currentLocation = "Your Closed Guard";
		var oldScore = user.score;
		
		expect(scoreCalculator.onChangePosition(9992)).to
		
		expect(user.score).to.equal(oldScore + 2);
	});
});

//FOR BACKBONE - http://www.sitepoint.com/unit-testing-backbone-js-applications/
/*
describe("Persistence", function() {
  beforeEach(function() {
    this.todo = new todoApp.Todo();
    this.save_stub = sinon.stub(this.todo, "save");
  })
  afterEach(function() {
    this.save_stub.restore();
  })
  it("should update server when title is changed", function() {
    this.todo.set("title", "New Summary");
    this.save_stub.should.have.been.calledOnce;
  })
  it("should update server when status is changed", function() {
    this.todo.set('complete',true);
    this.save_stub.should.have.been.calledOnce;
  })
})
*/












//use chai as promised to check saves to DB http://chaijs.com/plugins/chai-as-promised