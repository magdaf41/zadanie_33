let article = document.getElementById("opis");
console.log(article);

let button = document.querySelector("button");
console.log(button);

document.querySelector("button").onclick = function () {
    article.textContent = "Zmiana treści po kliknięciu na przycisk";
}

