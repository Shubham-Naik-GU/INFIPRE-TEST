const userInput = document.getElementById("userInput");

const wordCount = document.getElementById("wordCount");
const charCount = document.getElementById("charCount");
const sentenceCount = document.getElementById("sentenceCount");
const paragraphCount = document.getElementById("paragraphCount");
const pronounCount = document.getElementById("pronounCount");
const readingTime = document.getElementById("readingTime");
const longestWord = document.getElementById("longestWord");

function analyzeText() {
    const text = userInput.value.trim();

    const words = text.match(/\b\w+\b/g) || [];
    wordCount.textContent = words.length;

    const characters = text.replace(/\s/g, "").length;
    charCount.textContent = characters;

    const sentences = text.match(/[.!?]/g) || [];
    sentenceCount.textContent = sentences.length;

    const paragraphs = text.split(/\n+/).filter(para => para.trim().length > 0).length;
    paragraphCount.textContent = paragraphs;

    const pronouns = text.match(/\b(he|she|it|they|we|you|I|me|us|him|her|them)\b/gi) || [];
    pronounCount.textContent = pronouns.length;

    const avgReadingTime = (words.length / 200);
    readingTime.textContent = avgReadingTime;

    const longest = words.reduce((a, b) => (b.length > a.length ? b : a), "");
    longestWord.textContent = longest || "N/A";
}

userInput.addEventListener("input", analyzeText);
