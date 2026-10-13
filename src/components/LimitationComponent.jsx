function LimitationComponent({imgLink, title, explanation}){
    return(
        <div className="limitation-component">
            <div className="title-bild-part">
               <img src={imgLink} className="limitation-img" alt=""/>
               <h3 className="limitation-component-title">{title}</h3>
            </div>
            <p className="limitation-explanation-part">{explanation}</p>
        </div>
    )
}