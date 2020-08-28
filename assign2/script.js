document.querySelector("#fizzBuzzForm").addEventListener("submit", myCalc);

function myCalc(event) {
  removePreviousResult();
  event.preventDefault();

  const rawValues = document.querySelector("#fizzBuzzForm").elements;
  
  const rawFizz = rawValues[0].value;
  const rawBuzz = rawValues[1].value;
  
  const inputNumbers = { 
    fizz: Number(rawFizz),
    buzz: Number(rawBuzz),
  }
  
  const isInteger = (rawFizz && rawBuzz) &&  //check if input is empty.
    Number.isInteger(inputNumbers.fizz) && Number.isInteger(inputNumbers.buzz); //check if input is integer.

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
    createElemntsToshowResult("整数値を入力してください。", "");
  }
}


function createElemntsToshowResult(result, num) {
  let node = document.createElement("P"); 
  let content = document.createTextNode(`${result} ${num}`);
  node.appendChild(content);
  document.querySelector(".result").appendChild(node);
}

function removePreviousResult() {
  const node = document.querySelector(".result");
  while (node.hasChildNodes()) {
    node.removeChild(node.lastChild);
  }
}