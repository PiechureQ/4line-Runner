var loadState = {

	preload: function() {

		//load assets
		game.load.image("player", "assets/player.png");
		game.load.image("line", "assets/line.png");
		game.load.image("ground", "assets/ground.png");
	},
	create: function() {
		console.log("load");
		game.state.start("menu");
	}
};