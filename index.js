var random;
window.onload = function(){
    random=Math.floor((Math.random()*10) +1)
    console.log(random);
    userrandom=document.getElementById("number").value;
    document.getElementById("btn").addEventListener('click', respond)
}

function respond(e){
    if(random==userrandom){
        document.getElementById("guess").innerHTML="<h1>Correct guess</h1>";
    }
    else{
        document.getElementById("guess").innerHTML="<h1>Wrong guess</h1>";
    }
}