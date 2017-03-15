var endState = {
	create: function(){

		var gameOverLabel = game.add.text(100, 200, "Game Over", {font: "50px Arial", fill: "#ffff66"});

		var ekey = game.input.keyboard.addKey(Phaser.Keyboard.E);
		ekey.onDown.addOnce(this.start, this);
	},
	start: function(){
		game.state.start("play");
	}
}