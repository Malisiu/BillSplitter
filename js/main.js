const priceInput = document.querySelector('#price')
const peopleInput = document.querySelector('#people')
const selectTip = document.querySelector('#tip')
const errorP = document.querySelector('.error')
const btn = document.querySelector('.count')
const costInfoSpan = document.querySelector('.cost') 
const costInfo = document.querySelector('.cost-info')

const checkInput = () => {
    if(priceInput.value.length >= 1 && peopleInput.value.length >= 1 && selectTip.value > 0){
        errorP.textContent = ''
        const cost = (Number(priceInput.value) + (Number(priceInput.value) * Number(selectTip.value)) )/ Number(peopleInput.value)
        costInfoSpan.textContent = cost.toFixed(2)
        costInfo.style.display = 'block'
    }else {
        errorP.textContent = 'Uzupełnij wszystkie pola!'
        costInfo.style.display = 'none'
    }
}


btn.addEventListener('click',checkInput)
