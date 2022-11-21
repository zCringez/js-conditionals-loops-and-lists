function read() {
    return document.querySelector("#input").value
}

function print(text) {
    const output = document.querySelector("#output")
    output.textContent += "\n > " + text
}
