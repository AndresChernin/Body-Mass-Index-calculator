function ExplanationComponent({explanation}){
    return(
        <section className="explanation-part">
            <div className="explanation-part-inner-container">
                 <h1 className="title-part">What your BMI result means</h1>
                 <p className="explanation-text-part">{explanation}</p>
            </div>
        </section>
    )
}