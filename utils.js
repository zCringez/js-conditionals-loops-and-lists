function read() {
    return document.querySelector("#input").value
}

// Added a comment
function print(text) {
    const output = document.querySelector("#output")
    output.textContent += "\n > " + text
}
