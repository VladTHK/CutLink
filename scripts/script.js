const form = document.querySelector("[data-js-form]");
const input = document.getElementById("link-area");
const resultBox = document.getElementById("resultBox");
const result = document.getElementById("result");
const copyBtn = document.getElementById("copyBtn");
const copyStatus = document.getElementById("copyStatus");
const supportService = document.getElementById("supportService");
const supportList = document.getElementById("supportList");
const supportIcon = document.querySelector(".supportIcon");


form.addEventListener("submit", async function (event) {
    event.preventDefault();

    const url = input.value.trim();

    if (!url) {
        result.textContent = "Вставь ссылку!";
        resultBox.style.display = "block";
        return;
    }

    result.textContent = "Сокращаем...";
    resultBox.style.display = "block";

    try {
        const res = await fetch(`https://tinyurl.com/api-create.php?url=${url}`);
        const shortUrl = await res.text();

        result.textContent = shortUrl;

    } catch (error) {
        result.textContent = "Ошибка 😢";
        console.error(error);
    }
});



function copyToClipboard(text) {
    if (!text) return;

    navigator.clipboard.writeText(text);

    copyStatus.textContent = "Скопировано ✔";
    copyStatus.style.opacity = "1";

    setTimeout(() => {
        copyStatus.style.opacity = "0";
    }, 3000);
}

copyBtn.addEventListener("click", function () {
    copyToClipboard(result.textContent);
})


supportService.addEventListener("click", () => {
    const isOpen = supportService.classList.contains("active");

    if (!isOpen) {

        supportService.classList.add("active");
        supportIcon.classList.add("rotate");

        setTimeout(() => {
            supportList.classList.add("active");
        }, 300);

    } else {

        supportList.classList.remove("active");
        supportList.classList.add("closing");

        setTimeout(() => {
            supportService.classList.remove("active");
            supportIcon.classList.remove("rotate");
            supportList.classList.remove("closing");
        }, 300);
    }
});