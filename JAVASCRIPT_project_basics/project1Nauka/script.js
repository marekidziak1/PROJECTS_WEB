//lekcja 14
consoloe.log(document);
//lekcja 12
/*
var mat = document.getElementById("math")
var date = document.getElementById("date")

var date1 = new Date(19995, 2, 24, 1, 2, 3);
date.innerHTML=date1;

function setTime(){
    var time= new Date();
    date.innerHTML = "Czas: "+ time.getHours()+":"+time.getMinutes()+":"+time.getSeconds();
}
setTime()
setInterval(setTime, 1000);
*/
//lekcja11:
/*
//1
var obj ={name: "Adam", age:25,
    showName: function(){
        return "Imie: "+this.name+"<br />";
    },
    showAge: function(inYear){
        return "Wiek: "+this.age+" in "+inYear+"<br />";
    }
};
var result=document.getElementById("result")
result.innerHTML+= obj.name+"<br />"
result.innerHTML+=obj.showName()
result.innerHTML+=obj.showAge(2021)
//2 SPOSÓB
function Person(name, age){
    this.name=name;
    this.age=age;
    this.showName=function(){
        return "Imie: "+this.name+"<br />";
    };
    this.showAge=function(inYear){
        return "Wiek: "+this.age+" in "+inYear+"<br />";
    };  
}
var ola = new Person("Ola",18);
result.innerHTML+=ola.name +"<br />";
result.innerHTML+=ola.showName();
result.innerHTML+=ola.showAge(2021);
*/


//lekcja10
/*
var tab=new Array("Poniedziałek", "Wtorek", "Środa")
var result = document.getElementById("result");
result.innerHTML+=tab[0]
*/

/*
//lekcja 8 i 9
var result=document.getElementById("result");
function hello(a,b){
    result.innerHTML+=a+"+"+b+"="+(a+b)+"<br />";
}
hello(1,2);
//REKURENCJA
function silnia(n){
    if(n==1){
        return 1;
    }else{
        return n*silnia(n-1) 
    }
}
console.log(silnia(5))
*/

//lekcja 6 i 7
/*
var box=document.getElementById("result");
var box2=document.getElementById("result2");
var box3=document.getElementById("result3");
for(var k=0; k<10; k++){
    box3.innerHTML+= k+"<br />";
}
var i=0;
while(i<10){
    box.innerHTML+= i+ "<br />";
    i++;
}
i=0;
do{
    box2.innerHTML +=i+"<br />"
    i++;
}while(i<10);
*/

//lekcja4 i 5:
/*
var box = document.getElementById("result");
var coloro="pink";
switch(coloro){
    case "red":
        box.style.color="white";
        box.style.backgroundColor="red";
        break;
    case "blue":
        box.style.color="white";
        box.style.backgroundColor="blue";
        break;
    default:
        box.style.color="black";
        box.style.backgroundColor="grey";
        break;        
}
*/

//lekcja 1 i 2 i 3:
//document.getElementById("result").innerHTML = "Hello World";