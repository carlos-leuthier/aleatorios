const table = document.getElementByid("list");
const inputNum = document.getElementByid("num");
const inputCol = document.getElementByid("col");
const inputMin = document.getElementByid("min");
const inputMax = document.getElementByid("max");
const btGerador = document.getElementByid("gerador");

function generateNumbers() {
  let num = parseInt(inputNumbers.value);
  let col = parseInt(inputColumns.value);
  let min = parseInt(inputMin.value);
  let max = parseInt(inputMax.value);

  table.innerHTML = "";

  for (let i = 0; i < num; i++) {
      if (i % col == 0 ) {
        table.innerHTML += "\n";
      }
      table.innerHTML += `\t${Math.floor(Math.random() * (max - min + 1)) + min}`;
  }

  inputNum.value "";
  inputCol.value "";
  inputMin.value "";
  inputMax.value "";

}

btGerador.oneclick = geradorNum;
