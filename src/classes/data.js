const bmiData = [
    {
        min: 0,
        max: 15.9,
        classification: "Severely underweight",
        explanation: "Your BMI is very low. A very low BMI can be associated with health risks and may require medical attention."
    },
    {
        min: 16,
        max: 18.4,
        classification: "Underweight",
        explanation: "Your BMI is below the healthy range. Consider maintaining a nutritious diet and speaking with a healthcare professional if you have concerns about your weight."
    },
    {
        min: 18.5,
        max: 24.9,
        classification: "Healthy weight",
        explanation: "Your BMI is in the healthy weight. Maintaining a healthy weight may lower your chances of experiencing health issues later on, such as obesity and type 2 diabetes."
    },
    {
        min: 25,
        max: 29.9,
        classification: "Overweight",
        explanation: "Your BMI is above the healthy range. A balanced diet and regular physical activity can help you maintain a healthier weight."
    },
    {
        min: 30,
        max: 34.9,
        classification: "Obese",
        explanation: "Your BMI is within the obesity range. Consider speaking with a healthcare professional about healthy ways to manage your weight."
    },
    {
        min: 35,
        max: 39.9,
        classification: "Severely obese",
        explanation: "Your BMI is considerably above the healthy range. Professional medical advice can help you identify appropriate steps for improving your health."
    },
    {
        min: 40,
        max: Infinity,
        classification: "Very severely obese",
        explanation: "Your BMI is well above the healthy range. Consider speaking with a healthcare professional about appropriate health and weight-management options."
    }
];
export default bmiData;
