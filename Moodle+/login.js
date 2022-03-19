console.log("Moodle+ successfully loaded!");
const login_element = document.querySelector("#login"); // Fill the selector for the login element in ""
let login_text = login_element.innerText;

let question = login_text.split(' ');


let answer = ""; // Use if conditions to parse the question and calculate the answer. Make cases for all types of captcha asked
if (question[5]=="add"){
  answer= String(question[6]+question[8])  
} 
else if (question[5]=="subtract"){
    answer= String(question[6]-question[8])  
}
else if (question[5]=="enter"){
    if (question[6]=="first"){
        answer=String(question[8])
    } 
    else
        answer=String(question[10])
}
const captcha_input_element = document.querySelector("#valuepkg3"); // Fill the selector for the captcha input element in ""
captcha_input_element.value = answer;
