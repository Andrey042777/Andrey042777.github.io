let road = document.querySelector('#road')
let status = document.querySelector('#status')
let Boat = function(name, color, size) {
    this.element = null;
    this.name = name;
    this.color = color;
    this.width = size;
    this.height = size / 2;
    this.posX = 0
    this.create = function(){
        this.element = document.createElement('div');
        this.element.className = 'boat';
        this.element.style.width = this.width + "px";
        this.element.style.height = this.height + "px";
        this.element.style.backgroundColor = this.color;
        this.element.innerHTML = '<h3>' + this.name + '</h3>';
        road.append(this.element);
    }
    this.move = function() {
        this.posX += Math.random() * 5;
        this.element.style.left = this.posX + "px";
    }
    this.checkCollision = function() {
        if (this.posX + this.width > road.clientWidth) {
            return true }
        return false

    }
    this.winner = function() {
        this.element.className = 'boat winner';
    }
} 
boat_1 = new Boat('Duck', 'blue', 100);
boat_1.create();
boat_2 = new Boat('Musk', 'green', 100);
boat_2.create();
let boats = [boat_2, boat_1];
gameLoop = setInterval(game, 25);
function game() {
  
    for (let i = 0; i < boats.length; i++) {
        let b = boats[i]
        b.move();
        if (b.checkCollision()) {
            b.winner();
            clearInterval(gameLoop)
        }
    }
}
