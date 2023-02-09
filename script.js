const button  = document.querySelector('#button')
const imgCartao = document.querySelector('#img-cartao')
const budget = document.querySelector('.budget sup')
console.log(button)
console.log(imgCartao)
console.log(budget)



button.addEventListener('click', () =>{
    imgCartao.classList.toggle('active')

})

