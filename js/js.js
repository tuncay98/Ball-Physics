var ball= document.querySelector("div");
ball.style.position= "relative"
var x=0;
var y= 0;
var z= 1;
var c= 1;
function set(){
    
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
setInterval(set, 1)
