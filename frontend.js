const form = document.getElementById('resumeForm');
const resultDiv = document.getElementById('result');
const resumeTable = document.getElementById('resumeTable');

// Upload Resume
form.addEventListener('submit', async (e) => {

    e.preventDefault();

    const formData = new FormData();

    formData.append('name', document.getElementById('name').value);
    formData.append('email', document.getElementById('email').value);
    formData.append('resume', document.getElementById('resume').files[0]);

    const response = await fetch('/upload', {
        method: 'POST',
        body: formData
    });

    const data = await response.json();

    resultDiv.innerHTML = `
        <h3>${data.message}</h3>
        <p><strong>Matched Skills:</strong> ${data.skills.join(', ')}</p>
        <p><strong>Resume Score:</strong> ${data.score}</p>
    `;

    loadResumes();

    form.reset();
});

// Load Resume Data
async function loadResumes() {

    const response = await fetch('/resumes');

    const data = await response.json();

    resumeTable.innerHTML = '';

    data.forEach(resume => {

        resumeTable.innerHTML += `
            <tr>
                <td>${resume.name}</td>
                <td>${resume.email}</td>
                <td>${resume.skills}</td>
                <td>${resume.score}</td>
            </tr>
        `;
    });
}

loadResumes();