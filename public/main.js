const status = document.getElementById("status");

// Some very basic validation for the form.

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

// The Halloween Countdown is hosted on Heroku which means that it takes some time to
// wake up. If it is in a sleeping state when trying to load the image for the countdown,
// it just won't load the image at all. This function just fetches the svg data from
// the heroku server and then replaces the loading message with the actual svg.

window.addEventListener("load", async () => {
  console.log("Page Loaded...");
  // make sure Heroku is actually awake.
  const data = await fetch("https://halloween-countdown.herokuapp.com/");
  if (data.ok) {
    const svgData = await data.text();
    console.log(svgData);
    document.getElementById("halloween-container").innerHTML = svgData;
    console.log(data);
  } else {
    document.getElementById("halloween-container").innerHTML = `
      <p>There appears to be an error with Heroku... but trust me this thing does work. 😉</p>
    `;
  }
});
