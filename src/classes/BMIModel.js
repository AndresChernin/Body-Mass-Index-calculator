class BMIModel {
    constructor( data) {
        
        this.data=data;
    }

    calculateBMI() {
        let bmi= this.weight / ((this.height / 100) ** 2);
        return bmi.toFixed(1)
    }
    setHeight(height){
        this.height=height;
    }
    setWeight(weight){
        this.weight=weight;
    }
    calculateHealthyWeightRange() {
        const heightInMeters = this.height / 100;

        const minWeight = 18.5 * (heightInMeters ** 2);
        const maxWeight = 24.9 * (heightInMeters ** 2);

        return {
            min: minWeight.toFixed(1),
            max: maxWeight.toFixed(1)
        };
    }
    getBMIData(bmi) {
        

        return this.data.find(
            (range) => bmi >= range.min && bmi <= range.max
        );
    }

}
