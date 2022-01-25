function animateHandleOne(startValue, endValue, animateValue) {
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
}
// animateHandleOne(0, 100, 1);


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

//! ************************************************************************************************
function animateHandleFour(startValue, endValue, animateValue, speed) {
  if(typeof startValue === 'number') {
    let timer = setInterval(function() {
      if(startValue < endValue) {
        startValue = startValue + animateValue;
        
      } else {
        clearInterval(timer);
      }
    }, speed);
  } else {
    console.log("매개변수 타입을 체크하세요.");
  }
}

console.log(animateHandleFour(0, 100, 1, 32));
