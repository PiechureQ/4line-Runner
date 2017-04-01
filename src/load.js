var loadState = {

	preload: function() {

		//load assets
		game.load.spritesheet("player", "assets/running_ninja.png", 26, 32, 8);
		game.load.image("line", "assets/line.png");
		game.load.image("ground", "assets/ground.png");
	},
	create: function() {
		console.log("load");
		game.state.start("menu");
	}
};