// Form validation script
document.addEventListener("DOMContentLoaded", function () {
  const form = document.querySelector("form");

  // Function to clear all error messages
  function clearErrors() {
    document
      .querySelectorAll(".error-message")
      .forEach((el) => (el.textContent = ""));
  }

  // Function to show error message under a field
  function showError(fieldName, message) {
    const errorElement = document.getElementById("error-" + fieldName);
    if (errorElement) {
      errorElement.textContent = message;
    }
  }

  form.addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent default form submission

    // Clear all previous error messages
    clearErrors();

    // Get all form data
    const firstName = document
      .querySelector('input[name="firstname"]')
      .value.trim();
    const lastName = document
      .querySelector('input[name="lastname"]')
      .value.trim();
    const dateOfBirth = document.querySelector(
      'input[name="dateofbirth"]'
    ).value;
    const password = document.querySelector('input[name="password"]').value;
    const gender = document.querySelector('input[name="gender"]:checked');
    const languages = document.querySelectorAll(
      'input[name="language"]:checked'
    );
    const country = document.querySelector('select[name="country"]').value;
    const color = document.querySelector('input[name="color"]').value;
    const bio = document.querySelector('textarea[name="bio"]').value.trim();

    // Validation flags
    let isValid = true;

    // Validate First Name
    if (firstName === "") {
      isValid = false;
      showError("firstname", "First Name is required");
    }

    // Validate Last Name
    if (lastName === "") {
      isValid = false;
      showError("lastname", "Last Name is required");
    }

    // Validate Date of Birth
    if (dateOfBirth === "") {
      isValid = false;
      showError("dateofbirth", "Date of Birth is required");
    }

    // Validate Password
    if (password === "") {
      isValid = false;
      showError("password", "Password is required");
    } else if (password.length < 6) {
      isValid = false;
      showError("password", "Password must be at least 6 characters long");
    }

    // Validate Gender
    if (!gender) {
      isValid = false;
      showError("gender", "Please select a gender");
    }

    // Validate Languages (at least one should be selected)
    if (languages.length === 0) {
      isValid = false;
      showError("language", "Please select at least one language");
    }

    // Validate Country
    if (country === "") {
      isValid = false;
      showError("country", "Please select a country");
    }

    // Validate Bio
    if (bio === "") {
      isValid = false;
      showError("bio", "Bio is required");
    }

    // Display validation results - only show alert on successful submission
    if (isValid) {
      // Collect selected languages
      const selectedLanguages = Array.from(languages).map((lang) => lang.value);

      // Store all data in variables and display
      const formData = {
        firstName: firstName,
        lastName: lastName,
        dateOfBirth: dateOfBirth,
        password: password,
        gender: gender.value,
        languages: selectedLanguages,
        country: country,
        favoriteColor: color,
        bio: bio,
      };

      console.log("Form Data:", formData);
    }
  });
});
