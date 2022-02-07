const chesBoard = document.getElementById("chesboard");
const submitBtn = document.getElementById("submit-btn");
const numberElement = document.getElementById("number");
let boxes;

const makeRow = (number) => {
  const row = document.createElement("div");
  row.classList.add("row");
  const rowToggleColor = number % 2 === 0 ? true : false;
  let flag = rowToggleColor;
  let col = boxes;
  while (col--) {
    const element = document.createElement("div");
    if (flag) {
      element.classList.add("white-box");
    } else {
      element.classList.add("black-box");
    }
    if (boxes > 25) {
      element.style.width = "10px";
      element.style.height = "20px";
    }
    flag = !flag;
    row.appendChild(element);
  }
  return row;
};

submitBtn.addEventListener("click", () => {
  boxes = Number(numberElement.value);
  let tempBox = boxes;
  if (boxes > 50) {
    alert("Please use bigger screen to view this layout");
  }
  if (chesBoard.hasChildNodes()) {
    chesBoard.innerHTML = "";
  }
  while (tempBox--) {
    chesBoard.appendChild(makeRow(tempBox));
  }
});
