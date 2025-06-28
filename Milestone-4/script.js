var submitbutton = document.getElementById("submitButton");
var displayResume = document.getElementById("display");
submitbutton.addEventListener('click', function (event) {
    event.preventDefault();
    // Get form values
    var name = document.getElementById('name').value;
    var contact = document.getElementById('contact').value;
    var email = document.getElementById('email').value;
    var education = document.getElementById('education').value;
    var experience = document.getElementById('experience').value;
    var skills = document.getElementById('skills').value;
    // Create the HTML for the generated resume
    var resumeHTML = "\n    <h2><b>RESUME</b></h2>\n\n     <h3><u>PERSONAL INFORMATION:</u></h3>\n    <p><b> Name: </b><span contenteditable=\"true\">".concat(name, "</span></p>\n    <p><b> Contact: </b><span contenteditable=\"true\">").concat(contact, "</span></p>\n    <p><b> E-mail: </b><span contenteditable=\"true\">").concat(email, "</span></p>\n\n    <h3><u>EDUCATION:</u></h3>\n    <p contenteditable=\"true\">").concat(education, "</p>\n\n    <h3><u>EXPERIENCE:</u></h3>\n    <p contenteditable=\"true\">").concat(experience, "</p>\n\n    <h3><u>SKILLS:</u></h3>\n    <p contenteditable=\"true\">").concat(skills, "</p>\n    ");
    // Display the editable resume
    if (display) {
        display.innerHTML = resumeHTML;
    }
    else {
        console.error('The resume display element is missing');
    }
});
