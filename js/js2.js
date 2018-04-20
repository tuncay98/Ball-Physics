var ball= document.querySelector("div");
document.addEventListener("mousemove", down)

function down(event){
var mouseX= event.clientX -26;
var mouseY= event.clientY -26 ;
ball.style.left= mouseX+ "px"
ball.style.top= mouseY+ "px"
}
document.addEventListener("click", click);
function click(){
    document.removeEventListener("mousemove", down);
    setInterval(set, 10)
}
ball.style.position= "relative"

var z= Math.floor((Math.random()* 11)-5);
var c= Math.floor((Math.random()* 11)-5);
function set(){
    var a= Math.floor((Math.random()* 255)+1);
    var b= Math.floor((Math.random()* 255)+1);
    var d= Math.floor((Math.random()* 255)+1);
    var x= ball.offsetLeft;
var y= ball.offsetTop;
x= x+(1*z);
y= y+(1*c);

if(x>= window.innerWidth- 52){
    z=-z;
    ball.style.backgroundColor= "rgb("+ a+ ","+ b+ ","+ d+")"
}
if(y>= window.innerHeight -52){
    c= -c;
    ball.style.backgroundColor= "rgb("+ a+ ","+ b+ ","+ d+")"
}
if(y<= 0){
    c= c*-1;
    ball.style.backgroundColor= "rgb("+ a+ ","+ b+ ","+ d+")"
}
if(x<= 0){
    z= z*-1;
    ball.style.backgroundColor= "rgb("+ a+ ","+ b+ ","+ d+")"
}

ball.style.left= x+ "px"; 
ball.style.top= y+ "px"
}

