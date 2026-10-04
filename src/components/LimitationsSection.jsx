function LimitationsSection({data}){
    return(
        <section className="limitations-part">
            <div className="limitations-inner-container">
                <div className="limitations-title-intro-part">
                   <h1 className="limitations-part-title">Limitations of BMI</h1>
                   <p className="limitation-intro-part">Although BMI is often a practical indicator 
                      of healthy weight, it is not suited for 
                      every person. Specific groups should carefully consider
                      their BMI outcomes, and in 
                      certain cases, the measurement may not be beneficial to use.
                   </p>
               </div>
             {data.map((limitation) => (
          <LimitationComponent
            key={limitation.title}
            imgLink={limitation.imgLink}
            title={limitation.title}
            explanation={limitation.explanation}
          />
        ))}
            </div>
        </section>
    )
}