# Painting Board made with Vanilla JS

- Vanilla JavaScript로 그림판 만들기

## code

- JS 변수 타입
  - const : 큼직한거. document.getElement~ 혹은 canvas.getContext 로 얻어오는 것들 - 함수 안에서 변수 생성할 때.
  - let : 코드 전체에서 가끔 쓰이는 것.
- html tag
  - JS : id tag
  - CSS : class tag
- reset.css
  - https://meyerweb.com/eric/tools/css/reset/
- save image
  - canvas가 pixel을 다루기 때문에 이미지 저장 기능은 다 내장되어져있음

## study

#### HTML

- canvas : context를 가진 HTML 태그
  - JS에서 context 이용
  - canvas mdn 참고 : https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D

#### CSS

- all: unset
  - 브라우저에 적용된 기본 스타일 값 초기화

#### JS

- Element: mousemove event
  - mousemove, mousedown, mouseup, mouseleave, mouseenter, mouseout, ...
  - https://developer.mozilla.org/en-US/docs/Web/API/Element/mousemove_event
- MouseEvent 객체에서 offsetX, offsetY 가 캔버스 위에서의 좌표.
  - clientX, clientY는 전체 윈도우에서의 좌표
- context
  - canvas html tag 이용
  - canvas안에서 픽셀을 다룸
  - lineWidth : 설정하는 선 굵기에 따름
  - path : 모든 선과 관련된 기능. beginPath(), ... -> mouseMove에서 사용
    - 선의 시작점과 끝점
- addEventListener
  - https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener
  - parameter로 (type, 그 이벤트 발생시 동작하는 함수)
- save image
  - https://developer.mozilla.org/en-US/docs/Web/API/HTMLCanvasElement/toDataURL
  - 이미지 저장을 위해 a 태그 생성 : const link = document.createElement("a");
