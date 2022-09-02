class person {
    constructor(name, weight, height) {
        this.name = name;
        this.weight = weight;
        this.height = height;
    }
}

var bmiList = [];

function calc() {
    
    let name = document.querySelector("#name").value;
    let weight = document.querySelector("#weight").value;
    let height = document.querySelector("#height").value;
    let res = document.querySelector("#res");

    let bmi = (weight / ((height * height)) * 10000).toFixed(1);

    if (bmi < 18.6) res.innerHTML = 
        `Your BMI is : <span>${bmi}</span> which indicates underweight`;
    else if (bmi >= 18.6 && bmi < 24.9) res.innerHTML =
        `Your BMI is: <span>${bmi}</span> which indicates a normal weight`;
    else res.innerHTML =
        `Your BMI is : <span>${bmi}</span> which indicates overweight`;

    var bmiCalc = new person(name, weight, height);
    bmiList.push(bmiCalc);
    console.log(bmiList);
};