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

    //the formula is normally for height in meters, since I use cm, the result has to be multiplied with 10000
    let bmi = (weight / ((height * height)) * 10000).toFixed(1);

    //if underweight
    if (bmi < 18.6) res.innerHTML = 
        `Your BMI is : <span>${bmi}</span> which indicates underweight`;
    //if normal weight
    else if (bmi >= 18.6 && bmi < 24.9) res.innerHTML =
        `Your BMI is: <span>${bmi}</span> which indicates a normal weight`;
    //if overweight  
    else res.innerHTML =
        `Your BMI is : <span>${bmi}</span> which indicates overweight`;

    //creating the object
    var bmiCalc = new person(name, weight, height);
    //pushing the object to a list
    bmiList.push(bmiCalc);
    //printing the full list in the console
    console.log(bmiList);
};