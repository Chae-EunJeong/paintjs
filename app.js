const canvas = document.getElementById("jsCanvas");

let painting = false;

function stopPainting() {
  painting = false;
}

function onMouseMove(event) {
  // event 객체에서 캔버스 위에서의 좌표값인 offsetX, offsetY만 가져오기
  const x = event.offsetX;
  const y = event.offsetY;

  console.log(x, y);
}

function onMouseDown(event) {
  painting = true;
}

function onMouseUp(event) {
  stopPainting();
}

if (canvas) {
  // canvas 위에서 움직이는 마우스 인식하기
  canvas.addEventListener("mousemove", onMouseMove);
  // canvas 위에서 마우스 클릭했을 때
  canvas.addEventListener("mousedown", onMouseDown);
  // canvas 위에서 클릭한 마우스를 뗐을 때
  canvas.addEventListener("mouseup", onMouseUp);
  // 마우스가 canvas를 벗어났을 때
  canvas.addEventListener("mouseleave", stopPainting());
}
