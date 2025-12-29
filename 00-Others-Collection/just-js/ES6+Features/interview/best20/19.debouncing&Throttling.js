//19. Debouncing & Throttling
//Debouncing and throtting are techniques to control function execution frequency, often in response to events.
//Deboune(delay execution):
function debounce(func, delay) {
  let timeout;
  return function (...args) {
    clearTimeout(timeout);
    timeout = setTimeout(() => func.apply(this, args), delay);
  };
}

window.addEventListener(
  "resize",
  debounce(() => console.log("Resized!"), 500)
);

//Throttle(limit execution):
function throttle(func, limit) {
  let inThrottle;
  return function (...args) {
    if (!inThrottle) {
      func.apply(this, args);
      inThrottle = true;
      setTimeout(() => (inThrottle = false), limit);
    }
  };
}

window.addEventListener(
  "scroll",
  throttle(() => console.log("Scrolling!"), 200)
);
