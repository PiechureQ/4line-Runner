var playState = {
	create: function() {

		//set up input
		this.keyboard = game.input.keyboard;
		
		//set up spacin
		for (var space = 0; space<500; space += 100){

		this.line = game.add.sprite(110 + space, 0, "line");
		}

		//creating group of objects to spawn over time
		grounds = game.add.physicsGroup(Phaser.Physics.ARCADE);

		//set up player png
		this.player = game.add.sprite(120, game.height - 110, "player");

		//defining hitbox
		game.physics.enable(this.player, Phaser.Physics.ARCADE);
		this.player.body.setSize(90, 10, 0, 10);

		game.time.events.loop(200, createGround, this, 6);
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

		//checking for collisions and go to endState
		game.physics.arcade.overlap(this.player, grounds, this.end, null, this);
	},

	end: function(){
		game.state.start("end");
	}
};


function createGround(speed){//spawning grounds with given speed
 	var x = grounds.create(40 + 100 * Math.floor((Math.random() * 4 ) + 1), 0, "ground");
  	if (speed == undefined){
 		x.body.velocity.y = 100;
 	} else {
 		x.body.velocity.y = 100 * speed;
 	}
 	//musza sie usuwac bo zapychaja pamiec / przy kolizji z granica ekranu?
}
