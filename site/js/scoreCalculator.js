  var scoreCalculator = {};
  var user = {
		wins: 25,
		belt: "WhiteBelt",
		losses: 5, 
		belt: "WhiteBelt", 
		sweeps: 11,
		score: 0,
		totalPointsWon: 1,
		totalPointsConceded: 1,
		totalTDScored: 1,
		totalTDConceded: 1,
		takeDownsScored: 1,
		takeDownsConceded: 1,
		totalSweepsScored: 1,
		totalSweepsConceded: 1,
		totalSweepsFromHalfGuard: 1,
		totalPassesScored: 1,
		totalPassesConceded: 1,
		currentPointsWon: 0,
		currentPointsConceded: 1,
		currentLocation: "Your Closed Guard"
	};
	
  scoreCalculator.onChangePosition = function (score, user) {

	//================
	//Variables for saving to DB
	//================
    var totalPointsWon = user.pointsWon;
    var totalPointsConceded = user.pointsConceded;

	//takedowns
    var totalTDScored = user.takeDownsScored;
    var totalTDConceded = user.takeDownsConceded;

	//sweeps
	var totalSweepsScored = user.sweepsScored;
	var totalSweepsConceded = user.sweepsConceded;

	var totalSweepsFromHalfGuard = user.sweepsFromHalfGuard;

	//passes

	var totalPassesScored = user.passesScored;
	var totalPassesConceded = user.passesConceded;

	//==================
	//Variables for current score
	//==================
    var currentPointsWon = user.currentPointsWon;
    var currentPointsConceded = user.currentPointsConceded;
    var currentLocation = user.currentLocation;

	var that = this;


    //You are moving to mount
        if(score == "9992") {
            //Check current position to see if this is a sweep
            //So: check if opponent is in any guard or half guard then a sweep will have occurred
            if((currentLocation == "Your Closed Guard") || (currentLocation == "Your Open Guard") || (currentLocation == "Your Half Guard")) {
                console.log('SWEEP TO MOUNT!');
                user.currentPointsWon = currentPointsWon+4+2;
				scoreCalculator.fx();
				return 'blah';
                //user.save({pointsWon: totalPointsWon+6, sweepsScored: totalSweepsScored+1, patch: true}, {
                
			}
		}
	}
	
	scoreCalculator.fx = function () {
		console.log('fx!');
	
	}
	
	scoreCalculator.testSpy = sinon.spy();

 
