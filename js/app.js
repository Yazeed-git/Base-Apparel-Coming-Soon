function validate(){
    let form = document.getElementById("form")
    let inputBox = document.querySelector(".input-box")
    let input = document.querySelector("input")
    let userInput = document.getElementById("input").value 
    let errorMessage = document.getElementById("error-message")
    let pattern = /^[^]+@[^]+\.[a-z]{2,3}$/

    if(userInput.match(pattern)){
        errorMessage.textContent = ""
        inputBox.classList.remove("invalid")
    }
    else{
        inputBox.classList.add("invalid")
        errorMessage.textContent = "Please provide a valid email"
        input.required = "false"
    }
    

}

// function handleForm(event) { event.preventDefault(); } 
// form.addEventListener('submit', handleForm);