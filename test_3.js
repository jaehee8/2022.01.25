function animateHandleThree(startValue, endValue, animateValue, speed) {
  if(typeof startValue === 'number') {
    let timer = setInterval(function() {
      if(startValue < endValue) {
        startValue = startValue + animateValue;
        console.log(startValue);
      } else {
        currentValue = startValue;
        console.log("done");
        clearInterval(timer);
      }
      // * speed 라는 매개변수를 알고리즘으로 핸들링 할 수 있도록 조치했다. 
    }, speed);
  } else {
    console.log("매개변수 타입을 체크하세요.");
  }
}
// animateHandleThree(0, 100, 1, 500);
animateHandleThree(0, 10, 1, 500);