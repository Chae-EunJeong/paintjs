const canvas = document.getElementById("jsCanvas");
const ctx = canvas.getContext("2d");
const colors = document.getElementsByClassName("jsColor");
const range = document.getElementById("jsRange");
const mode = document.getElementById("jsMode");
const eraser = document.getElementById("jsErase");
const clear = document.getElementById("jsClear");
const saveBtn = document.getElementById("jsSave");

const INITIAL_COLOR = "2c2c2c";
const CANVAS_SIZE = 700;
canvas.width = CANVAS_SIZE;
canvas.height = CANVAS_SIZE;

ctx.fillStyle = "white";
ctx.fillRect(0, 0, CANVAS_SIZE, CANVAS_SIZE);
ctx.strokeStyle = INITIAL_COLOR;
ctx.fillStyle = INITIAL_COLOR;
ctx.lineWidth = 2.5;

let painting = false;
let filling = false;
let eraseColor = "white";

function stopPainting() {
  painting = false;
}

function startPainting() {
  painting = true;
}

function onMouseMove(event) {
  // event 객체에서 캔버스 위에서의 좌표값인 offsetX, offsetY만 가져오기
  const x = event.offsetX;
  const y = event.offsetY;

  if (!painting) {
    // path는 line이다.
    // 캔버스 위에서 마우스를 움직이는 모든 순간이 path를 만듦
    ctx.beginPath();
    ctx.moveTo(x, y);
  } else {
    // 클릭한채로 드래그를 하면 선이 그려짐
    // 마우스를 움직이는 내내 계속 발생
    ctx.lineTo(x, y);
    ctx.stroke(); // 색 채우기
  }
}

function handleColorClick(event) {
  const color = event.target.style.backgroundColor;
  ctx.strokeStyle = color;
  ctx.fillStyle = color;
}

function handleRangeChange(event) {
  const size = event.target.value;
  ctx.lineWidth = size;
}

function handleModeClick() {
  if (filling === true) {
    filling = false;
    mode.innerText = "Fill";
  } else {
    filling = true;
    mode.innerText = "Paint";
  }
}

function handleCanvasClick() {
  // 캔버스 전체를 채운 상태에서 그림그리기 위해 조건문
  if (filling) {
    ctx.fillRect(0, 0, CANVAS_SIZE, CANVAS_SIZE);
    eraseColor = ctx.fillStyle;
  }
}

function handleEraseClick() {
  ctx.strokeStyle = eraseColor;
  ctx.lineWidth *= 1.5;
}

function handleClearClick() {
  ctx.clearRect(0, 0, CANVAS_SIZE, CANVAS_SIZE);
}

function handleCM(event) {
  event.preventDefault();
}

function handleSaveClick() {
  const image = canvas.toDataURL("image/png");
  const link = document.createElement("a");
  link.href = image;
  link.download = "PaintJS";
  link.click();
}

if (canvas) {
  // canvas 위에서 움직이는 마우스 인식하기
  canvas.addEventListener("mousemove", onMouseMove);
  // canvas 위에서 마우스 클릭했을 때
  canvas.addEventListener("mousedown", startPainting);
  // canvas 위에서 클릭한 마우스를 뗐을 때
  canvas.addEventListener("mouseup", stopPainting);
  // 마우스가 canvas를 벗어났을 때
  canvas.addEventListener("mouseleave", stopPainting);
  // fill을 누르고 선택한 색상 클릭 후 캔버스 눌렀을 때 전체 색 바뀌게 하기
  canvas.addEventListener("click", handleCanvasClick);
  // 마우스 우클릭으로 컨텍스트메뉴 나오지 않도록 하기
  canvas.addEventListener("contextmenu", handleCM);
}

Array.from(colors).forEach((color) =>
  color.addEventListener("click", handleColorClick)
);

if (range) {
  range.addEventListener("input", handleRangeChange);
}

if (mode) {
  mode.addEventListener("click", handleModeClick);
}

if (eraser) {
  eraser.addEventListener("click", handleEraseClick);
}
if (clear) {
  clear.addEventListener("click", handleClearClick);
}

if (saveBtn) {
  saveBtn.addEventListener("click", handleSaveClick);
}
