const element = document.createElement("div");
element.style.position = "absolute";
element.style.width = "100%";
element.style.height = "100px";
element.style.top = 0;
element.style.left = 0;
element.style.backgroundColor = "red";

document.body.appendChild(element);

const handleResponse = (message) => {
  console.log("Response recd. ", message);
};

const handleError = (error) => {
  console.error(error);
};

window.addEventListener("click", () => {
  console.log("Click registered!");
  browser.runtime
    .sendMessage({
      message: "Click registered",
    })
    .then(handleResponse, handleError);
});
