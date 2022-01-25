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
animateHandleOne(0, 100, 1);