let hrs = document.getElementById("hours");
let min = document.getElementById("minutes");
let sec = document.getElementById("second");

// console.log(currentTime.getHours());

setInterval(() => {
  let currentTime = new Date();
  hrs.innerHTML = currentTime.getHours();
  min.innerHTML = currentTime.getMinutes();
  sec.innerHTML = currentTime.getSeconds();
}, 1000);
