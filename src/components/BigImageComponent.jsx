function BigImageComponent({bigImageLink}){
    return(
        <section className="big-image-part">
         <img src={bigImageLink} className="big-image-container"/>
        </section>
    )
}