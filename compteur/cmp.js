let count = 0;

document.getElementById("btn+").addEventListener("click", function () {
  
  let messageElemant = document.getElementById("message");

  messageElemant.textContent = count++;
  messageElemant.style.color = "black";
});

document.getElementById("btn-").addEventListener("click", function () {
  let messageElemant = document.getElementById("message");

  messageElemant.textContent = count--;
  messageElemant.style.color = "black";
  
});

document.getElementById("btnRest").addEventListener("click", function () {
  document.getElementById("message").textContent = count = 0;
});