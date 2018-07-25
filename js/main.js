// The element myBtn listens for the "click" and displays the time
document.getElementById("myBtn").addEventListener("click", displayDate);


function displayDate() {
    document.getElementById("Practice").innerHTML = Date()};

    let btn = document.querySelector('button');

    function random(number) {
      return Math.floor(Math.random()*(number+1));
    }
    
    btn.onclick = function() {
      var rndCol = 'rgb(' + random(255) + ',' + random(255) + ',' + random(255) + ')';
      document.body.style.background = rndCol;
      
    }

    
   
    // backgroundColor
   
    