function HealthyTip({imgLink,title,explanation}){
    return(
        <div className="healthy-tipp-part">
            <img src={imgLink} className="tip-image-container" alt=""/>
            <h2 className="healthy-tipp-title">{title}</h2>
            <p className="healthy-tipp-explanation">{explanation}</p>
        </div>
    )
}