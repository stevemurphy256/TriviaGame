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
},


}],

// declare variables

var currentQuestion = 0;
var score = 0;
var totalQuestions = questions.length;

var container = document.getElementbyId("quizContainer");
var questionElement = document.getElementbyId("question");
var opt1 = document.getElementbyId("opt1");
var opt2 = document.getElementbyId("opt2");
var opt3 = document.getElementbyId("opt3");
var opt4 = document.getElementbyId("opt4");

var nextButton = document.getElementbyId("nextButton");
var resultCont = document.getElementbyId("result");















