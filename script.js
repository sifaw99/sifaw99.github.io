var inputname = document.getElementById("inputname");
var btnname = document.getElementById("btnname");
var namedisplay = document.getElementById("namedisplay");
var input = document.getElementById("input");
var btninput = document.getElementById("btninput");
var ul = document.getElementsByTagName("ul")[0];
var lidel = document.getElementsByTagName("span");
var lis = document.getElementsByTagName("li");

/// Check function keypress
function keypressed(e){
return e.keyCode ;
};
/// Check function inputvalue
function checkinputname(){
return inputname.value;
};
/// Check function input 
function checkinput(){
    return input.value;
    };
/// Main function
function Mainfunction(){
    var li = document.createElement("li");
    var span = document.createElement("span");
    span.appendChild(document.createTextNode("X "));
    li.appendChild(span);
    li.appendChild(document.createTextNode(input.value));
    ul.appendChild(li);
    for(var i = 0;i < lis.length; i++){
        lis[i].addEventListener("click",function(){
            this.classList.toggle("lidecoration");
        });
    };
    for(var i = 0; i < lidel.length; i++){
        lidel[i].addEventListener("click",function(){
            this.parentElement.textContent = "";
        });
    };
};
//// Main body
//// Display Name Of The User

inputname.addEventListener("keypress",function(evant){

    if( keypressed(evant) === 13 && checkinputname() !== ""){
        namedisplay.textContent = checkinputname();
    }
});

btnname.addEventListener("click", function(){
    if( checkinputname() !== ""){
        namedisplay.textContent = checkinputname();
    }
});
//// ToDos List Main 
btninput.addEventListener("click",function(){
    if(checkinput() !== ""){
        Mainfunction();
    }
});

input.addEventListener("keypress",function(evant){
    if(keypressed(evant) === 13 && checkinput() !== ""){
        Mainfunction();
    }
});

for(var i = 0;i < lis.length; i++){
    lis[i].addEventListener("click",function(){
        this.classList.toggle("lidecoration");
    });
};
for(var i = 0; i < lidel.length; i++){
    lidel[i].addEventListener("click",function(){
        this.parentElement.textContent = "";
    });
};