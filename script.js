/*EXERCICE 1*/
/*QUESTION 1.1*/

/*Creating the form tag*/
let screen1 = document.createElement("form");
screen1.style.display = "inherit";
document.body.appendChild(screen1);

/*First line*/
let firstName = document.createElement("p");
screen1.appendChild(firstName);

let labelFirstName = document.createElement("label");
labelFirstName.setAttribute("for", "firstName");
labelFirstName.textContent = "Quel est votre prénom ?";
firstName.appendChild(labelFirstName);

let inputFirstName = document.createElement("input");
inputFirstName.type = "text";
inputFirstName.name = "firstName";
firstName.appendChild(inputFirstName);

/*Second line*/
let name = document.createElement("p");
screen1.appendChild(name);

let labelName = document.createElement("label");
labelName.setAttribute("for", "Name");
labelName.textContent = "Quel est votre nom ?";
name.appendChild(labelName);

let inputName = document.createElement("input");
inputName.type = "text";
inputName.name = "firstName";
name.appendChild(inputName);

/*Button*/
let validation1 = document.createElement("p");
screen1.appendChild(validation1);

let bntValidation1 = document.createElement("input");
bntValidation1.type = "button";
bntValidation1.name = "buttonForm";
bntValidation1.value = "OK";
validation1.appendChild(bntValidation1);

/*QUESTION 1.2*/
/*Error message*/
let errorMessage = document.createElement("p");
errorMessage.style.display = "none";
errorMessage.textContent = "Veuillez remplir les 2 champs avant de valider";
screen1.appendChild(errorMessage);

/*Creation of interface 2*/
let screen2 = document.createElement("div");
screen2.style.display = "none";
document.body.appendChild(screen2);

let welcomeMessage = document.createElement("p");
welcomeMessage.textContent="Bonjour";
screen2.appendChild(welcomeMessage);

/* Action performed when you click on the continue button*/
bntValidation1.addEventListener("click", confirm1, false);

