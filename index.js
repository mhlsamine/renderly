const form = document.querySelector("form");
const statusTxt = form.querySelector(".button-area span");

form.onsubmit = (e) => {
  e.preventDefault();
  statusTxt.style.color = "#319b31";
  statusTxt.style.display = "block";

  let xhr = new XMLHttpRequest();
  xhr.open("POST", "message.php", true);
  xhr.setRequestHeader("From", "your-email@example.com"); // Set the From header

  xhr.onload = () => {
    if (xhr.readyState == 4 && xhr.status == 200) {
      let response = xhr.responseText;
      if (
        response.indexOf("Fields are required!") != -1 ||
        response.indexOf("Enter a valid email address!") != -1 ||
        response.indexOf("Sorry! Failed to send your message.") != -1
      ) {
        statusTxt.style.color = "red";
      } else {
        form.reset();
        setTimeout(() => {
          statusTxt.style.display = "none";
        }, 3000);
      }

      statusTxt.innerText = response;
    }
  };

  let formData = new FormData(form);
  xhr.send(formData);
};
