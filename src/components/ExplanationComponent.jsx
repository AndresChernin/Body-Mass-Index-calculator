function ExplanationComponent({explanation}){
    return(
        <section className="explanation-part">
            <div className="explanation-part-inner-container">
                 <h2 className="title-part">What your BMI result means</h2>
                 <p className="explanation-text-part">{explanation}</p>
            </div>
        </section>
    )
}