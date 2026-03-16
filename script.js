//your code here
const letter = document.querySelector("#evaluatedText")
const showLetter = document.querySelector("#letterCount")

if(letter.length == 0){
	showLetter.textContent = 0;
}else{
	letter.addEventListener("input",function(){
	const length = this.value.length;
	showLetter.textContent = length;
})
}
