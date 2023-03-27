const form = document.querySelector("form");
const submitButton = document.querySelector(".save-button");

submitButton.addEventListener("click", function (e) {
    e.preventDefault();

    // get the form data
    const formData = new FormData(form);

    // convert the form data to an object
    const formObject = Object.fromEntries(formData.entries());

    // Get form values
    const fullName = document.getElementById("full_name")?.value;
    const contactNumber = document.getElementById("contact-number")?.value;
    const email = document.getElementById("email")?.value;
    const gender = document.querySelector('input[name="gender"]:checked')?.value;
    const dateOfBirth = document.getElementById("date_of_birth")?.value;
    const city = document.getElementById("cities")?.value;

    console.log({fullName}, {contactNumber}, {email}, {gender}, {dateOfBirth}, {city});

    // Perform validations
    if (fullName === "") {
        alert("Please enter your full name.");
        return false;
    }

    if (contactNumber === "") {
        alert("Please enter your contact number.");
        return false;
    }

    if (!/^[0-9]{10}$/.test(contactNumber)) {
        alert("Please enter a valid 10-digit contact number.");
        return false;
    }

    if (email === "") {
        alert("Please enter your email address.");
        return false;
    }

    if (!/^([a-z0-9._%+-]+)@([a-z0-9.-]+)\.([a-z]{2,})$/.test(email)) {
        alert("Please enter a valid email address.");
        return false;
    }

    if (dateOfBirth === "") {
        alert("Please enter your date of birth.");
        return false;
    }

    if (city === "") {
        alert("Please select your city.");
        return false;
    }

    // Submit form if all validations pass
    // form.submit();

    // store the form data in local storage
    localStorage.setItem('formData', JSON.stringify(formObject));
    
    // redirect to the profile view page
    window.location.href = 'profile_card.html';
});