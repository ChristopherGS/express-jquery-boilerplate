  var promotionManager = {};
  var user = {wins: 25, losses: 5, belt: "WhiteBelt", sweeps: 11};
  var obj = { foo: 'bar' };

  user.check = function (user) {
	
	console.log('promotion check');
	console.log(user);
	//First stripe threshold

	//WHITE BELT
		if (wins < 1) {
			user.belt = 'White Belt';
		} else if (user.wins > 1) {
			user.belt = 'Blue Belt';
		} else if (user.wins > 25) {
			user.belt = 'Purple Belt';
		}
		
	}
 