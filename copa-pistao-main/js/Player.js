class Player {
  constructor() {
    this.name=null;
    this.index=null;
    this.posX = 0
    this.posY = 0
    this.rank = 0
    this.score= 0
  }

  getCount(){
    var countRef = database.ref("playerCount");
    countRef.on("value",function(data){
      playerCount = data.val()
    }) 
  }
  updateCount(count){
    database.ref("/").update({
      playerCount:count
    })
  }
  static getPlayersInfo(){
  var playerInfoRef = database.ref("players")
  playerInfoRef.on("value",data =>{
    allPlayers=data.val()
  }) 
  }

  //vposição do carrinho
  addPlayer(){
   var playerIndex = "players/player"+ this.index
   if(this.index===1){
    this.posX=width/2-200
   }else{
    this.posX=width/2+200
   }
   database.ref(playerIndex).set({
    name:this.name,
    posX:this.posX,
    posY:this.posY,
    rank:this.rank,
    score:this.score
   })
  }

update(){
  var playerIndex = "players/player"+ this.index
  database.ref(playerIndex).update({
   posX:this.posX,
   posY:this.posY,
   rank:this.rank,
  score:this.score
  })
}
getDistance(){
  var playerdistanceref = database.ref("players/player"+this.index);
  playerdistanceref.on("value",(data)=>{
    var data = data.val();
    this.positionX = data.positionX;
    this.positionY = data.positionY;

  })
}
}