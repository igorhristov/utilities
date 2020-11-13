// *** selectors ***
const form = document.querySelector("#form");
const username = document.querySelector("#username");
const email = document.querySelector("#email");
const password = document.querySelector("#password");
const password2 = document.querySelector("#password2");

// *** event listeners ***
form.addEventListener("submit", function (e) {
  e.preventDefault();

  checkRequired([username, email, password, password2]);
  checkLength(username, 3, 15);
  checkLength(password, 6, 20);
  checkEmail(email);
  checkPasswordsMatch(password, password2);
});

// ****functions****
// check required field
function checkRequired(inputArr) {
  inputArr.forEach(function (input) {
    if (input.value.trim() === "") {
      showErrors(input, `${getFieldName(input)} is required`);
    } else {
      showSuccess(input);
    }
  });
}

//Get fieldname
function getFieldName(input) {
  return input.id.charAt(0).toUpperCase() + input.id.slice(1);
}

// Check input legnth
function checkLength(input, min, max) {
  if (input.value.length < min) {
    showErrors(
      input,
      `${getFieldName(input)} must be at least ${min} characters`
    );
  } else if (input.value.length > max) {
    showErrors(
      input,
      `${getFieldName(input)} must be less then ${max} characters`
    );
  } else {
    showSuccess(input);
  }
}

// Check password match
function checkPasswordsMatch(input1, input2) {
  if (input1.value !== input2.value) {
    showErrors(input2, "Passwords do not match");
  }
}

// Show error outline
function showErrors(input, message) {
  const formControl = input.parentElement;
  formControl.className = "form-control error";
  const small = formControl.querySelector("small");
  small.innerText = message;
}

// Show success outline
function showSuccess(input) {
  const formControl = input.parentElement;
  formControl.className = "form-control success";
}

// Check if email is valid
function checkEmail(input) {
  const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  if (re.test(input.value.trim())) {
    showSuccess(input);
  } else {
    showErrors(input, "Email is not valid");
  }
}

// Check if email is valid
// function validateEmail(email) {
//     const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
//     return re.test(String(email).toLowerCase());
//   }

// *** event listeners ***
// form.addEventListener("submit", function (e) {
//   e.preventDefault();
//   if (username.value === "") {
//     showErrors(username, "Username is required");
//   } else if (username.value.length < 4) {
//     showErrors(username, "Username need more then 3 caracters");
//   } else {
//     showSuccess(username);
//   }

//   if (email.value === "") {
//     showErrors(email, "Email is required");
//   } else if (!validateEmail(email.value)) {
//     showErrors(email, "Email is not valid");
//   } else {
//     showSuccess(email);
//   }

//   if (password.value === "") {
//     showErrors(password, "Password is required");
//   } else {
//     showSuccess(password);
//   }

//   if (password2.value === "") {
//     showErrors(password2, "Password 2 is required");
//   } else {
//     showSuccess(password2);
//   }
// });
