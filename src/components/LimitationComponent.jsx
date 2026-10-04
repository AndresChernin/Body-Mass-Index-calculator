function LimitationComponent({imgLink, title, explanation}){
    return(
        <div className="limitation-component">
            <div className="title-bild-part">
               <img src={imgLink} className="limitation-img"/>
               <p className="limitation-component-title">{title}</p>
            </div>
            <p className="limitation-explanation-part">{explanation}</p>
        </div>
    )
}