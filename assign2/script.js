document.getElementById("click").addEventListener("click", myCalc);

function myCalc(event) {
  removePreviousResult();
  
  const rawFizz = getInputValue('fizz');
  const rawBuzz = getInputValue('buzz');
  
  const inputNumber = { 
    fizz: Number(rawFizz),
    buzz: Number(rawBuzz)
  }
  
  const isInteger = (rawFizz && rawBuzz) &&  //check if input is empty.
    Number.isInteger(inputNumber.fizz) && Number.isInteger(inputNumber.buzz); //check if input is integer.

  if (isInteger) {
    let i = Math.min(inputNumbers.fizz, inputNumbers.buzz);      
    for (i; i < 100; i++) {
      if (i % inputNumbers.fizz === 0 && i % inputNumbers.buzz === 0) {
        createElemntsToshowResult("fizzAndBuzz", i);
      } else if (i % inputNumbers.fizz === 0){
        createElemntsToshowResult("fizz", i);
      } else if (i % inputNumbers.buzz === 0){
        createElemntsToshowResult("buzz", i);
      }
    }
  } else {
    createElemntsToshowResult('整数値を入力してください。', '');
  }
}

function getInputValue(v){
  return document.getElementById(v).value;
}

function createElemntsToshowResult(result, num) {
  const node = document.createElement("P"); 
  const content = document.createTextNode(`${result} ${num}`);
  node.appendChild(content);
  document.querySelector(".result").appendChild(node);
}

function removePreviousResult() {
  const node = document.querySelector(".result");
  while (node.hasChildNodes()) {
    node.removeChild(node.lastChild);
  }
}