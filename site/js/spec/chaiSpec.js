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
	before(function() {
		//user.score = 0;
		user.currentLocation = "Your Closed Guard";
		scoreCalculator.onChangePosition(9992, user);
	});
	it("expect that player is awarded 2 points for a sweep", function() {
		expect(user).to.exist;
		expect(user.score).to.exist;
		expect(scoreCalculator.onChangePosition).to.exist;
		expect(scoreCalculator.onChangePosition).to.be.a('function');
		expect(user.currentPointsWon).to.exist;
		
		//for backbone
		//this.model.get('complete').should.be.false;
		//this.user.get('score').should.be.false;
		
		user.currentLocation = "Your Closed Guard";
		//expect(scoreCalculator.onChangePosition(9992, user)).to.a('function');
		
		expect(user.currentPointsWon).to.equal(6);
	
	});
	after(function() {
		user.currentPointsWon = 0;
	});
});

describe('will the player be awarded 2 points for a sweep FROM HALF GUARD', function() {
	before(function() {
		//user.score = 0;
		//set the location to half-guard
		user.currentLocation = "Your Half Guard";
		
		scoreCalculator.onChangePosition(9992, user);
	});
	it("expect that player is awarded 2 points for a sweep", function() {
		expect(user).to.exist;
		expect(user.score).to.exist;
		expect(scoreCalculator.onChangePosition).to.exist;
		expect(scoreCalculator.onChangePosition).to.be.a('function');
		expect(user.currentPointsWon).to.exist;
		
		//for backbone
		//this.model.get('complete').should.be.false;
		//this.user.get('score').should.be.false;
		

		expect(user.currentPointsWon).to.equal(6);
	
	});
	after(function() {
		user.currentPointsWon = 0;
	});
});

describe('sinon tests', function() {
	beforeEach(function() {
		user.currentLocation = "Your Half Guard";
		
		//// Spy on the `onChangePosition` method of the `scoreCalculator` object
		sinon.spy(scoreCalculator, 'onChangePosition');
		sinon.spy(scoreCalculator, 'fx');
		
		//var testSpy = sinon.spy();
		
	});
	it("was onChangePosition called?", function() {
		
		scoreCalculator.onChangePosition(9992, user);
		
		expect(scoreCalculator.onChangePosition.calledOnce).to.be.true;
	
	});
	it("was fx called?", function() {
		
		scoreCalculator.onChangePosition(9992, user);	
		expect(scoreCalculator.fx.calledOnce).to.be.true;
	
	});
	it("testSpy function should be called", function() {
		
		scoreCalculator.testSpy(1, 'foo');
		
		expect(scoreCalculator.testSpy.called).to.be.true;
		expect(scoreCalculator.testSpy.calledOnce).to.be.true;
		
		//check argument types
		
		expect(scoreCalculator.testSpy.firstCall.calledWith(sinon.match.number, sinon.match.string)).to.be.true;
		
		//check arguments
		expect(scoreCalculator.testSpy.firstCall.calledWith(1, 'foo')).to.be.true;
	
	});
	it("testSpy function should be called with different values", function() {
		
		scoreCalculator.testSpy(2, 'bar');
		
		expect(scoreCalculator.testSpy.called).to.be.true;
		//expect(scoreCalculator.testSpy.calledOnce).to.be.true;
		
		//check argument types
		
		//expect(scoreCalculator.testSpy.firstCall.calledWith(sinon.match.number, sinon.match.string)).to.be.true;
		
		//check arguments
		expect(scoreCalculator.testSpy.calledWith(2, 'bar')).to.be.true;
	
	});
	
	afterEach(function() {
		user.currentPointsWon = 0;
		// Unwrap `scoreCalculator.onChangePosition` so other tests will be unaffected and can get up their own spies
		scoreCalculator.onChangePosition.restore();
		scoreCalculator.fx.restore();
		//scoreCalculator.testSpy.restore();
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