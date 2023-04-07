function preenchervisor(num) {
  const visor = document.querySelector(".visor");
  const selectedNumber = document.createElement("span");
  selectedNumber.innerHTML = num;
  window.operationsArray.push(num);
  visor.append(selectedNumber);
}

function calcular() {
  const visor = document.querySelector(".visor");
  const resultado = eval(window.operationsArray.join(""));
  visor.innerHTML = resultado;
  window.operationsArray = [];
}

function apagarvisor(){
  const visor = document.querySelector(".visor");
  visor.innerHTML = "";
}

function apagaUmItem(){
  const visor = document.querySelector(".visor").innerHTML;
  document.querySelector(".visor").innerHTML = visor.substring(0, visor.length - 1);
}

const createNumber = (num) => {
  const div = document.createElement("div");
  div.className = "number";
  div.innerHTML = `
        <span> ${num} </span>
    `;
  div.onclick = () => preenchervisor(num);
  return div;
};

const createNumbers = (reference) => {
  const divCalculadora = document.getElementById(reference);

  const divNumbers = document.createElement("div");
  divNumbers.className = "numbers";

  divCalculadora.append(divNumbers);

  let lin = document.createElement("div");
  lin.className = "row";
  divNumbers.appendChild(lin);

  for (let index = 9; index > 0; index--) {
    const btn = createNumber(index);
    if (index % 3 == 0) {
      lin = document.createElement("div");
      lin.className = "row";
      divNumbers.appendChild(lin);
    }

    lin.prepend(btn);
  }

  const btnZero = createNumber(0);
  const btnDot = createNumber(".");
  const btnEquals = document.createElement("div");
  btnEquals.className = "operator";
  btnEquals.innerHTML = `
        <span> = </span>
    `;
  btnEquals.onclick = () => calcular();

  lin = document.createElement("div");
  lin.className = "row";
  divNumbers.appendChild(lin);

  lin.prepend(btnZero);
  lin.appendChild(btnDot);
  lin.appendChild(btnEquals);
};

const createOperators = (reference) => {
  const divCalculadora = document.getElementById(reference);

  const divOperators = document.createElement("div");
  divOperators.className = "operators";

  divCalculadora.append(divOperators);

  const btnPlus = document.createElement("div");
  btnPlus.className = "operator";
  btnPlus.innerHTML = `
        <span> + </span>
    `;
  btnPlus.onclick = () => preenchervisor("+");

  const btnMinus = document.createElement("div");
  btnMinus.className = "operator";
  btnMinus.innerHTML = `
        <span> - </span>
    `;
  btnMinus.onclick = () => preenchervisor("-");

  const btnTimes = document.createElement("div");
  btnTimes.className = "operator";
  btnTimes.innerHTML = `
        <span> * </span>
    `;
  btnTimes.onclick = () => preenchervisor("*");

  const btnDivide = document.createElement("div");
  btnDivide.className = "operator";
  btnDivide.innerHTML = `
        <span> / </span>
    `;
  btnDivide.onclick = () => preenchervisor("/");

  const btnClear = document.createElement("div");
  btnClear.className = "operator";
  btnClear.innerHTML = `
        <span> C </span>
    `;
  btnClear.onclick = () => apagarvisor();

  const btnClearOne = document.createElement("div");
  btnClearOne.className = "operator";
  btnClearOne.innerHTML = `
        <span> < </span>
    `;
  btnClearOne.onclick = () => apagaUmItem();

  let lin = document.createElement("div");
  lin.className = "row";
  divOperators.appendChild(lin);

  let lin2 = document.createElement("div");
  lin2.className = "row";
  divOperators.appendChild(lin2);

  lin.prepend(btnPlus);
  lin.appendChild(btnMinus);
  lin.appendChild(btnTimes);
  lin2.prepend(btnDivide);
  lin2.appendChild(btnClear);
  lin2.appendChild(btnClearOne);
};

const createVisor = (reference) => {
  const divCalculadora = document.getElementById(reference);
  let visor = document.createElement("div");
  visor.className = "visor";
  divCalculadora.appendChild(visor);
};

const executar = (reference) => {
  console.log("carregando coisas aqui..... aguarde");
  createVisor(reference);
  createNumbers(reference);
  createOperators(reference);
  window.operationsArray = [];
};

executar("calculadora");
