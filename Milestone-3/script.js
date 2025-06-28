var form = document.getElementById("submitButton");
var resumeDisplayElement = document.getElementById("display");
form.addEventListener('click', function (event) {
    event.preventDefault();
    var name = document.getElementById('name').value;
    var contact = document.getElementById('contact').value;
    var email = document.getElementById('email').value;
    var education = document.getElementById('education').value;
    var experience = document.getElementById('experience').value;
    var skills = document.getElementById('skills').value;

    var resumeHTML = "\n<h2><b> RESUME </b></h2>\n\n<h3><u>PERSONAL INFORMATION:</u></h3>\n\n<p><b> Name: </b>".concat(name, "</p>\n<p><b> Contact: </b>").concat(contact, "</p>\n<p><b> E-mail: </b>").concat(email, "</p>\n\n<h3><u>EDUCATION:</u></h3>\n<p>").concat(education, "</p>\n\n<h3><u>EXPERIENCE:</u></h3>\n<p>").concat(experience, "</p>\n\n<h3><u>SKILLS:</u></h3>\n<p>").concat(skills, "</p>\n    ");
    
    if (resumeDisplayElement) 
    {
        resumeDisplayElement.innerHTML = resumeHTML;
    }
    else {
        console.error('The resume display element is missing');
    }
});
