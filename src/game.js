
//making game
var game = new Phaser.Game(640, 480, Phaser.AUTO, 'gameDiv');

//adding all states to game
game.state.add("boot", bootState);
game.state.add("load", loadState);
game.state.add("menu", menuState);
game.state.add("play", playState);
game.state.add("end", endState);

//"booting" game
game.state.start("boot");
