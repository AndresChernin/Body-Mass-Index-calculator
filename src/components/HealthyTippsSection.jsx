function HealthyTippsSection({healthyData}){
    return(
        <section className="healthy-tipps-part">
            <div className="healthy-tipps-inner-container">
                {healthyData.map((tip) => (
          <HealthyTipp
            key={tip.title}
            imgLink={tip.imgLink}
            title={tip.title}
            explanation={tip.explanation}
          />
        ))}
            </div>
        </section>
    )
}