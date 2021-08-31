let table = document.getElementById("table")
let row = 11
let column = 10

let savedColor = null

function addTable() {
let lines = ""
for (let i = 0; i <= row; i++) {
    lines += `<tr>`
    for (let j = -1; j <= column; j++) {
        if (i === 0 && j === -1) {
            lines += "<th>X</th>" //this is the header for each column
        } else {
            if (i === 0 || j === -1) {
                lines += `<th>${i + j}</th>`
            } else {
                lines += `<td>${i * j - j}</td>`
            }
        }
    } 
    lines += "</tr>"  
}
table.innerHTML = lines
if (savedColor !== null) {
    savedColor()
}
}
addTable()

let button = document.getElementById("button")
button.addEventListener("click", handleClick)

function handleClick(event) {
    event.preventDefault()
    addRow() 
    addColumn()
}

function addRow() {
    addColumn()
    let rowInput = document.getElementById("row-input")
    let rowValue = rowInput.value
    row = rowValue
    if (rowValue === "") {
        row = column 
    } 
    addTable()

    console.log(rowValue)
}

function addColumn() {
    let columnInput = document.getElementById("column-input")
    let columnValue = columnInput.value
    column = columnValue
    if (columnValue === "") {
        column = row
    }
    addTable()

    console.log(columnValue)
}

//Styling Color

let blue = document.getElementById("blue")
blue.addEventListener("click", addBlue)

function addBlue() {
    document.getElementById("title").style.color = "rgb(69, 69, 243)"
    document.getElementById("pick").style.color = "rgb(69, 69, 243)"
    let element = document.getElementsByTagName("th")
    for (let i = 0; i < element.length; i++) {
        element[i].style.backgroundColor = "rgb(69, 69, 243)"
    }
    savedColor = addBlue()
}

let red = document.getElementById("red")
red.addEventListener("click", addRed)

function addRed() {
    savedColor = addRed
    document.getElementById("title").style.color = "rgb(236, 90, 90)"
    document.getElementById("pick").style.color = "rgb(236, 90, 90)"
    let element = document.getElementsByTagName("th")
    for (let i = 0; i < element.length; i++) {
        element[i].style.backgroundColor = "rgb(236, 90, 90)"
    }
}

let yellow = document.getElementById("yellow")
yellow.addEventListener("click", addYellow)

function addYellow() {
    savedColor = addYellow
    document.getElementById("title").style.color = "rgb(252, 252, 127)"
    document.getElementById("pick").style.color = "rgb(252, 252, 127)"
    let element = document.getElementsByTagName("th")
    for (let i = 0; i < element.length; i++) {
        element[i].style.backgroundColor = "rgb(252, 252, 127)"
    }
}

let purple = document.getElementById("purple")
purple.addEventListener("click", addPurple)

function addPurple() {
    savedColor = addPurple
    document.getElementById("title").style.color = "rgb(185, 87, 185)"
    document.getElementById("pick").style.color = "rgb(185, 87, 185)"
    let element = document.getElementsByTagName("th")
    for (let i = 0; i < element.length; i++) {
        element[i].style.backgroundColor = "rgb(185, 87, 185)"
    }
}

let pink = document.getElementById("pink")
pink.addEventListener("click", addPink)

function addPink() {
    savedColor = addPink
    document.getElementById("title").style.color = "pink"
    document.getElementById("pick").style.color = "pink"
    let element = document.getElementsByTagName("th")
    for (let i = 0; i < element.length; i++) {
        element[i].style.backgroundColor = "pink"
    }
}

let grey = document.getElementById("grey")
grey.addEventListener("click", addGrey)

function addGrey() {
    document.getElementById("title").style.color = "lightgray"
    document.getElementById("pick").style.color = "lightgray"
    let element = document.getElementsByTagName("th")
    for (let i = 0; i < element.length; i++) {
        element[i].style.backgroundColor = "lightgray"
    }
    savedColor = addGrey
}

let green = document.getElementById("green")
green.addEventListener("click", addGreen)

function addGreen() {
    document.getElementById("title").style.color = "rgb(91, 223, 91)"
    document.getElementById("pick").style.color = "rgb(91, 223, 91)"
    let element = document.getElementsByTagName("th")
    for (let i = 0; i < element.length; i++) {
        element[i].style.backgroundColor = "rgb(91, 223, 91)"
    }
    savedColor = addGreen
}

let reset = document.getElementById("reset")
reset.addEventListener("click", restart)

function restart() {
    document.getElementById("title").style.color = "black"
    document.getElementById("pick").style.color = "black"
    let rowInput = document.getElementById("row-input")
    let rowValue = rowInput.value
    rowValue = 11
    row = rowValue
    let columnInput = document.getElementById("column-input")
    let columnValue = columnInput.value
    columnValue = 10
    column = columnValue
    savedColor = null
    addTable()
    rowInput.value = ""
    columnInput.value = ""
    let element = document.getElementsByTagName("th")
    for (let i = 0; i < element.length; i++) {
        element[i].style.backgroundColor = "lightblue"
    }
}
