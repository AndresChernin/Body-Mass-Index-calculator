class BMIController{
    constructor(BMIModel){
        
        this.model=BMIModel;
        
    }
    calculateBMI(unit, height, weight){
        let aktHeight=height;
        let aktWeight=weight;
        
        if(unit === "imperial"){
            aktHeight=this.convertHeightImperial(aktHeight);
            
            aktWeight=this.convertWeightImperial(aktWeight);
            
        }
        this.model.setHeight(aktHeight);
        this.model.setWeight(aktWeight);
        let bmiAkt=this.model.calculateBMI();
        
       return bmiAkt;
    }
    calculateHealthyWeightRange(){
        const range = this.model.calculateHealthyWeightRange();
        return range;
    }
    setBMI(bmi){
       
        this.bmi=bmi;
        
    }
    getBMI(){
        return this.bmi;
    }
    setBMIData(){
        
        
        this.bmiDataResult = this.model.getBMIData(this.bmi);
        

    }
    getClassification(){
       
        
        return this.bmiDataResult.classification;
    }
    getExplanation() {
    const explanation =
        `Your BMI = ${this.bmi} ∈` +
        `[${this.bmiDataResult.min}, ${this.bmiDataResult.max}]. ` +
        `${this.bmiDataResult.explanation}`;

    return explanation;
}
    convertHeightImperial(height) {
        
    const totalInches = Number(height.feet) * 12 + Number(height.inches);

    const heightMetric = totalInches * 2.54;

    return heightMetric;
   }
    convertWeightImperial(weight) {
    const totalKg = weight.stones * 6.35029318 + weight.pounds* 0.453592;

    

    return totalKg;
    }
    containsWrongSymbols(value){
        let containsMinus=false;
        if((!/^\d*\.?\d*$/.test(value))){containsMinus=true};
        return containsMinus;
    }
    containsNegativeValues(value){
        let containsMinus=false;
        if(value.includes("-")){containsMinus=true};
        return containsMinus;
    }
    controllMetricHeight(height){
        if(height<50 || height >250){
            return "Height must be between 50 and 250 cm."
        }
        else return "";
    }
    controllMetricWeight(weight){
        if(weight<20 || weight >300){
            return "Weight must be between 20 and 300 kg."
        }
        else return "";
    }
    controllImperialHeight(height){
        
      const feet=height.feet;
      const inches=height.inches;
      
      const heightCm=this.convertHeightImperial(height);
      if (inches < 0 || inches > 11) {
         return "Inches muss be between 0 and 11";
     }
     else  if(heightCm<50 || heightCm >250){
            return "Height must be ∈[1ft 7.7in , 8ft 2.45 in]"
        }
        else return "";
    }
    controllImperialWeight(weight){
        
      const stones=weight.stones;
      const pounds=weight.pounds;
      
      const weightKg=this.convertWeightImperial(weight);
      
      if (pounds < 0 || pounds > 13) {
         return "Pounds muss be between 0 and 13";
     }
     else  if(weightKg<20 || weightKg >300){
            return "Weight must be ∈[3st 2.1lbs , 47st 3.4lbs]"
        }
        else return "";
    }
    
} 