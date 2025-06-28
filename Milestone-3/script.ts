const submitButton = document.getElementById("submitButton") as HTMLFormElement
const display = document.getElementById("display") as HTMLDivElement

submitButton.addEventListener('submit', (event: Event) => {
    event.preventDefault();

    const name = (document.getElementById('name') as HTMLInputElement).value
    const contact = (document.getElementById('contact') as HTMLInputElement).value
    const email = (document.getElementById('email') as HTMLInputElement).value
    const education = (document.getElementById('education') as HTMLInputElement).value
    const experience = (document.getElementById('experience') as HTMLInputElement).value
    const skills = (document.getElementById('skills') as HTMLInputElement).value

    const resumeHTML = `
<h2><b>RESUME</b></h2>

<h3><u>PERSONAL INFORMATION:</u></h3>

<p><b> Name: </b>${name}</p>
<p><b> Contact: </b>${contact}</p>
<p><b> E-mail: </b>${email}</p>

<h3><u>EDUCATION:</u></h3>
<p>${education}</p>

<h3><u>EXPERIENCE:</u></h3>
<p>${experience}</p>

<h3><u>SKILLS:</u></h3>
<p>${skills}</p>
    `;
    
if(display){
    display.innerHTML = resumeHTML;
}
else{
    console.error('The resume display element is missing')
}
});







