let form = document.querySelector("form"),
    formFieldName = document.querySelector(".name-field"),
    nameInput = document.querySelector("#user-name"),
    errorname = document.querySelector(".errorname span"),
    formFieldEmail = document.querySelector(".email-field"),
    emailInput = document.querySelector("#email"),
    erroremail = document.querySelector(".erroremail span"),
    formFieldphone = document.querySelector(".phone-field"),
    phoneInput = document.querySelector("#phone"),
    errorphone = document.querySelector(".errorphone span"),
    formFieldPass = document.querySelector(".password-field"),
    passwordInput = document.querySelector("#password"),
    errorpassword = document.querySelector(".errorpassword span"),
    formFieldPass2 = document.querySelector(".password2-field"),
    passwordInput2 = document.querySelector("#password2"),
    errorpassword2 = document.querySelector(".errorpassword2 span");

//? validtion
let nameValid = false;
let emailValid = false;
let phoneValid = false;
let passValid = false;
let pass2Valid = false;

//*setError function
function setError(element, error, message) {
    element.classList.add("invalid");
    element.classList.remove("valid");
    error.innerHTML = `${message}`;
}

//*setSuccess function
function setSuccess(element) {
    element.classList.remove("invalid");
    element.classList.add("valid");
}

//*clear function
function clear(element) {
    element.classList.remove("invalid");
    element.classList.remove("valid");
}

//*emptySubmit function
function emptySubmit(element, error, message) {
    element.classList.add("invalid");
    error.innerHTML = `${message}`;
}

//? name valid
let namePattern = /^[A-Za-z][a-z]{8,}(\d*)$/;

nameInput.addEventListener("change", (e) => {
    if (e.target.value.match(namePattern)) {
        setSuccess(formFieldName);
        nameValid = true;
    } else {
        setError(formFieldName, errorname, "Invalid username format");
    }

    if (e.target.value == "") {
        clear(formFieldName);
    }
});

//? email valid
let emailPattern = /^[a-zA-z]+(\d*)@[a-zA-z]+\.[a-zA-z]{2,3}$/;

emailInput.addEventListener("change", (e) => {
    if (e.target.value.match(emailPattern)) {
        setSuccess(formFieldEmail);
        emailValid = true;
    } else {
        setError(formFieldEmail, erroremail, "Invalid email format");
    }
    if (e.target.value == "") {
        clear(formFieldEmail);
    }
});

//? phone valid
let phonePattern = /^(011|012|015)\d{8}$/;

phoneInput.addEventListener("change", (e) => {
    if (e.target.value.match(phonePattern)) {
        setSuccess(formFieldphone);
        phoneValid = true;
    } else {
        setError(formFieldphone, errorphone, "Invalid phone format");
    }
    if (e.target.value == "") {
        clear(formFieldphone);
    }
});

//? password valid
let passwordPattern = /\w{8,}/;

passwordInput.addEventListener("change", (e) => {
    if (e.target.value.match(passwordPattern)) {
        setSuccess(formFieldPass);
        passValid = true;
    } else {
        setError(
            formFieldPass,
            errorpassword,
            "Password must be at least 8 character"
        );
    }
    if (e.target.value == "") {
        clear(formFieldPass);
    }
});

//? rewrite password valid
passwordInput2.addEventListener("change", (e) => {
    if (e.target.value != passwordInput.value && e.target.value.length >= 1) {
        setError(formFieldPass2, errorpassword2, "Passwords must match");
    } else if (e.target.value == passwordInput.value) {
        setSuccess(formFieldPass2);
        pass2Valid = true;
    } else if (e.target.value == "") {
        clear(formFieldPass2);
    }
});

//? on submit
form.addEventListener("submit", (e) => {
    if (
        nameValid === false ||
        emailValid === false ||
        phoneValid === false ||
        passValid === false ||
        pass2Valid === false
    ) {
        e.preventDefault();
        if (nameInput.value == "") {
            emptySubmit(formFieldName, errorname, "Username is required");
        }
        if (emailInput.value == "") {
            emptySubmit(formFieldEmail, erroremail, "Email is required");
        }
        if (phoneInput.value == "") {
            emptySubmit(formFieldphone, errorphone, "Phone is required");
        }
        if (passwordInput.value == "") {
            emptySubmit(formFieldPass, errorpassword, "Password is required");
        }
        if (passwordInput2.value == "") {
            emptySubmit(formFieldPass2, errorpassword2, "Confirm your password");
        }
    }
});
