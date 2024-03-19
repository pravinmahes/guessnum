var num = (Math.ceil(Math.random()*100));
console.log(num);
var count = 1;
function check(){
    var numuser = parseInt (document.getElementById("n").value);
    if(num == numuser){
        document.getElementById("res").textContent="Congragulations you guessed it in "+count+" tries";
    }else if (num<numuser){
        document.getElementById("res").textContent="Try with smaller number";
    }else {
        document.getElementById("res").textContent="Try with larger number";
    }
    document.getElementById("tries").textContent=count;
    count=count+1;
}