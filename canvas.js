
var canvas=document.querySelector('canvas');
canvas.width=window.innerWidth;
canvas.height=window.innerHeight;
var c=canvas.getContext('2d');
var d=canvas.getContext('2d');
d.fillStyle="red";
d.fillRect(100,100,100,100);

d.fillStyle="black";
d.fillRect(300,300,100,100);

d.fillStyle="black";
d.fillRect(200,200,100,100);
/*
//line
c.beginPath();
c.moveTo(500,500);
c.lineTo(600,200);
c.lineTo(100,200);
c.lineTo(500,500);
c.strokeStyle="red";
c.stroke();
*/
//arc
 var mouse={x:undefined,
y:undefined};
window.addEventListener('mousemove',function(event){
mouse.x=event.x;
mouse.y=event.y;
console.log(mouse);
});

var a=['red','violet','black','orange','blue'];

class Circle {
    constructor(x, y, dx, dy, radius,color) {
        this.x = x;
        this.y = y;
        this.radius = radius;
        this.dx = dx;
        this.dy = dy;
        this.color=color;
        this.Draw = function() {
            c.beginPath();
            c.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
            
            c.strokeStyle = this.color;
            c.stroke();
            c.fillStyle = this.color;
            c.fill();
        };
        this.updat = function() {
            if (this.x + this.radius > window.innerWidth || this.x - this.radius < 0)
                this.dx = -this.dx;
            if (this.y + this.radius > window.innerHeight || this.y - this.radius < 0)
                this.dy = -this.dy;
            this.x += this.dx;
            this.y += this.dy;
          
          if(this.x-mouse.x<30&&this.x-mouse.x>-30&&this.y-mouse.y<30&&this.y-mouse.y>-30){
              if(this.radius<40)
              {this.radius++;}
          }
          else if(this.radius>2){this.radius=this.radius-1;}
            this.Draw();
        };
    }
}


//var circle=new Circle(x,y,dx,dy,30);
var CircleArray=[];

   for(i=0;i<500;i++){
var radius=30;
var     x=(window.innerWidth-2*radius)*Math.random()+radius;
var y=(window.innerHeight-2*radius)*Math.random()+radius;
var dx=Math.random();
var dy=Math.random();   
var r=Math.random()*255;
var g=Math.random()*255;
var b=Math.random()*255;

 var color='rgb('+r+','+g+','+b+')';   

    CircleArray.push(new Circle(x,y,dx,dy,30,color));
   }


function runningCircle()
{ 
    requestAnimationFrame(runningCircle);
    

    c.clearRect(0,0,window.innerWidth,window.innerHeight);
   for(i=0;i<500;i++){ 
    CircleArray[i].updat();
   }
}


c.fillStyle="red";
c.fillRect(100,100,100,100);

c.fillStyle="black";
c.fillRect(300,300,100,100);

c.fillStyle="black";
c.fillRect(200,200,100,100);
runningCircle();    

c.fillStyle="red";
c.fillRect(100,100,100,100);

c.fillStyle="black";
c.fillRect(300,300,100,100);

c.fillStyle="black";
c.fillRect(200,200,100,100);
//     if(x+30>window.innerWidth||x-30<0)
//     dx=-dx;
//     if(y+30>window.innerHeight||y-30<0)
//     dy=-dy;
//     x+=dx;
//     y+=dy;
// c.beginPath();
// c.arc(x,y,30,0,Math.PI*2);
// c.strokeStyle="red";
// c.stroke();







// for(i=0;i<100;i++){
//     var x=Math.random()*window.innerWidth;
//     var y=Math.random()*window.innerHeight;
//     var color=Math.floor(Math.random()*5);
// c.beginPath();
// c.arc(x,y,50,0,Math.PI*2);
// c.strokeStyle=a[color];
// c.stroke();

