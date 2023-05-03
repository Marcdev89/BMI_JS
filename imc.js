var nameClient = document.getElementsByTagName('input')[0];
var kg = document.getElementsByTagName('input')[1];
var cm = document.getElementsByTagName('input')[2];
var send = document.getElementsByTagName('button')[0];
var result = document.getElementById('result');

var imc;



function checkName(element){
   let element1 = nameClient.value;

    if (element1.length===0){
        nameClient.classList.add("wrong");
        document.getElementsByTagName('label')[0].innerHTML = "Name: <span class 'rfield'>*</span>"
      
		return false;
    
	} else {
        nameClient.classList.remove("wrong");
        document.getElementsByTagName('label')[0].innerHTML = "Name: "
  
		return true;

	}
}

function checkKg(element){
   let element2 = kg.value;
    if (element2.length===0){
        kg.classList.add("wrong");
        document.getElementsByTagName('label')[1].innerHTML = "Weight (kg): <span class 'rfield'>*</span>";
      
		return false;
    
	} else {
        kg.classList.remove("wrong");
        document.getElementsByTagName('label')[1].innerHTML = "Weight (kg):";
        
		return true;

	}
}

function checkCm(element){
    let element3 = cm.value;
    if (element3.length===0){
        cm.classList.add("wrong");
        document.getElementsByTagName('label')[2].innerHTML = "Height (cm): <span class 'rfield'>*</span>";
       
		return false;
    
	} else {
        cm.classList.remove("wrong");
        document.getElementsByTagName('label')[2].innerHTML = "Height (cm):";
  
		return true;

	}
}

function checkDetails(name, kg, cm){

    if ((checkName(name)==true) && (checkKg(kg)==true) && (checkCm(cm)==true)){

        return true;
    }else{
        return false;
    }
}
   

function calculateIMC(kgs, cms){
   let kgrams = kg.value;
   let cmts = cm.value;

    cmts = parseFloat(cmts/100);
    cmts= cmts*cmts;
    imc = kgrams/cmts;
    imc = imc.toFixed(2);
    return imc;

}


function printResult(){
    let nameC = nameClient.value;
    let actualIMC = (calculateIMC(kg,cm));
    let advice;
    switch (true){
        case (actualIMC<18.5):
            advice = ". You are underweight.";
            break;
        case (actualIMC>18.5 && actualIMC<24.99):
            advice = ". It's fine.";
            break;
        case (actualIMC>24.99 && actualIMC<34.99):
            advice= ". Strong or fatty, who knows.";
            break;
        default:
            advice= ". Omg, go to doctor quickly, please!";

    }


if (checkDetails(nameClient, kg, cm)==true){
    result.innerText = "Hello, "+nameC+". Your Body Mass Index is: "+ actualIMC + advice;
    result.classList.add('result');
}else{
    result.innerText = "Fill the required fields."
    result.classList.add('result');
}
}

  

send.addEventListener("click", function(){
    checkName();
    checkKg();
    checkCm();
    printResult();
});


