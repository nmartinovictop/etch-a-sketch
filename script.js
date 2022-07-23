

let divContainer = document.querySelector('.div-container')

let numOfSquares = 256


for (i = 0; i < numOfSquares; i++) {
    let indDiv = document.createElement('div')
    indDiv.classList.add('ind-div')
    indDiv.style.cssText = `width: calc(760px/${numOfSquares ** 0.5} - 2px); height: calc(760px/${numOfSquares ** 0.5} - 2px);`
    divContainer.append(indDiv)
}


let indDivs = document.querySelectorAll(".ind-div")

indDivs.forEach(div => {
    div.addEventListener('mouseover', hoverAction)
})

function hoverAction(e) {
    let rgb = randomRGB()
    if (e.target.style.backgroundColor == '') {
        e.target.style.backgroundColor = `rgb(${rgb[0]},${rgb[1]},${rgb[2]})`
    } else {
        rgb = e.target.style.backgroundColor
        rgb = rgb.slice(4,-1).split(",")
        rgb = rgb.map(ele => parseInt(ele))
        console.log(rgb)
        e.target.style.backgroundColor = `rgb(${rgb[0]*.9},${rgb[1]*.9},${rgb[2]*.9})`
        console.log( e.target.style.backgroundColor)
    }
}


let resetBtn = document.querySelector('.reset-btn')
resetBtn.addEventListener('click', repaint)


function randomRGB() {
    let red = Math.floor(Math.random() * 255)
    let green = Math.floor(Math.random() * 255)
    let blue = Math.floor(Math.random() * 255)

    return [red,green,blue]
}

function repaint() {
    while (divContainer.firstChild) divContainer.removeChild(divContainer.firstChild)
    for (i = 0; i < numOfSquares; i++) {
        let indDiv = document.createElement('div')
        indDiv.classList.add('ind-div')
        indDiv.style.cssText = `width: calc(760px/${numOfSquares ** 0.5} - 2px); height: calc(760px/${numOfSquares ** 0.5} - 2px);`
        divContainer.append(indDiv)


    }
    let indDivs = document.querySelectorAll(".ind-div")

    indDivs.forEach(div => {
        div.addEventListener('mouseover', hoverAction)
    })
}


let resizeBtn = document.querySelector('.resize-btn')
resizeBtn.addEventListener('click', () => {
    //prompt function
    userInput = prompter()
    numOfSquares = userInput**2
    repaint()

})


function prompter() {
    userInput = prompt("how many squares")

    if (isNaN(parseInt(userInput))) {
        alert('Only enter a number')
        prompter()
    }

    if (parseInt(userInput) > 100) {
        alert('Enter a number less than 100')
        prompter()
    }

    return parseInt(userInput)
}