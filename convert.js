// Convert Temprature
var inputNumb = document.getElementById("inputNumb");
var outputNumb = document.getElementById("outputNumb");

var clearBtn = document.getElementById("clearBtn");


clearBtn.addEventListener("click", function clearResult () {
    outputNumb.innerHTML = "";
});

// FARENHAIT
// Convert Farenheit to Celcius
function FarenhaitToCelcius(Numb){
     return (5/9)*((Numb*1)-32);
}
// Convert Farenhait To Reamur
function FarenhaitToReamur(Numb){
    return (Numb-32) * (4/9);
}

// CELCIUS
// Convert Celcius to Farenheit
function CelciusToFarenhait(Numb){
   return Numb * (9/5) + 32 ;
}
// Convert Celcius to Reamur
function CelciusToReamur(Numb){
    return Numb * (4/5);
}

// REAMUR
// Convert Reamur to Farenheit
function ReamurToFarenhait(Numb){
    return Numb * (9/4) + 32;
}
// Convert Reamur to Celcius
function ReamurToCelcius(Numb){
   return Numb * (5/4);
}


    inputNumb.addEventListener('input', function Convert(e) {
        let Numb = e.target.value;
     
    var select1 = document.getElementById("select1").value;
    var select2 = document.getElementById("select2").value;
    if (select1 == "farenhait" && select2 == "celcius"){
        outputNumb.innerHTML = FarenhaitToCelcius(Numb);
    } else if(select1 == "farenhait" && select2 == "reamur"){
        outputNumb.innerHTML = FarenhaitToReamur(Numb);
    } else if(select1 == "celcius" && select2 == "farenhait"){
        outputNumb.innerHTML = CelciusToFarenhait(Numb);
    } else if(select1 == "celcius" && select2 == "reamur"){
        outputNumb.innerHTML = CelciusToReamur(Numb);
    } else if(select1 == "reamur" && select2 == "farenhait"){
        outputNumb.innerHTML = ReamurToFarenhait(Numb);
    } else if(select1 == "reamur" && select2 == "celcius"){
        outputNumb.innerHTML = ReamurToCelcius(Numb);
    } else{
        return outputNumb.innerHTML = Numb;
    }
});

module.exports = ReamurToCelcius;


