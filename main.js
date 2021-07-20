
let btn1 = document.getElementById("btn1");
let btn2 = document.getElementById("btn2");
let btn3 = document.getElementById("btn3");

let fullBtn = document.querySelector(".fullCounterBtn");
let clearBtn = document.querySelector(".clearBtn");

fullBtn.addEventListener("click", sayHepsini);

clearBtn.addEventListener("dblclick", function(){

    if(sayi_1 <= 10 || sayi_2 <= 10 || sayi_3 <= 12){
       document.querySelector(".sayi1").innerHTML = sayi_1 = 0;
       document.querySelector(".sayi2").innerHTML = sayi_2 = 0;
       document.querySelector(".sayi3").innerHTML = sayi_3 = 0;
    }
})

//1.  say1
btn1.addEventListener("click", say1);

let sayi_1 = 1;

function say1(){
    
    if(sayi_1 < 10){
     
        sayi_1++;
        document.querySelector(".sayi1").innerHTML = sayi_1;
       
    } 
    
}
 

//2.say
btn2.addEventListener("click", say2);

let sayi_2 = 2;

function say2(){

    if(sayi_2 < 10){
        sayi_2 += 2;
        document.querySelector(".sayi2").innerHTML = sayi_2;
    }

}

//3.say
btn3.addEventListener("click", say3);

let sayi_3 = 0;

function say3(){
    if(sayi_3 < 12){
        sayi_3 += 3;
        document.querySelector(".sayi3").innerHTML = sayi_3;
    }
};

//te butonda  tüm say functiponlarını çalıştırma
function sayHepsini(){
    say1();
    say2();
    say3();
  }