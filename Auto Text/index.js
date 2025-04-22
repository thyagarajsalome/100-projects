const containerE1 = document.querySelector(".container");

const careers = ["Youtuber", "Web developer", "Freelancer", "3D Designer"];

let careerIndex = 0;
let characterIndex = 0;

updateText();

function updateText() {
  // Display the current text up to the character index.
  containerE1.innerHTML = `<h1>I am a ${careers[careerIndex].slice(
    0,
    characterIndex
  )}</h1>`;

  // If there are more characters to display for the current career,
  // increment the character index and call updateText again soon.
  if (characterIndex < careers[careerIndex].length) {
    characterIndex++;
    setTimeout(updateText, 150); // Adjust timing for letter-by-letter reveal.
  } else {
    // Once the full word is displayed, wait a bit longer,
    // then move to the next career and reset the character index.
    setTimeout(() => {
      careerIndex = (careerIndex + 1) % careers.length;
      characterIndex = 0;
      updateText();
    }, 2000); // Pause after the complete text is displayed.
  }
}
