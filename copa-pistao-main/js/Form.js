class Form {
  constructor() {
    this.input = createInput("").attribute("placeholder", "Digite seu nome");
    this.playButton = createButton("Jogar");
    this.titleImg = createImg("./assets/TITULO.png", "nome do jogo");
    this.greeting = createElement("h2");
  }

  createElements(){
    this.input.position(width/2, height/2);
    this.playButton.position(width/2,height/2+100);
    this.titleImg.position(120,50);
    this.greeting.position(width/2,height/2);

    this.titleImg.class("gameTitle");
    this.input.class("customInput");
    this.playButton.class("customButton");
    this.greeting.class("greeting");
  }

  hide() {
    this.greeting.hide();
    this.playButton.hide();
    this.input.hide();
  }

  mousePressed(){
    this.playButton.mousePressed(()=>{
      this.input.hide()
      this.playButton.hide()
      this.greeting.html(`Olá ${this.input.value()}
      </br> por favor, aguarde o Jogador 2, entrar`)
      playerCount+=1
      player.name=this.input.value()
      player.index=playerCount
      player.addPlayer()
      player.updateCount(playerCount)
      player.getDistance()
    })
  }

  display(){

    this.createElements();
    this.mousePressed();
  }
}

 