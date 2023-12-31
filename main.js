const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight +200;
ctx.fillStyle = 'white';
const cloudArray = [];
const starArray = [];

// draw grid over the canvas
//vertical lines
for (let i=10; i<=canvas.width; i += 10){
  ctx.beginPath();
  ctx.moveTo(i, 0); // start at (x,y)
  ctx.lineTo(i, canvas.height); // end at (x, y)
  ctx.lineWidth = .25;
  ctx.strokeStyle='#b52698';
  ctx.stroke();
}
//horizontal lines
for (let i=10; i<=canvas.height; i += 10){
  ctx.beginPath();
  ctx.moveTo(0,i)
  ctx.lineTo(canvas.width,i)
  ctx.lineWidth = .25;
  ctx.strokeStyle='#b52698';
  ctx.stroke();
}

// draw stars across the canvas
class Star {
  constructor(){
    this.x = Math.random() * canvas.width;
    this.y = Math.random() * canvas.height;
    this.radius = Math.random() * 8;
    this.inset = 0.25;
    this.alpha = Math.random() * 1;
  }
  
  draw(){
    ctx.beginPath();
    ctx.save();
    ctx.translate(this.x,this.y)
    ctx.moveTo(0,0 - this.radius);
  
    for (let i = 0; i < 4; i++){
      ctx.rotate(Math.PI /4)
      ctx.lineTo(0,0 - (this.radius * this.inset));
      ctx.rotate(Math.PI /4)
      ctx.lineTo(0,0 - this.radius);
    }
    
    ctx.restore() //prevents stacking of translations
    ctx.closePath();
    ctx.lineWidth = .5;
    ctx.strokeStyle='#FFF';
    ctx.stroke();
    ctx.fill();
    ctx.globalAlpha = this.alpha;
  }
}

const initStar = () => {
  for (let i = 0; i<150; i++){
    starArray.push(new Star());
  }
}

initStar();

const handleStars = () => {
  for (let i=0; i<starArray.length; i++){
    starArray[i].draw();
  }
}

handleStars();