function confirm1() {
if (inputFirstName.value.length !== 0 && inputName.value.length !== 0 ){
  screen1.style.display = "none";
  screen2.style.display = "inherit";
  let valueFirstName = inputFirstName.value /*recover first name value*/
/*let valueName = inputName.value /*recover name value*/
/*welcomeMessage.textContent="Bonjour " + valueFirstName + " " + valueName + " !" ;
}
 else {
   errorMessage.style.display = "inherit";
}
}


/*EXERCICE 2*/

/*Creating HTML elements*/
/*Creating the form tag*/
let formSalary = document.createElement("form");
formSalary.style.display = "inherit";
document.body.appendChild(formSalary);

/*First line*/
let grossMonthlySalary = document.createElement("p");
formSalary.appendChild(grossMonthlySalary);

let labelgrossMonthlySalary = document.createElement("label");
labelgrossMonthlySalary.setAttribute("for", "grossMonthlySalary");
labelgrossMonthlySalary.textContent = "Salaire mensuel brut";
grossMonthlySalary.appendChild(labelgrossMonthlySalary);

let inputgrossMonthlySalary = document.createElement("input");
inputgrossMonthlySalary.type = "number";
inputgrossMonthlySalary.name = "grossMonthlySalary";
grossMonthlySalary.appendChild(inputgrossMonthlySalary);

/*Second line*/
let netMonthlySalary = document.createElement("p");
formSalary.appendChild(netMonthlySalary);

let labelnetMonthlySalary = document.createElement("label");
labelnetMonthlySalary.setAttribute("for", "netMonthlySalary");
labelnetMonthlySalary.textContent = "Salaire mensuel net";
netMonthlySalary.appendChild(labelnetMonthlySalary);

let inputnetMonthlySalary = document.createElement("input");
inputnetMonthlySalary.type = "number";
inputnetMonthlySalary.name = "netMonthlySalary";
netMonthlySalary.appendChild(inputnetMonthlySalary);

/*Third line*/
let grossAnnualSalary = document.createElement("p");
formSalary.appendChild(grossAnnualSalary);

let labelgrossAnnualSalary = document.createElement("label");
labelgrossAnnualSalary.setAttribute("for", "grossAnnualSalary");
labelgrossAnnualSalary.textContent = "Salaire annuel brut";
grossAnnualSalary.appendChild(labelgrossAnnualSalary);

let inputgrossAnnualSalary = document.createElement("input");
inputgrossAnnualSalary.type = "number";
inputgrossAnnualSalary.name = "grossAnnualSalary";
grossAnnualSalary.appendChild(inputgrossAnnualSalary);

/*Fourth line*/
let netAnnualSalary = document.createElement("p");
formSalary.appendChild(netAnnualSalary);

let labelnetAnnualSalary = document.createElement("label");
labelnetAnnualSalary.setAttribute("for", "netAnnualSalary");
labelnetAnnualSalary.textContent = "Salaire annuel net";
netAnnualSalary.appendChild(labelnetAnnualSalary);

let inputnetAnnualSalary = document.createElement("input");
inputnetAnnualSalary.type = "number";
inputnetAnnualSalary.name = "netAnnualSalary";
netAnnualSalary.appendChild(inputnetAnnualSalary);

/*Action performed when a value is entered*/
inputgrossMonthlySalary.addEventListener("change", complete, false);
inputnetMonthlySalary.addEventListener("change", complete, false);
inputgrossAnnualSalary.addEventListener("change", complete, false);
inputnetAnnualSalary.addEventListener("change", complete, false);

  /*value calculation function*/
function complete() {
  if (inputgrossMonthlySalary.value.lenght !== 0 && inputgrossMonthlySalary.value === 0 && inputgrossAnnualSalary.value.lenght === 0 && inputnetAnnualSalary.value.lenght === 0) {
    let valueGrossMonthlySalary = inputgrossMonthlySalary.value;
    let valueNetMonthlySalary = valueGrossMonthlySalary / 1.298;
    inputnetMonthlySalary.value = valueNetMonthlySalary;
    let valueGrossAnnualSalary = valueGrossMonthlySalary * 12;
    inputgrossAnnualSalary.value = valueGrossAnnualSalary;
    let valueNetAnnualSalary = (valueGrossMonthlySalary / 1.298) * 12;
    inputnetAnnualSalary.value = valueNetAnnualSalary
    /*console.log(inputnetAnnualSalary);*/
} else if (inputgrossMonthlySalary.value.lenght === 0 && inputgrossMonthlySalary.value !== 0 && inputgrossAnnualSalary.value.lenght === 0 && inputnetAnnualSalary.value.lenght === 0) {
    let valueNetMonthlySalary = inputnetMonthlySalary.value
    let valueGrossMonthlySalary = valueNetMonthlySalary * 1.298;
    inputgrossMonthlySalary.value = valueGrossMonthlySalary;
    let valueGrossAnnualSalary = (valueNetMonthlySalary * 1.298) * 12;
    inputgrossAnnualSalary.value = valueGrossAnnualSalary;
    let valueNetAnnualSalary = valueNetMonthlySalary * 12;
    inputnetAnnualSalary.value = valueNetAnnualSalary
  } else if (inputgrossMonthlySalary.value.lenght === 0 && inputgrossMonthlySalary.value === 0 && inputgrossAnnualSalary.value.lenght !== 0 && inputnetAnnualSalary.value.lenght === 0) {
    let valueGrossAnnualSalary = inputgrossAnnualSalary.value;
    let valueGrossMonthlySalary = valueGrossAnnualSalary / 12;
    inputgrossMonthlySalary.value = valueGrossMonthlySalary;
    let valueNetMonthlySalary = (valueGrossAnnualSalary / 12) / 1.298;
    inputnetMonthlySalary.value = valueNetMonthlySalary;
    let valueNetAnnualSalary = valueGrossAnnualSalary / 12;
    inputnetAnnualSalary.value = valueNetAnnualSalary;
  } else if (inputgrossMonthlySalary.value.lenght === 0 && inputgrossMonthlySalary.value === 0 && inputgrossAnnualSalary.value.lenght === 0 && inputnetAnnualSalary.value.lenght !== 0) {
    let valueNetAnnualSalary = inputnetAnnualSalary.value;
    let valueGrossMonthlySalary = (valueNetAnnualSalary * 1.298) / 12;
    inputgrossMonthlySalary.value = valueGrossMonthlySalary;
    let valueNetMonthlySalary = valueNetAnnualSalary / 12;
    inputnetMonthlySalary.value = valueNetMonthlySalary;
    let valueGrossAnnualSalary = valueNetAnnualSalary * 1.298;
    inputgrossAnnualSalary.value = valueGrossAnnualSalary;
  }
}



/*EXERCICE 3*/
function f3(sequence) {
  let i = 0; /*intermediate variable*/
let currentElmt; /*recovery of the current element*/
while (i < sequence.length) { /*continuation condition*/
currentElmt = sequence[i]; /*recovery of the current element*/
i++; /*updating the condition*/
if (currentElmt % 2 === 0) { /*sequential search*/
console.log(currentElmt);
    }
  }
}

let number = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];

f3(number);

/*EXERCICE 4*/
function f4(sequence) {
  let i = 0; /*intermediate variable*/
let currentElmt; /*recovery of the current element*/
while (i < sequence.length) { /*continuation condition*/
currentElmt = sequence[i]; /*recovery of the current element*/
i++; /*updating the condition*/
if (currentElmt === "mais" || currentElmt === "où" || currentElmt === "et" || currentElmt === "donc" || currentElmt === "or" || currentElmt === "ni" || currentElmt === "car") { /*sequential search*/
 console.log(currentElmt);
    }
  }
};

let word = ["voiture", "mais", "chien", "or"];

f4(word);

/*EXERCICE 5*/

function f5(sequence) {
  let i = 0; /*intermediate variable*/
  let currentElmt; /*recovery of the current element*/
  while (i < 128) { /*continuation condition*/
    currentElmt = sequence[i]; /*recovery of the current element*/
    i++; /*updating the condition*/
    if (sequence.length > 128) {
      console.log(currentElmt);
    }
  }
};

let number = Math.floor(Math.random() * 101)
f5(number);
