function appendAlert(message, type) {
  const alertPlaceholder = document.getElementById("liveAlertPlaceholder");
  const wrapper = document.createElement("div");
  wrapper.innerHTML = [
    `<div class="alert alert-${type} alert-dismissible" role="alert">`,
    `   <div>${message}</div>`,
    '   <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>',
    "</div>",
  ].join("");
  alertPlaceholder.append(wrapper);
}

function validateEmail() {
  const email = document.getElementById("email").value;
  //console.log(email);
  const valid = email.includes("@");
  if (!valid) {
    //alert("invalid email!");
    appendAlert("Invalid email!", "danger");
  }
  return valid;
}

function validateEmail1(email) {
  //console.log(email);
  const valid = email.includes("@");
  if (!valid) {
    //alert("invalid email!");
    //appendAlert("Invalid email!", "danger");
    console.log("invalid emai!");
  }
  return valid;
}

validateEmail1("subu@dsaa.com");
