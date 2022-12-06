const questions = [
    {
        "question": "What temperature does water boil at?",
        "optionA": "50 degrees Celcius",
        "optionB": "25 degrees Celcius",
        "optionC": "100 degrees Celcius",
        "optionD": "150 degrees Celcius",
        "answer": "c"
    },

    {
        "question": "Who wrote Julius Caesar, Macbeth and Hamlet?",
        "optionA": "Wole Soyinka",
        "optionB": "William Shakespeare",
        "optionC": "Ngozi Chimamanda Adichie",
        "optionD": "Dan Brown",
        "answer": "b"
    },

    {
        "question": "What did the crocodile swallow in Peter Pan?",
        "optionA": "A Book",
        "optionB": "A Computer",
        "optionC": "A pair of shoes",
        "optionD": "Alarm Clock",
        "answer": "d"
    },

    {
        "question": "Which is the only mammal that can’t jump?",
        "optionA": "Dog",
        "optionB": "Elephant",
        "optionC": "Goat",
        "optionD": "Lion",
        "answer": "b"
    },

    {
        "question": "Who lived at 221B, Baker Street, London?",
        "optionA": "Tony Stark",
        "optionB": "Morgan Freeman",
        "optionC": "Sherlock Holmes",
        "optionD": "Samuel L. Jackson",
        "answer": "c"
    },

    {
        "question": "What colour is a panda?",
        "optionA": "Green and Yellow",
        "optionB": "Blue and Red",
        "optionC": "Green and White",
        "optionD": "Black and White",
        "answer": "d"
    },

    {
        "question": "Where is the smallest bone in the human body?",
        "optionA": "The Chest",
        "optionB": "The Ear",
        "optionC": "The Legs",
        "optionD": "The Hands",
        "answer": "b"
    },

    {
        "question": "What does the roman numeral C represent?",
        "optionA": "100",
        "optionB": "10",
        "optionC": "10,000",
        "optionD": "1,000,000",
        "answer": "a"
    },

    {
        "question": "What takes place in Hong Kong's Happy Valley?",
        "optionA": "Chicken Wrestling",
        "optionB": "Horse racing",
        "optionC": "Street Racing",
        "optionD": "Arm Wrestling",
        "answer": "b"
    },

    {
        "question": "Who painted the Mona Lisa?",
        "optionA": "Alexander Graham Bell",
        "optionB": "Sir Isaac Newton",
        "optionC": "Leonardo Da Vinci",
        "optionD": "Albert Einstein",
        "answer": "c"
    },

    {
        "question": "What’s the most important book in the Moslem religion?",
        "optionA": "The Koran",
        "optionB": "The Dictionary",
        "optionC": "The Bible",
        "optionD": "The Chemistry text Book",
        "answer": "a"
    },

    {
        "question": "What’s the capital of Ethiopia?",
        "optionA": "Cape Town",
        "optionB": "San Francisco",
        "optionC": "Abuja",
        "optionD": "Syndey",
        "answer": "d"
    },

    {
        "question": "How many squares are there on a chess board?",
        "optionA": "128",
        "optionB": "64",
        "optionC": "32",
        "optionD": "256",
        "answer": "b"
    },

    {
        "question": "Who invented the electric light bulb?",
        "optionA": "Tom Cruise",
        "optionB": "Barack Obama",
        "optionC": "Wole Soyinka",
        "optionD": "Thomas Edison",
        "answer": "d"
    },

    {
        "question": "What are the first three words of the bible?",
        "optionA": "be with everyone",
        "optionB": "Again Jesus asked",
        "optionC": "In the beginning",
        "optionD": "At that time",
        "answer": "c"
    }
]

let index = 0;
let total = questions.length;
let right = 0,
    wrong = 0;

const quesBox = document.getElementById("quesBox")
const optionInputs = document.querySelectorAll('.options')

const loadQuestion = () => {
    if (index === total) {
        return endQuiz()
    }
    reset()
    const data = questions[index]
    quesBox.innerText = ` ${index + 1}) ${data.question}`;
    optionInputs[0].nextElementSibling.innerText = data.optionA;
    optionInputs[1].nextElementSibling.innerText = data.optionB;
    optionInputs[2].nextElementSibling.innerText = data.optionC;
    optionInputs[3].nextElementSibling.innerText = data.optionD;
}

const submitQuiz = () => {
    const data = questions[index];
    const ans = getAnswer()
    if (ans == data.answer) {
        right++;
    } else {
        wrong++;
    }
    index++;
    loadQuestion();
    return;
}

const getAnswer = () => {
    let Ans;
    optionInputs.forEach(
        (input) => {
            if (input.checked) {
                Ans = input.value;
                console.log(Ans)
            }

        }
    )
    return Ans;

}

const reset = () => {
    optionInputs.forEach(
        (input) => {
            input.checked = false
        }
    )
}

const endQuiz = () => {

    document.getElementById("box").innerHTML = `
<div style="text-align:center">
    <h3 class="py"> Thank you for playing the quiz</h3>      
    <h2 class="py"> ${right} / ${total} are correct </h2>
    <button class="btn" onclick="playagain()">
    Play Again
    </button>
</div>
`

}

const playagain = () => {
     location.reload()
}


loadQuestion();

