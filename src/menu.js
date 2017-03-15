var menuState = {

	create: function() {

		//display text
		var nameLabel = game.add.text(100, 200, "4line Runner", {font: "50px Arial", fill: "#ffff66"});

		//click e to start
		var ekey = game.input.keyboard.addKey(Phaser.Keyboard.E);
		ekey.onDown.addOnce(this.start, this);
	},
	start: function() {
		console.log("menu");
		game.state.start("play");
	}
};