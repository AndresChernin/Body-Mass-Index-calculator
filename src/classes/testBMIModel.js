import BMIModel from "./BMIModel.js";
import bmiData from "./data.js";
const bmiModel = new BMIModel(bmiData);
bmiModel.setHeight(180);
bmiModel.setWeight(180);
console.log("Height:", bmiModel.height);
console.log("Weight:", bmiModel.weight);

console.log("BMI:", bmiModel.calculateBMI());

const range = bmiModel.calculateHealthyWeightRange();

console.log("Minimum:", range.min);
console.log("Maximum:", range.max);
const bmi = bmiModel.calculateBMI();

const bmiDataResult = bmiModel.getBMIData();

console.log(bmi);
console.log(bmiDataResult.classification);
console.log(bmiDataResult.explanation);