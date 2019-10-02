let generate = document.getElementById("generate");
let numArray = [];
let result = document.getElementById("result");
let amount = parseInt(document.getElementById("amount").value); 
let lowest = parseInt(document.getElementById("lowest").value);
let highest = parseInt(document.getElementById("highest").value);
let randomNum = Math.floor(Math.random() * (highest - lowest + 1)) + lowest;

generate.addEventListener("click", function() {
    if (amount === 0 || lowest <= 0 || highest <= 0 || (highest - lowest + 1) < amount) {
        result.textContent = "wrong insertion!";
    } else {
        for (let i = 0; numArray.length < amount; i++) {
            if (numArray.includes(randomNum)) {  
                numArray.push(randomNum);
            }
        }
        numArray.sort(function(a, b) {return a-b});
        result.textContent = numArray;
    }
})


