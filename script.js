//your code here
const letter = document.querySelector("#evaluatedText")
const showLetter = document.querySelector("#letterCount")

letter.addEventListener("input",function(){
	const length = this.value.length;
	showLetter.textContent = length;
})