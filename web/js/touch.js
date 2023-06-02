var touchCount = 0;
var touchStartTime = 0;

document.addEventListener('touchstart', function(event) {
  if (event.touches.length === 1) {
    touchCount++;
    
    if (touchCount === 1) {
      touchStartTime = new Date().getTime();
    }
    
    if (touchCount === 2) {
      var currentTime = new Date().getTime();
      var elapsedTime = currentTime - touchStartTime;
      
      if (elapsedTime < 1000) {
        window.location.href = 'index-1.html'; // index-1.html로 이동
      }
    } else if (touchCount === 3) {
      var currentTime = new Date().getTime();
      var elapsedTime = currentTime - touchStartTime;
      
      if (elapsedTime < 1000) {
        window.location.href = 'index-2.html'; // index-2.html로 이동
      }
    } else if (touchCount === 4) {
      var currentTime = new Date().getTime();
      var elapsedTime = currentTime - touchStartTime;
      
      if (elapsedTime < 1000) {
        window.location.href = 'index-3.html'; // index-3.html로 이동
      }
    }
  }
});

document.addEventListener('touchend', function(event) {
  if (event.touches.length === 0) {
    touchCount = 0;
    touchStartTime = 0;
  }
});
