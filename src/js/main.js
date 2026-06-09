import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import $ from "jquery";
import "../scss/main.scss";

window.$ = $;
window.jQuery = $;

$(document).ready(function () {
  function showError(input, message) {
    const errorBox = $(input).next(".error-message");

    $(input).addClass("is-invalid");
    errorBox.text(message);
  }

  function clearErrors(form) {
    $(form).find(".error-message").text("");
    $(form).find(".form-control").removeClass("is-invalid");
  }

  function isValidEmail(email) {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
  }

  $("#registerForm").on("submit", function (event) {
    event.preventDefault();

    clearErrors(this);

    const nameInput = $("#name");
    const birthDateInput = $("#birthDate");
    const emailInput = $("#registerEmail");
    const passwordInput = $("#registerPassword");
    const confirmPasswordInput = $("#confirmPassword");

    const name = nameInput.val().trim();
    const birthDate = birthDateInput.val();
    const email = emailInput.val().trim();
    const password = passwordInput.val();
    const confirmPassword = confirmPasswordInput.val();

    let isValid = true;

    if (name === "") {
      showError(nameInput, "يرجى إدخال الاسم");
      isValid = false;
    }

    if (birthDate === "") {
      showError(birthDateInput, "يرجى إدخال تاريخ الميلاد");
      isValid = false;
    }

    if (email === "") {
      showError(emailInput, "يرجى إدخال البريد الإلكتروني");
      isValid = false;
    } else if (!isValidEmail(email)) {
      showError(emailInput, "البريد الإلكتروني غير صحيح");
      isValid = false;
    }

    if (password === "") {
      showError(passwordInput, "يرجى إدخال كلمة المرور");
      isValid = false;
    } else if (password.length < 6) {
      showError(passwordInput, "كلمة المرور يجب أن تحتوي على 6 أحرف على الأقل");
      isValid = false;
    }

    if (confirmPassword === "") {
      showError(confirmPasswordInput, "يرجى تأكيد كلمة المرور");
      isValid = false;
    } else if (confirmPassword !== password) {
      showError(confirmPasswordInput, "كلمة المرور غير متطابقة");
      isValid = false;
    }

    if (isValid) {
      alert("تم إنشاء الحساب بنجاح");
      this.reset();
    }
  });

  $("#loginForm").on("submit", function (event) {
    event.preventDefault();

    clearErrors(this);

    const emailInput = $("#loginEmail");
    const passwordInput = $("#loginPassword");

    const email = emailInput.val().trim();
    const password = passwordInput.val();

    let isValid = true;

    if (email === "") {
      showError(emailInput, "يرجى إدخال البريد الإلكتروني");
      isValid = false;
    } else if (!isValidEmail(email)) {
      showError(emailInput, "البريد الإلكتروني غير صحيح");
      isValid = false;
    }

    if (password === "") {
      showError(passwordInput, "يرجى إدخال كلمة المرور");
      isValid = false;
    }

    if (isValid) {
      alert("تم تسجيل الدخول بنجاح");
      this.reset();
    }
  });
});
