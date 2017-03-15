var playState = {
	create: function() {

		//set up input
		this.keyboard = game.input.keyboard;
		
		//set up spacin
		for (var space = 0; space<500; space += 100){

		this.line = game.add.sprite(110 + space, 0, "line");
		}

		//var ground = createGround(1);
		//createGround(3);
		
		//myśle jakaś grupa tych klocków by sie przydała i wtedy overlap z całą grupa sprawdzac i juz
		this.ground = game.add.sprite(140, 0, "ground");
 		game.physics.enable(this.ground, Phaser.Physics.arcade);
 		this.ground.body.velocity.y = 100;

		//set up player png
		this.player = game.add.sprite(120, game.height - 110, "player");
		game.physics.enable(this.player, Phaser.Physics.ARCADE);

	},
	update: function() {

		if (this.keyboard.isDown(Phaser.Keyboard.D)) {
			this.player.body.x = 120;
		}
		if (this.keyboard.isDown(Phaser.Keyboard.F)) {
			this.player.body.x = 220;
		}
		if (this.keyboard.isDown(Phaser.Keyboard.J)) {
			this.player.body.x = 320;
		} 
		if (this.keyboard.isDown(Phaser.Keyboard.K)) {
			this.player.body.x = 420;
		}

		game.physics.arcade.overlap(this.player, this.ground, this.end, null, this);
	},

	end: function(){
		game.state.start("end");
	}
};

/*
function createGround(row, speed){
 	var ground = game.add.sprite(140 + row * 100, 0, "ground");
 	game.physics.enable(ground, Phaser.Physics.arcade);
 	console.log(speed);
 	if (speed == undefined){
 		ground.body.velocity.y = 100;
 	} else {
 		ground.body.velocity.y = 100 * speed;
 	}
}
*/