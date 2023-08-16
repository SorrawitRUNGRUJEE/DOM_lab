let inp1 = document.querySelector('#username')
let inp2 = document.querySelector('#password')
let outPut = document.querySelector('.output')
let logInForm = document.querySelector('#logInForm')

const hdluserSubmit = (e) =>{
e.preventDefault()
outPut.textContent = inp1.value + "   " + inp2.value
// alert(inp1.value + "   " + inp2.value)
}

logInForm.addEventListener('submit', hdluserSubmit)


// inp1.addEventListener('change',hdluserClick)