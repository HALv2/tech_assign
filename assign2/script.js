function myCalc() {
  const rawValues = document.querySelector("#fizzBuzzForm").elements;
  
  const rawFizz = rawValues[0].value;
  const rawBuzz = rawValues[1].value;
  
  const inputNumbers = { 
    fizz: Number(rawFizz),
    buzz: Number(rawBuzz),
  }
  
  const checkIfInteger = (rawFizz && rawBuzz) &&  //check if input is empty.
    Number.isInteger(inputNumbers.fizz) && Number.isInteger(inputNumbers.buzz); //check if input is integer.

  if (checkIfInteger) {
    let i = Math.min(inputNumbers.fizz, inputNumbers.buzz);      
    for (i; i < 100; i++) {
      if (i % inputNumbers.fizz === 0 && i % inputNumbers.buzz === 0) {
        showResult("fizzAndBuzz", i);
      } else if (i % inputNumbers.fizz === 0){
        showResult("fizz", i);
      } else if (i % inputNumbers.buzz === 0){
        showResult("buzz", i);
      }
    }
  } else {
    showResult("整数値を入力してください。", "");
  }
}

// create elements to show result.
function showResult(result, num) {
  let node = document.createElement("P"); 
  let content = document.createTextNode(`${result} ${num}`);
  node.appendChild(content);
  document.querySelector(".result").appendChild(node);
}