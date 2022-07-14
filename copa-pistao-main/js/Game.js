class Game {
  constructor() {
    this.reset = createButton("");
    this.resetTitle = createElement("h2");
    this.leader1 = createElement("h2");
    this.leader2 = createElement("h2");
    this.leaderText = createElement("h2");
  }

  showElements(){
    this.reset.position(width/2+225,100);
    form.titleImg.position(40,50);
    form.titleImg.class("gameTitleAfterEffect")
    this.reset.class("resetButton");
    this.resetTitle.html("reset");
    this.resetTitle.position(width/2+200,30);
    this.resetTitle.class("resetText");

    this.leaderText.html("score");
    this.leaderText.position(width/3-60,20);
    this.leaderText.class("resetText");

    this.leader1.position(width/3-60,80);
    this.leader1.class("resetText");

    this.leader2.position(width/3-60,120);
    this.leader2.class("resetText");
  }

  start() {
    form = new Form();
    form.display();
    player = new Player();
    playerCount=player.getCount()
    car1=createSprite(width/2-50,height-100)
    car1.addImage("carro1",car1Img)
    car1.scale=0.1
    car2=createSprite(width/2+100,height-100)
    car2.addImage("carro2",car2Img)
    car2.scale=0.1
    cars=[car1,car2]
  }

  getState(){
    var stateRef = database.ref("gameState");
    stateRef.on("value",function(data){
      gameState = data.val()
    }) 
  }

  update(state){
    database.ref("/").update({
      gameState:state
    })
  }

  play(){
    this.showElements()
    this.reiniciar()
    form.hide()
    Player.getPlayersInfo()
    if(allPlayers!==undefined){
    image(trackImg,0,-height*5,width,height*6)
    this.showLeaders()
    var index = 0
    for(var plr in allPlayers){
      index=index+1
      var x =allPlayers[plr].posX
      var y =height-allPlayers[plr].posY
      cars[index-1].position.x=x //travou
      cars[index-1].position.y=y

      if (index===player.index){
        fill("red")
        ellipse(x,y,100,100)      
      camera.position.y=cars[index-1].position.y
      }
    }
    this.playerControls()
    drawSprites()
 }
}

playerControls(){
  if(keyIsDown(UP_ARROW)){
    player.posY += 10
    player.update()
  }
  if(keyIsDown(DOWN_ARROW)){
    player.posY -= 10
    player.update()
  }
  if(keyIsDown(LEFT_ARROW)&& player.posX>width/3-50){
    player.posX -= 5
    player.update()
  }
  if(keyIsDown(RIGHT_ARROW)&& player.posX<width/2+300){
    player.posX += 5
    player.update()
  }
}

reiniciar(){
this.reset.mousePressed(()=>{
  database.ref("/").set({
    carsEnd:0,
    playerCount:0,
    gameState:0,
    players:{}
  })
  location.reload()
})
}
showLeaders(){
  var leader1, leader2;
  var players = Object.values(allPlayers);
  if (
    (players[0].rank === 0 && players[1].rank === 0) ||
    players[0].rank === 1
  ) {
    // &emsp;    Essa etiqueta é usada para exibir quatro espaços.
    leader1 =
      players[0].rank +
      "&emsp;" +
      players[0].name +
      "&emsp;" +
      players[0].score;

    leader2 =
      players[1].rank +
      "&emsp;" +
      players[1].name +
      "&emsp;" +
      players[1].score;
  }

  if (players[1].rank === 1) {
    leader1 =
      players[1].rank +
      "&emsp;" +
      players[1].name +
      "&emsp;" +
      players[1].score;

    leader2 =
      players[0].rank +
      "&emsp;" +
      players[0].name +
      "&emsp;" +
      players[0].score;
  }

  this.leader1.html(leader1);
  this.leader2.html(leader2);
}

}















































































































































































































//oxes