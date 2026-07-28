"use strict";

const contactForm = document.getElementById("contact-form");
const formStatus = document.getElementById("form-status");

if (contactForm && formStatus) {
  contactForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const name = document.getElementById("name");
    const email = document.getElementById("email");
    const subject = document.getElementById("subject");
    const captcha = document.getElementById("captcha");
    const message = document.getElementById("message");

    formStatus.textContent = "";
    formStatus.classList.remove("form-success", "form-error");

    if (
      !name.value.trim() ||
      !email.value.trim() ||
      !subject.value.trim() ||
      !captcha.value.trim() ||
      !message.value.trim()
    ) {
      showError("Please complete every field before submitting the form.");
      return;
    }

    if (name.value.trim().length < 2) {
      showError("Please enter a name that is at least 2 characters long.");
      name.focus();
      return;
    }

    if (!email.checkValidity()) {
      showError("Please enter a valid email address.");
      email.focus();
      return;
    }

    if (subject.value.trim().length < 3) {
      showError("Please enter a subject that is at least 3 characters long.");
      subject.focus();
      return;
    }

    if (Number(captcha.value) !== 2) {
      showError("The security question is incorrect. Please try again.");
      captcha.focus();
      return;
    }

    if (message.value.trim().length < 10) {
      showError("Please enter a message that is at least 10 characters long.");
      message.focus();
      return;
    }

    formStatus.textContent =
      "Thank you! Your form was processed successfully for this demonstration.";

    formStatus.classList.add("form-success");

    contactForm.reset();
  });
}

function showError(message) {
  formStatus.textContent = message;
  formStatus.classList.add("form-error");
}
