console.log('Advanced debugging example running.');
debugger;
// first, define the function.
function goodPractices() {
    var game = gameObject();
    for (var gameKey in game) {
        // are you ABSOLUTELY SURE what 'gameKey' is?
        // use the debugger to find out!
        debugger;
        var teamObj = game[gameKey];
        for (var teamKey in teamObj) {
            // are you ABSOLUTELY SURE what 'teamKey' is?
            // use debugger to find out!
            debugger;
            // what is 'data' at each loop through out this block?
            // when will the following line of code work and when will it break?
            var data = teamObj.player;
            for (var key in data) {
                debugger;
            }
        }
    }
}
// then, call the function so it runs!
goodPractices();
