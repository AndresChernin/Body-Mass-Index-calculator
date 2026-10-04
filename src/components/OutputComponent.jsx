function OutputComponent({bmi,classification,minWeight, maxWeight}){
   return(
    <div className="output-part">
        <p className="middle-width-text">Your BMI is</p>
        <h1>{bmi}</h1>
        <p>
            Your BMI suggests you're {classification}. 
            Your ideal weight is between 
            <span> {minWeight}kgs - {maxWeight}kgs</span>.
        </p>
    </div>
   ) 
}