const price = document.querySelector('#price')
const people = document.querySelector('#people')
const tip = document.querySelector('#tip')
const btn = document.querySelector('.count')
const result = document.querySelector('.cost-info')
const resultSpan = document.querySelector('.cost')
const error = document.querySelector('.error')

const splitBill = () => {
    const newPrice = parseFloat(price.value)
    const newPeople = parseInt(people.value)
    const newTip = parseFloat(tip.value)

	if (newPrice > 0 && newPeople > 0) {
		const sum = (newPrice / newPeople) * newTip;
		resultSpan.textContent = sum.toFixed(2)
		result.style.display = 'block'
		error.style.display = 'none'
	} else {
		error.style.display = 'block'
		result.style.display = 'none'
	}
}

btn.addEventListener('click', splitBill)
