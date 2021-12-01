let time = document.getElementById("clock");
let text = document.getElementById("currenttext");
var d = new Date();
let currentTime = d.getHours() + ":" + d.getMinutes(); //To get current time
text.innerHTML = currentTime;

let button = document.getElementById("b1");
button.addEventListener("click", (e) => {
  e.preventDefault();
  let UserTime = time.value;
  console.log("Usertime is" + UserTime);
  setInterval(() =>
   {
    var d = new Date();
    let currentTime = d.getHours() + ":" + d.getMinutes();
    console.log("Current Updated  time is" + currentTime);
    if (currentTime == UserTime) {
      var sound = new Audio(
        "https://www.freespecialeffects.co.uk/soundfx/animals/dog1.wav"
      );
      sound.play();
    }
  }, 1000);
});

// Check If CurrentTime Matches The UserTime Or Not
