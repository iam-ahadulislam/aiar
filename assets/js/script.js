function sendMail() {

    let parms = {
        name: document.getElementById("contact-name").value, // Added `.value` here
        email: document.getElementById("contact-email").value,
        subject: document.getElementById("subject").value,
        phone: document.getElementById("contact-phone").value,
        message: document.getElementById("contact-message").value,
    };

    emailjs.send("service_hah3n0w", "template_2sclhwt", parms)
    .then(function(response) {
        alert("Email Sent!!");
    })
    .catch(function(error) {
        alert("Failed to send email: " + error);
    });
}
