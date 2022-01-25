function animateHandleTwo(startValue, endValue, animateValue) {
  // * startValue 매개변수가 숫자형 데이터 타입이어야만 알고리즘이 실행된다.
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
    }, 16);
  } else {
    console.log("매개변수 타입을 체크하세요.");
  }
}
// animateHandleTwo(0, 100, 1);
animateHandleTwo(0, 10, 1);