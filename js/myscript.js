// form validation
function validateForm() {
    var username = document.forms["myForm"]["username"].value;
    var pass = document.forms["myForm"]["pass"].value;

    if (username === "") {
        alert("Name must be filled out");
        return false;
    }else if (pass === "") {
        alert("Please enter your password");
        return false;
    }
}

// add question paper

var position = 0, quiz, quiz_status,question,choices,choice ,chkA ,chkB, chkC, correct = 0;
var questions = [
    [ "Which of the following tag represents a piece of content that is only slightly related to the rest of the page in HTML5?", "section", "article", "aside", "C" ],
    [ "Which of the following tag automatically focus one particular form field in HTML5?", "output", "placeholder", "autofocus", "C" ],
    [ "Which of the following attribute specifies if the element must have it's spelling or grammar checked?", "item", "itemcheck", "spellcheck", "C" ],
    [ "Which of the following attribute triggers event when the message is triggered?", "onloadedmetadata", "onmessage", "onoffline", "B" ]
];

function chkTest(x) {
    return document.getElementById(x);
}

function Questions() {
    quiz = chkTest("quiz");
    if(position >= questions.length){
        quiz.innerHTML = "<h2>You got "+correct+" of "+questions.length+" questions correct</h2>";
        chkTest("result").innerHTML = "Test Completed";
        position = 0;
        correct = 0;

        return false;
    }
    chkTest("quiz_status").innerHTML = "Question "+(position+1)+" of "+questions.length;
    question = questions[position][0];
    chkA = questions[position][1];
    chkB = questions[position][2];
    chkC = questions[position][3];
    quiz.innerHTML = "<p>"+question+"</p>";
    quiz.innerHTML += "<input type='checkbox' name='choices' value='A'> "+chkA+"<br>";
    quiz.innerHTML += "<input type='checkbox' name='choices' value='B'> "+chkB+"<br>";
    quiz.innerHTML += "<input type='checkbox' name='choices' value='C'> "+chkC+"<br><br>";
    quiz.innerHTML += "<button class='btn-outline-danger' onclick='checkAnswer()'>Submit</button>";

}
// <div class="checkbox">
//     <label><input type="checkbox" value="">Option 1</label>
// </div>
function checkAnswer(){
    choices = document.getElementsByName("choices");
    for(var i=0; i<choices.length; i++){
        if(choices[i].checked){
            choice = choices[i].value;
        }
    }
    if(choice == questions[position][4]){
        correct++;
    }
    position++;
    Questions();
}
window.addEventListener("load", Questions, false);