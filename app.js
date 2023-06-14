/* Select the elements */
// The subscribe button
// The dismiss button
// The form
// The success message

let subscribe = document.querySelector('.submitBtn');
let dismiss = document.querySelector(".dismiss");
let form = document.querySelector(".form");
let success = document.querySelector(".success");
let header = document.querySelector(".head");
let input = document.querySelector(".input");
let error = document.querySelector(".error-message");

let validate = function(string){
    /* just a simple regex  validation for testing */
    let regex = /^\w+\d+@gmail.com$/gi;
    return regex.test(string);
}

subscribe.addEventListener("click", function(){
    let value = input.value;
    if (validate(value)) {
        form.style.display = "none";
        header.style.display = "none";
        success.style.display = "block";
    }
    else if(validate(value)===false){
        input.classList.add("error-init");
        input.style.borderColor = "red";
        error.style.visibility = "visible";

    }


});

dismiss.addEventListener("click", function(){
    success.style.display = "none";
    form.style.display = "block";
    header.style.display = "block";
    input.classList.remove("error-init");
    input.style.borderColor = "grey";
    error.style.visibility = "hidden";
});
