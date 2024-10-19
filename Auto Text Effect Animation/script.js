let containerEl = document.querySelector(".container");

const careers = ["YouTuber", "Web Developer", "Freelancer", "Instructor"];

let careerIndex = 0;
let characterIndex = 0;

const updateText = () => {
    containerEl.innerHTML = `<h2>I am ${careers[careerIndex].slice(0,1) === "I" ? "an":"a"} ${careers[careerIndex].slice(0, characterIndex)}</h2>`;
    characterIndex++;
    if(characterIndex === careers[careerIndex].length + 1) {
        careerIndex++;
        characterIndex = 0;
    }
    if(careerIndex === careers.length) {
        careerIndex = 0;
    }
    setTimeout(updateText, 300);
}

updateText();