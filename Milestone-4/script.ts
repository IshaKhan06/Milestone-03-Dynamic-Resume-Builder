
const submitbutton = document.getElementById("submitButton") as HTMLFormElement
const displayResume = document.getElementById("display")  as HTMLDivElement

submitbutton.addEventListener('click', (event: Event) => {
    event.preventDefault();

    // Get form values
    const name = (document.getElementById('name') as HTMLInputElement).value
    const contact = (document.getElementById('contact') as HTMLInputElement).value
    const email = (document.getElementById('email') as HTMLInputElement).value
    const education = (document.getElementById('education') as HTMLInputElement).value
    const experience = (document.getElementById('experience') as HTMLInputElement).value
    const skills = (document.getElementById('skills') as HTMLInputElement).value

    // Create the HTML for the generated resume
    const resumeHTML = `
    <h2><b>RESUME</b></h2>

     <h3><u>PERSONAL INFORMATION:</u></h3>
    <p><b> Name: </b><span contenteditable="true">${name}</span></p>
    <p><b> Contact: </b><span contenteditable="true">${contact}</span></p>
    <p><b> E-mail: </b><span contenteditable="true">${email}</span></p>

    <h3><u>EDUCATION:</u></h3>
    <p contenteditable="true">${education}</p>

    <h3><u>EXPERIENCE:</u></h3>
    <p contenteditable="true">${experience}</p>

    <h3><u>SKILLS:</u></h3>
    <p contenteditable="true">${skills}</p>
    `;

    // Display the editable resume
    if (display) {
        display.innerHTML = resumeHTML;
    } else {
        console.error('The resume display element is missing');
    }
});
