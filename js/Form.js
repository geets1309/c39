class Form {
constructor(){
    this.input=createInput("Name")
    this.button=createButton("PLAY!!!")
    this.greetings=createElement("h3")
}

hide(){
this.greetings.hide()
this.input.hide()
this.button.hide()
}
display(){

var title=createElement('h2')
title.html("Car Racing Game")
title.position(displayWidth/2-50,0);


this.input.position(displayWidth/2-40,displayHeight/2-80)
this.button.position(displayWidth/2+30,displayHeight/2);
this.button.mousePressed(()=>{
this.input.hide()
this.button.hide()
 player.name=this.input.value()
 playerCount = playerCount+1;
 player.index = playerCount;
 player.update();
 player.updateCount(playerCount)
this.greetings.html("Hello! "+player.name)
this.greetings.position(displayWidth/2-70, displayHeight/4)

})
}

}