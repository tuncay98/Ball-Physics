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

var z= 1;
var c= 1;
function set(){
    var x= ball.offsetLeft;
var y= ball.offsetTop;
x= x+(1*z);
y= y+(1*c);

if(x== window.innerWidth- 52){
    z=-1;
}
if(y== window.innerHeight -52){
    c= -1;
}
if(y== 0){
    c= 1;
}
if(x== 0){
    z= 1;
}

ball.style.left= x+ "px"; 
ball.style.top= y+ "px"
}

