let startTime = Date.now();
let humanActivity = false;
let typingCount = 0;
document.addEventListener("mousemove", () => humanActivity = true);
document.addEventListener("keydown", () => humanActivity = true);

function trackTyping() {
  typingCount++;
}
function get(id) {
  return document.getElementById(id).value.trim();
}
function updateProgress() {
  let fields = ["name", "email", "phone", "password", "confirmPassword"];
  let filled = fields.filter(f => get(f).length > 0).length;
  document.getElementById("progressBar").style.width =
    (filled / fields.length) * 100 + "%";
}
function validateName() {
  let ok = get("name").length >= 5;
  document.getElementById("nameError").innerText =
    ok ? "" : "Minimum 5 characters";
  return ok;
}
function validateEmail() {
  let ok = get("email").includes("@");
  document.getElementById("emailError").innerText =
    ok ? "" : "Invalid email";
  return ok;
}
function validatePhone() {
  let phone = get("phone");
  let ok = phone.length === 10 && phone !== "1234567890" && !isNaN(phone);
  document.getElementById("phoneError").innerText =
    ok ? "" : "Invalid phone number";
  return ok;
}

function validatePassword() {
  let pass = get("password");
  let name = get("name").toLowerCase();
  let ok =
    pass.length >= 8 &&
    pass.toLowerCase() !== "password" &&
    pass.toLowerCase() !== name;

  document.getElementById("passwordError").innerText =
    ok ? "" : "Weak password";
  return ok;
}

function validateConfirmPassword() {
  let ok = get("password") === get("confirmPassword");
  document.getElementById("confirmPasswordError").innerText =
    ok ? "" : "Passwords do not match";
  return ok;
}

function isHumanByTime() {
  let seconds = (Date.now() - startTime) / 1000;
  return seconds > 5;
}

function isHumanByActivity() {
  return humanActivity;
}

function isHumanByTyping() {
  return typingCount > 15;
}

function isHumanByHoneypot() {
  return get("honeypot") === "";
}

function validateForm() {
  if (
    !validateName() ||
    !validateEmail() ||
    !validatePhone() ||
    !validatePassword() ||
    !validateConfirmPassword()
  ) {
    alert("Fix validation errors");
    return false;
  }

  if (
    !isHumanByTime() ||
    !isHumanByActivity() ||
    !isHumanByTyping() ||
    !isHumanByHoneypot()
  ) {
    alert("Bot detected ");
    return false;
  }

  alert("Human verified Form submitted");
  return true;
}
