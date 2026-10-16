function HealthyTipsSection({healthyData}){
    return(
        <section className="healthy-tipps-part">
            <div className="healthy-tipps-inner-container">
                {healthyData.map((tip) => (
          <HealthyTip
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