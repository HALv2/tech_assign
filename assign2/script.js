function myCalc() {
  const submitedValues = document.querySelector("#fizzBuzzForm").elements;
  
  const rawFizz = submitedValues[0].value;
  const rawBuzz = submitedValues[1].value;
  
  const fizzNumber = Number(rawFizz);
  const buzzNumber = Number(rawBuzz);
  
  const checkIfInteger = (rawFizz && rawBuzz) &&  //check if input is empty.
    Number.isInteger(fizzNumber) && Number.isInteger(buzzNumber); //check if input is integer.

  if (checkIfInteger) {
    let i = Math.min(fizzNumber, buzzNumber);      
    for (i; i < 100; i++) {
      if (i % fizzNumber === 0 && i % buzzNumber === 0) {
        showResult("fizzAndBuzz", i);
      } else if (i % fizzNumber === 0){
        showResult("fizz", i);
      } else if (i % buzzNumber === 0){
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