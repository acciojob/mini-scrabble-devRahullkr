//your code here
const letter = document.querySelector("#evaluatedText")
const showLetter = document.querySelector("#letterCount")

showLetter.textContent = 0

letter.addEventListener("input",function(){
	const length = this.value.length;
	showLetter.textContent = length;
})

