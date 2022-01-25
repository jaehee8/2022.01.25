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