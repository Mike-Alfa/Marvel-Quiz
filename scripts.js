const questions = [
    {
        question:"Captain America’s shield is made of:",
        options: ["vibranium","adamantium","kryptonite","chrome"],
        answer: "vibranium"
    },
    {
        question:"Who constructed the shield?",
        options: ["Johann Schmidt","Red Skull","Howard Stark","Bucky Barnes"],
        answer: "Howard Stark"
    },
    {
        question:"True or false: Stan Lee has had cameos in all Marvel Cinematic Universe movies to date",
        options: ["True","False"],
        answer: "True"
    },
    {
        question:"Who is Thor’s adopted sibling?",
        options: ["Odin","Loki","Erik Selvig","Laufry"],
        answer: "Loki"
    },
    {
        question:"What was Dr. Strange’s profession before he became Sorcerer Supreme?",
        options: ["professor","dermatologist","dentist","neurosurgeon"],
        answer: "neurosurgeon"
    },
    {
        question:"What actor played Ant-Man?",
        options: ["Chris Hemsworth","Paul Rudd","Chris Pratt","Benedict Cumberbatch"],
        answer: "Paul Rudd"
    },

];

let question_number = 0;
let correct = 0;

document.addEventListener("DOMContentLoaded",() =>
{
        load_question();

});

function load_question()
{
    document.querySelector("#question").innerHTML = questions[question_number].question;

    const options = document.querySelector("#options");
    options.innerHTML = "";
    
    for(const option of questions[question_number].options){
        options.innerHTML += `<button class="option">${option}</button>`;
    }

    document.querySelectorAll(".option").forEach(option =>
     {
        option.onclick = () =>
        {
            if(option.textContent==questions[question_number].answer)
            {
                correct++;
            }   
            question_number++;  

            document.querySelector("#correct").innerHTML = `${correct} of ${question_number}`;  
            

            if(question_number==questions.length)
            {
                document.querySelector("#question").innerHTML = "Quiz Complete!";
                document.querySelector("#correct").innerHTML = `${correct} of ${question_number}`;
                options.innerHTML = "";
                do
                return false;

            }
            load_question();

        }
        
        
    });

};