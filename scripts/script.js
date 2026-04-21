const form = document.querySelector("[data-js-form]");
const input = document.getElementById("link-area");
const resultBox = document.getElementById("resultBox");
const result = document.getElementById("result");
const copyBtn = document.getElementById("copyBtn");
const copyStatus = document.getElementById("copyStatus");


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
    navigator.clipboard.writeText(text);

    copyStatus.textContent = "Скопировано ✅";

    setTimeout(() => {
        copyStatus.textContent = "";
    }, 2000);
}


copyBtn.addEventListener("click", function () {
    copyToClipboard(result.textContent);
});

result.addEventListener("click", function () {
    copyToClipboard(result.textContent);
});