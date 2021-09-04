var input=document.getElementById("input");
var button=document.getElementById("button");
var answer=document.getElementById("answer");
var list=document.getElementById("list");
var i=0;
var los=Math.floor(Math.random()*10)
button.addEventListener("click",sprawdz);

function sprawdz(){
    var value=Number(input.value);
    if(Number.isInteger(value) && value>=1 && value<=10){
        i++;
        if(los >value){
            answer.innerHTML = "Wylosowana liczba jest więskza od Twojej";
        }else if(los<value){
            answer.innerHTML = "Wylosowana liczba jest mniejsza od Twojej";
        }else{
            answer.innerHTML = "Brawo, zgadłeś za "+i+" razem";
            button.innerHTML="odśwież"
            button.addEventListener("click",odswiez)
        }
        var li=document.createElement("li");
        list.appendChild(li);
        list.lastChild.innerHTML= i.toString()+": "+value;
    }else{
        alert("Błedna liczba!");
    }
}
function odswiez(){
    i=0;
    button.innerHTML="wyślij";
    answer.innerHTML="";
    list.innerHTML="";
    input.innerHTML="";  
    //location.reload();
}