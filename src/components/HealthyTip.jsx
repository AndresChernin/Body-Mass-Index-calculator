function HealthyTip({imgLink,title,explanation}){
    return(
        <div className="healthy-tipp-part">
            <img src={imgLink} className="tip-image-container"/>
            <h1 className="healthy-tipp-title">{title}</h1>
            <p className="healthy-tipp-explanation">{explanation}</p>
        </div>
    )
}