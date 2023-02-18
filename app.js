const square = document.createElement('div')
document.body.appendChild(square)

let size = 100;
let grow = true
square.style.width = `${size}px`
square.style.height = `${size}px`
square.style.backgroundColor = '#2e8ed7'

window.addEventListener('scroll', () => {
    if (size >= window.innerWidth / 2 && size >= window.innerHeight / 2) {
        grow = !grow
    } else if (size == 100) {
        grow = true
    }
    if (grow) {
        size += 5
        square.style.width = `${size}px`
        square.style.height = `${size}px`
    } else {
        size -= 5
        square.style.width = `${size}px`
        square.style.height = `${size}px`
    }

})