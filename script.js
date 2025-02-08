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
    
} 
