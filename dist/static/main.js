const downArrows = document.querySelectorAll('.down-arrow');
const questions = document.querySelectorAll('.question');
const containerItems = document.querySelectorAll('.container--item')
const answer = document.querySelector('.answer');

downArrows.forEach(downArrow => {
	downArrow.addEventListener('click', event => {
		const question = event.target.parentNode
		const answer = event.target.parentNode.nextElementSibling
		question.classList.toggle('question--clicked');
		answer.classList.toggle('answer--visible');
		downArrow.classList.toggle('down-arrow--clicked');
		console.log(answer)
	})
}) 

questions.forEach(question => {
	question.addEventListener('click', event => {
		const question = event.target;
		const answer = event.target.nextElementSibling;
		const downArrow = event.target.children[0];
		question.classList.toggle('question--clicked');
		answer.classList.toggle('answer--visible');
		downArrow.classList.toggle('down-arrow--clicked');
	})
}) 

// containerItems.forEach(containerItem => {
// 	containerItem.addEventListener('click', event => {
// 		const question = event.target.parentNode.childNodes[1];
// 		const answer = event.target.parentNode.nextElementSibling;
// 		const downArrow = event.target.childNodes[1];
// 		question.classList.toggle('question--clicked');
// 		answer.classList.toggle('answer--visible');
// 		downArrow.classList.toggle('down-arrow--clicked');
// 	})
// })