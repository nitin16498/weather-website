const weatherForm = document.querySelector("form");
const search = document.querySelector("input");
const messageOne = document.querySelector("#message-1");
const messageTwo = document.querySelector("#message-2");

messageOne.textContent = "Enter any area in the above text box";

weatherForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const location = search.value;

  const url = "http://localhost:3000/weather?address=" + location;
  messageOne.textContent = "Loading...";

  fetch(url).then((response) => {
    response.json().then((data) => {
      if (data.error) {
        console.log(data.error);

        //rendering on webpage
        messageOne.textContent = data.error;
        messageTwo.textContent = "";
      } else {
        console.log(data.location);
        console.log(data.forecastData);

        //rendering on webpage
        messageOne.textContent = data.location;
        messageTwo.textContent = data.forecastData;
      }
    });
  });
});
