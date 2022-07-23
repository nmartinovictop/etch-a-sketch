

let divContainer = document.querySelector('.div-container')

let numOfSquares = 10000


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
    e.target.style.backgroundColor = 'black'
    console.log('hover')
}


let resetBtn = document.querySelector('.reset-btn')
resetBtn.addEventListener('click', repaint)


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
    userInput = prompt("how many squares")
    userInput = parseInt(userInput)
    numOfSquares = userInput**2
    repaint()

})