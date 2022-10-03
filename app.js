//Get the value of the text field.
//Since the value of a text field is a string,it will be transform into an array.
//Loop through the transformed array to find the vowels within the word or sentence.
//Prevent the output from displaying when text field is empty
//Indicate or display the number of vowels found in the value of the text field.


const formField = document.querySelector(".form-field");
const messageField = document.querySelector("#message-field");
const searchBtn = document.querySelector(".search-btn");
const displayedResult = document.querySelector(".displayed-result");

searchBtn.addEventListener('click', (e) =>{
    e.preventDefault(formField);

    vowelLength();
    preventDisplay();
    clearField();
});

//finding the number of vowels in the word or sentence
function vowelLength(){
    const outputValue = []
    let textValue = messageField.value;
    let transformStr = textValue.split("");
    

    for (i= 0;i< transformStr.length;i++){
        if(transformStr[i] === "A" || transformStr[i] === "a"){
            outputValue.push("A" || "a")
        } else if(transformStr[i] === "E" || transformStr[i] === "e"){
            outputValue.push("E" || "e")
        }else if(transformStr[i] === "I" || transformStr[i] === "i"){
            outputValue.push("I" || "i")
        }else if(transformStr[i] === "O" || transformStr[i] === "o"){
            outputValue.push("O" || "o")
        }else if(transformStr[i] === "U"|| transformStr[i] === "u"){
            outputValue.push("U" || "u")
        }
    };
    
    displayedResult.textContent = `It has ${outputValue.length} vowels in it.`
}

// preventing the display of output when the text field is empty
function preventDisplay(){
    
    messageField.value === ""? displayedResult.style.display ="none": displayedResult.style.display = "block"
}


//clearing the input field after clicking the button
let clearField = () => formField.reset();
