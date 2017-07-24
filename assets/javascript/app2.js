// Questions go here //

var questions = [{
	"question": "She turned me into a...",
	"option1": "Donkey!",
	"option2": "Newt!",
	"option3": "Horsefly!",
	"option4": "Cabbage!",
	"answer": "2"
}, { 
	 "question": "The Knights who said Ni were particularly interested in these.",
	 "option1": "Shrubberies!",
	 "option2": "Polar Bears!",
	 "option3": "Artichokes!",
	 "option4": "Spanish Inquisitions!",
	 "answer": "1"
}, {
	 "question": "This relic was used to destroy the killer bunny.",
	 "option1": "The Holy Hand Grenade!",
	 "option2": "The Spiritual Spike!",
	 "option3": " The Papal Pen of Death!",
	 "option4": " The Dagger of Divinity!",
	 "answer": "1"
}, {
	 "question": "'On second thought, let's not go to Camelot. It is a silly place.' Spoken by who?",
	 "option1": "Lancelot",
	 "option2": "Arthur",
	 "option3": "Prince Herbert",
	 "option4": "Sir Robin",
	 "answer": "2"
}, {
	 "question": "How old is Dennis?",
	 "option1": "39",
	 "option2": "47",
	 "option3": "37",
	 "option4": "29",
	 "answer": "3"
}, {
	 "question": "Who lost both his arms and both his legs in a sword fight?",
	 "option1": "The Knight who Said Ni!",
	 "option2": "Lancelot",
	 "option3": "Arthur",
	 "option4": "The Black Knight",
	 "answer": "4"
}, {
	 "question": "How many times per second must a swallow flap it's wings to maintain airspeed velocity?",
	 "option1": "42",
	 "option2": "27",
	 "option3": "100",
	 "option4": "64",
	 "answer": "1"

},
]

// declare variables //

var currentQuestion = 0;
var score = 0;
var totalQuestions = questions.length;

var container = document.getElementById("quizContainer");
var questionElement = document.getElementById("question");
var opt1 = document.getElementById("opt1");
var opt2 = document.getElementById("opt2");
var opt3 = document.getElementById("opt3");
var opt4 = document.getElementById("opt4");

var nextButton = document.getElementById("nextButton");
var resultCont = document.getElementById("result");



function loadQuestion () {
	var q = questions[questions];
	questionElement.textContent (question + 1) + ". " + q.question;
	opt1.textContent = q.option1;
	opt2.textContent = q.option2;
	opt3.textContent = q.option3;
	opt4.textContent = q.option4;
	
};

function loadNextQuestion () {
	var selectedOption = document.querySelector("input[type=radio]:checked");
	if(!selectedOption){
		alert("Please select your answer!");
		return;
	}
	var answer = selectedOption.value;
	if(questions[currentQuestion].answer == answer){
		score += 1;
	}
	selectedOption.checked = false;
	currentQuestion ++; 
	if(currentQuestion == totalQuestions - 1){
		nextButton.textContent = "Finish";
	}
	if(currentQuestion == totalQuestions) {
		container.style.display = "none";
		resultCont.style.display = "";
		resultCont.textContent = "Your Score: " + score;
		return;
	}
	loadQuestion(currentQuestion);
}


loadQuestion(currentQuestion);












