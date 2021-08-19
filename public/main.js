const status = document.getElementById("status");

document.getElementById("submit-button").addEventListener("click", (e) => {
  e.preventDefault();
  console.log("click");
  const email = document.getElementById("email-address").value;
  const message = document.getElementById("message").value;

  if (email === "" || message === "") {
    status.innerHTML = "Please enter a valid email and a message.";
    status.style.color = "red";
  } else {
    status.innerHTML = "Thank you for your submission.";
    status.style.color = "green";
    document.getElementById("submit-button").style.display = "none";
  }

  setTimeout(() => {
    status.innerHTML = "";
  }, 3000);
});
