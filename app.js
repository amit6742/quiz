const questions = [
    {
        que: "which of the following is a markup language ?",
        a: "HTML",
        b: "CSS",
        c: "JavaScript",
        d: "php",
        correct: "a",
    },
    {
        que: "what years was javascript launched ?",
        a: "1996",
        b: "1995",
        c: "1994",
        d: "none of the above",
        correct: "b",
    },
    {
        que: "what does css stand for ?",
        a: "hyper text markup language",
        b: "cascading style sheet",
        c: "json object notation",
        d: "helicopter terminal motorboats lamborginis",
        correct: "b",
    },
];

let index = 0;
let total = questions.length;
let right = 0;
let wrong = 0;

const quesBox = document.getElementById("quesBox");
const optionInputs = document.querySelectorAll(".option");

const loadQuestion = () => {
    if (index === total) {
        return endQuiz();
    }

    reset();
    // qestion ke index se data nikalenge
    const data = questions[index];
    console.log(data);
    // template litral to shrinlk value get to dollar sign
    quesBox.innerText = `${index + 1}) ${data.que}`;

    optionInputs[0].nextElementSibling.innerText = data.a;
    optionInputs[1].nextElementSibling.innerText = data.b;
    optionInputs[2].nextElementSibling.innerText = data.c;
    optionInputs[3].nextElementSibling.innerText = data.d;
};


function submitQuize() {
    const data = questions[index];
    const ans = getAnswer();
    if (ans === data.correct) {
        right++;
    } else {
        wrong++;
    }
    index++;
    loadQuestion();
    return;
}
const getAnswer = () => {
    let answer;

    optionInputs.forEach((input) => {
        if (input.checked) {
            answer = input.value;
        }
    });
    return answer;
};

const reset = () => {
    optionInputs.forEach((input) => {
        input.checked = false;
    });
};

const endQuize = () => {
    document.getElementById("box").innerHTML = `

<div style="text-align:center">

<h3> thank you for playing the quize </h3>

<h2> ${right} / ${total} are correct </h2>
</div>

`;
    if (right == total) {
        console.log("have great score");
    } else {
        console.log("bad score");
    }
};

loadQuestion();
