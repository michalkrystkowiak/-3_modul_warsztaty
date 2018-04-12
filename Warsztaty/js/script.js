

document.addEventListener("DOMContentLoaded", function() {

var areaInsideBox = document.getElementsByClassName("area-inside-box");
var labelBox = document.getElementsByClassName("label-box");
var sliderBack = document.getElementsByClassName("back")[0];
var sliderNext = document.getElementsByClassName("next")[0];
var leftColumnlist = document.querySelectorAll('*[class^="l-col"]');
var rightColumnlist = document.querySelectorAll('*[class^="r-col"]');
var counter = 0;



// Zadania 2 - Boxy z tekstem
var hideLabelBox = function () {
        this.firstChild.nextSibling.classList.add("hidden");      
};

for (var i=0; i<2; i++) {
    areaInsideBox[i].addEventListener("mouseover", hideLabelBox);
};

var showLabelBox = function () {
    this.firstChild.nextSibling.classList.remove("hidden");      
};

for (var i=0; i<2; i++) {
areaInsideBox[i].addEventListener("mouseout", showLabelBox);
};

// ZADANIE 3 - Slider
var goToNextSlide = function () {

    leftColumnlist[counter].classList.toggle("visible");
    rightColumnlist[counter].classList.toggle("visible");

    if (counter<leftColumnlist.length-1) {               
        counter++;                         
    } else {
        counter = 0;
    }
    
    leftColumnlist[counter].classList.toggle("visible");
    rightColumnlist[counter].classList.toggle("visible");
            
};

sliderNext.addEventListener("click", goToNextSlide);

var goToPreviousSlide = function () {

    leftColumnlist[counter].classList.toggle("visible");
    rightColumnlist[counter].classList.toggle("visible");

    if (counter>0) {               
        counter--;                         
    } else {
        counter = leftColumnlist.length-1;
    }
    
    leftColumnlist[counter].classList.toggle("visible");
    rightColumnlist[counter].classList.toggle("visible");
            
};

sliderBack.addEventListener("click", goToPreviousSlide);

// ZADANIE 4. Kalkulator

var sitType = document.getElementsByClassName("type")[0];
var colorType = document.getElementsByClassName("color")[0];
var materialType = document.getElementsByClassName("material")[0];
var transport = document.getElementById("ckeck-pricelist");

var configurationList = document.getElementById("configuration").children;
var priceList = document.getElementById("price-list").children;
console.log(transport);

// Cena fotela
var sitTypePrice = function () {


    if (this.value=="clair") {
        configurationList[0].innerHTML = "Chair Clair";
        priceList[0].innerHTML = 280;
    } else if (this.value=="margarita") {
        configurationList[0].innerHTML = "Chair Margarita";
        priceList[0].innerHTML = 200;
    }else if (this.value=="selena") {
        configurationList[0].innerHTML = "Chair Selena";
        priceList[0].innerHTML = 300;
    }else {
        configurationList[0].innerHTML = "Twój fotel";
        priceList[0].innerHTML = "";
    };

    sumAll();

};

sitType.addEventListener("change", sitTypePrice);



// Cena za kolor
var colorLi = document.createElement("LI");
var colorPriceLi = document.createElement("LI");
var textNode = document.createTextNode("");

colorLi.appendChild(textNode);
colorPriceLi.appendChild(textNode);
configurationList[0].parentElement.appendChild(colorLi);
priceList[0].parentElement.appendChild(colorPriceLi);
colorLi.style.color = "Gray";
colorPriceLi.style.color = "Gray";


var colorPrice = function () {
    
    if (this.value=="red") {
        colorLi.innerHTML = "Czerwony";
        colorPriceLi.innerHTML = 10;
    } else if (this.value=="black") {
        colorLi.innerHTML = "Czarny";
        colorPriceLi.innerHTML = 20;
    } else if (this.value=="orange") {
        colorLi.innerHTML = "Pomarańczowy";
        colorPriceLi.innerHTML = 50;
    } else {
        colorLi.innerHTML = "- Wybierz kolor -";
        colorPriceLi.innerHTML = "";
    };

    sumAll();
    
};

colorType.addEventListener("change", colorPrice);

//Cena za material
var materialLi = document.createElement("LI");
var materialPriceLi = document.createElement("LI");

materialLi.appendChild(textNode);
materialPriceLi.appendChild(textNode);
configurationList[0].parentElement.appendChild(materialLi);
priceList[0].parentElement.appendChild(materialPriceLi);
materialLi.style.color = "Gray";
materialPriceLi.style.color = "Gray";


var materialPrice = function () {
    
    if (this.value=="textil") {
        materialLi.innerHTML = "Tkanina";
        materialPriceLi.innerHTML = 50;
    } else if (this.value=="leather") {
        materialLi.innerHTML = "Skóra";
        materialPriceLi.innerHTML = 150;
    } else {
        materialLi.innerHTML = "- Wybierz materiał -";
        materialPriceLi.innerHTML = "";
    };

    sumAll();
    
};

materialType.addEventListener("change", materialPrice);


//Cena za transport
var transportLi = document.createElement("LI");
var transportPriceLi = document.createElement("LI");

transportLi.appendChild(textNode);
transportPriceLi.appendChild(textNode);
configurationList[0].parentElement.appendChild(transportLi);
priceList[0].parentElement.appendChild(transportPriceLi);
transportLi.style.color = "Gray";
transportPriceLi.style.color = "Gray";


var transportPrice = function () {
    
    if (this.checked) {
        transportLi.innerHTML = "Transport";
        transportPriceLi.innerHTML = 80;
    } else {
        transportLi.innerHTML = "- własny transport -";
        transportPriceLi.innerHTML = "";
    };
    
    sumAll();

};

transport.addEventListener("change", transportPrice);

// Suma z kalkulatora
var sum = document.getElementById("resume-total-sum");



var sumAll = function() {
    if (priceList[0].innerHTML=="") {
        configurationList[0].innerHTML = "- Wybierz fotel -"
        priceList[0].innerHTML=0;
    };

    if (colorPriceLi.innerHTML=="") {
        colorLi.innerHTML = "- Wybierz kolor -";
        colorPriceLi.innerHTML=0;
    };

    if (materialPriceLi.innerHTML=="") {
        materialLi.innerHTML = "- Wybierz materiał -";
        materialPriceLi.innerHTML=0;
    };

    if (transportPriceLi.innerHTML=="") {
        transportLi.innerHTML = "- Wybierz transport -";
        transportPriceLi.innerHTML=0;
    };


    sum.innerHTML = parseFloat(priceList[0].innerHTML)+parseFloat(colorPriceLi.innerHTML)+parseFloat(materialPriceLi.innerHTML)+parseFloat(transportPriceLi.innerHTML);
};




});



