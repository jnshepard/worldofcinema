
const startButton=document.getElementById('startbtn')
const nextButton=document.getElementById('nextbtn')
const questionElement=document.getElementById('question')
const answerButtonsElement=document.getElementById('answerbtn')
let shuffledQuestions, currentQuestionIndex, count

startButton.addEventListener('click',startQuiz)
nextButton.addEventListener('click', () => {
	currentQuestionIndex++
	getNewQuestion()
})


function startQuiz() {
	count=0
	startButton.classList.add('hide')
	shuffledQuestions=quiz.sort(()=>Math.random()-.5)
	currentQuestionIndex=0
	answerButtonsElement.classList.remove('hide')
	getNewQuestion()
}

function getNewQuestion() {
	resetOptions()
	showQuestion(shuffledQuestions[currentQuestionIndex])
}

function showQuestion(question) {
	questionElement.innerText=question.question
	question.options.forEach(answer => {
		const button = document.createElement('button')
		button.innerText=answer.text
		button.classList.add('btn')
		if (answer.correct)
			button.dataset.correct=answer.correct
		button.addEventListener('click', selectAnswer) 
		answerButtonsElement.appendChild(button)
	})
}

function resetOptions() {
	nextButton.classList.add('hide')
	while (answerButtonsElement.firstChild) {
		answerButtonsElement.removeChild
		(answerButtonsElement.firstChild)
	}
}

function selectAnswer(e) {
	const selectedButton=e.target
	const correct=selectedButton.dataset.correct
	setStatus(selectedButton, selectedButton.dataset.correct)
	
	if (shuffledQuestions.length>currentQuestionIndex+1)
		nextButton.classList.remove('hide')
	else {
		if (count!=5)
	{
		answerButtonsElement.classList.add('hide')
		questionElement.innerText='Ваш результат: '+count+'/5'
		startButton.innerText='Попробовать еще раз'
		startButton.classList.remove('hide')
	}
	else {
		answerButtonsElement.classList.add('hide')
		questionElement.innerText='Ваш результат: 5/5\nПоздравляю!'
	}	
}
}


function setStatus(element, correct) {
	if (correct) {
		element.style.background = "green"
		count++
	}
	else 
		element.style.background = "red"
		
}


const quiz=[
{
	question:'Популярная в Голливуде в 1930-1950 годы технология цветного кино называлась...',
	options:[
		{text: 'Kodak', correct: false},
		{text: 'Technicolor', correct: true},
		{text: 'Kinetoscope', correct: false}
		]
},
{
	question:'Фильмом, который открыл «эру блокбастеров», часто называют',
	options:[
		{text: 'Крестного отца', correct: false},
		{text: 'Звездные войны. Эпизод IV: Новая надежда', correct: false},
		{text: 'Челюсти', correct: true }
		]
},
{
	question:'Одна из первых «больших» картин, снятых на цифровую камеру — это',
	options:[
		{text: 'Секс, ложь и видео', correct: false},
		{text: '28 дней спустя', correct:true },
		{text: 'Мандарин', correct: false}
		]
	
},
{
	question:'Люк Бессон «вырос» из направления во французском кино, которое называется',
	options:[
		{text: 'новая волна', correct: false},
		{text: 'новая новая волна', correct: true},
		{text: 'чистое кино', correct: false}
		]
	
},
{
	question:'В 1946 году был впервые проведен...',
	options:[
		{text: 'Каннский кинофестиваль', correct: true},
		{text: 'Венецианский кинофестиваль', correct: false},
		{text: 'Берлинский кинофестиваль', correct: false}
		]

}
]