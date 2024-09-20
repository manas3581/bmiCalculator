const form= document.querySelector("form");
form.addEventListener("submit", function(e)  {
    e.preventDefault();
  
    const height = parseInt(document.querySelector('#height').value);
    const weight = parseInt(document.querySelector('#weight').value);
    const results = document.querySelector("#results");

    if(height==='' || height<0||isNaN(height)){
        results.innerHTML = `Height is not valid it is ${height}`;
    }

    else if(weight==='' || weight<0||isNaN(weight)){
        results.innerHTML = `weight is not valid it is ${weight}`;
    }
    else{
        const bmi = (weight/((height*height)/10000)).toFixed(2);
        let category;

        if (bmi <= 18.6) {
            category = "Underweight";
        } else if (bmi <= 24.9) {
            category = "Normal weight";
        } else {
            category = "Overweight";
        }

        results.innerHTML = `Your BMI is <span>${bmi}</span>. You are ${category}.`;   
    
    }
})