const quizContainer = document.getElementById('quiz');
const resultsContainer = document.getElementById('results');
const submitButton = document.getElementById('submit');

function buildQuiz(){
    const output = [];
    const answers;

    myQuestions.forEach(var i=0; i<questions.length; i++){
        answers = [];
        for(letter in questions[i].answers){
            answers.push(
                '<label>'
                   <input type="radio" name="question${questionNumber}" value="${letter}">
                    ${letter} :
                    ${currentQuestion.answer[letter]}
                '</label>'  
            );
        }

        output.push(
            <div class="answers">${answers.join('')}</div>'

        );
    }
}
function showResults(questions, quizContainer){}

    // show the questions
buildQuiz();

    // when user clicks submit, show results
submitButton.addEventListener('click', showResults);

const myQuestions = [
    {
        question: 'What beauty spot was Dominic Cummings driving to test his eyesight after being infected with coronavirus?',
        answers: {
            a: "Barnard Castle",
            b: "Buckingham Palace",
            c: "Effiel Tower",
        },
        correctAnswer: "a"
    },
    {
        question: "What is the name of the Netflix documentary about Joe Exotic?",
        answers: {
            a:"Lion King",
            b:"Tiger King",
            c:"Jungle King",
        },
        correctAnswer:"b"
    },
    {
        question: "On which social media platform did Prince Harry and Meghan Markle announce they were stepping down as senior royals?",
        answers: {
            a: "Twitter",
            b: "Instagram",
            c: "Facebook",
        },
        correctAnswer:"b"
    },
    {
        question: "What colour is the circle on the London Underground logo?",
        answers: {
            a:"Blue",
            b:"White",
            c: "Red",
        },
        correctAnswer: "c"
    },
    {
        question: "Which actress plays Daenerys Targaryen in HBO's Game of Thrones series?",
        answers: {
            a: "Emilia Clarke",
            b: "Emilia Saccone-Joly",
            c: "Emilia McCarthy",
        },
        correctAnswer: "a"
    },
]