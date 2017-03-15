//boot state
var bootState = {

	//create is automaticlly called
	create: function() {

		//set up physics - docs say arcade is deflaut so i probably don't need to call this
		game.physics.startSystem(Phaser.Physics.arcade);

		//moving to load state
		console.log("boot");
		game.state.start("load");
	}
};