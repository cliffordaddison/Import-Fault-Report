let btn = document.querySelectorAll(".click-box");
let btns = document.querySelectorAll("#event-start");
let keepActive = document.getElementById("keep-active-btn");
let eventResolved = document.getElementById("event-resolved-btn");
let timer = document.getElementById("timer");

let cancel = document.getElementById("cancel-btn");

let saveTime;
let totalSeconds = 0;
let countSeconds = 0;

function countUpTimer() {
  ++totalSeconds;
  let hour = Math.floor(totalSeconds / 3600);
  let minute = Math.floor((totalSeconds - hour * 3600) / 60);
  var seconds = totalSeconds - (hour * 3600 + minute * 60);

  if (hour < 10) {
    hour = `0${hour}`;
  }

  if (minute < 10) {
    minute = `0${minute}`;
  }

  if (seconds < 10) {
    seconds = `0${seconds}`;
  }

  saveTime = `${hour}:${minute}:${seconds}`;
  timer.textContent = `${saveTime}`;
}

// This loops through all the buttons with the class ".click-box" and renders the function contained in there
for( let i = 0; i < btn.length; i++) {
    btn[i].onclick = function() {
      keepActive.style.visibility = "visible";
      eventResolved.style.visibility = "visible";

      btn[i].style.backgroundColor = "darkred";
      btn[i].style.color = "white";

      setInterval(function() {
        ++countSeconds;
      }, 1000);
      

      // The time counter function is called
      timerCountUp = setInterval(countUpTimer, 1000);
    }

    let disableButton = () => {
      for (let j = 0; j < btns.length; j++) {     
          btns[j].disabled = true;
      }
    };

    btn[i].addEventListener("click", disableButton);
}


keepActive.onclick = function click() {
  // window.history.back();
  alert(timer.textContent);
}

eventResolved.onclick = function click() {
  if(confirm("Is the issue resolved?")) {
    clearInterval(timerCountUp);
    window.history.back();
  }
  // push information to the database

}
