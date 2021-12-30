let myToDoList = document.getElementsByTagName("LI")
for (let i = 0; i < myToDoList.length; i++) {
    let span = document.createElement("SPAN")
    let txt = document.createTextNode("\u00D7")
    span.className = "close"
    span.appendChild(txt)
    myToDoList[i].appendChild(span)
}

let close = document.getElementsByClassName("close")
for (let i = 0; i < close.length; i++) {
    close[i].onclick = function () {
        let div = this.parentElement
        div.style.display = "none"
    }
}

let list = document.querySelector('ul')
    list.addEventListener("click", function (ev) {
    if (ev.target.tagName === 'LI') {
        ev.target.classList.toggle("checked")
    }
}, false)


function criaTarefa() {
    let novaTarefa = document.createElement("li")
    let inputValue = document.getElementById("tarefas").value
    let t = document.createTextNode(inputValue)
    novaTarefa.appendChild(t)

    if (inputValue === '') {
        alert('Você precisa digitar algo')
    } else {
        document.getElementById("myUL").appendChild(novaTarefa)
    }
    document.getElementById("tarefas").value = ""

    let span = document.createElement("SPAN")
    let txt = document.createTextNode("\u00D7")
    span.className = "close"
    span.appendChild(txt)
    novaTarefa.appendChild(span)

    for (let i = 0; i < close.length; i++) {
        close[i].onclick = function () {
            let div = this.parentElement
            div.style.display = "none"
        }
    }
}