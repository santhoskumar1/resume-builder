function generatePreview() {
  const name = document.getElementById("name").value;
  const role = document.getElementById("role").value;
  const location = document.getElementById("location").value;
  const phone = document.getElementById("phone").value;
  const email = document.getElementById("email").value;
  const summary = document.getElementById("summary").value;
  const skills = document.getElementById("skills").value.split(",");
  const experience = document.getElementById("experience").value;
  const education = document.getElementById("education").value;
  const achievements = document.getElementById("achievements").value.split("\n");

  const preview = document.getElementById("preview");
  preview.innerHTML = `
    <h2>${name}</h2>
    <p><strong>${role}</strong></p>
    <p>${location} | ${phone} | ${email}</p>
    <hr>
    <h3>Summary</h3>
    <p>${summary}</p>
    <h3>Technical Skills</h3>
    <ul>${skills.map(skill => `<li>${skill.trim()}</li>`).join('')}</ul>
    <h3>Experience</h3>
    <p>${experience.replace(/\n/g, "<br>")}</p>
    <h3>Education</h3>
    <p>${education}</p>
    <h3>Achievements</h3>
    <ul>${achievements.map(item => `<li>${item}</li>`).join('')}</ul>
  `;
}

function downloadPDF() {
  const { jsPDF } = window.jspdf;
  const doc = new jsPDF();
  const content = document.getElementById("preview").innerText;
  doc.text(content, 10, 10);
  doc.save("resume.pdf");
}

