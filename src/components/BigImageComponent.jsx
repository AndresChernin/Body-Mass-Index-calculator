function BigImageComponent({bigImageLink}){
    return(
        <section className="big-image-part">
         <img src={bigImageLink} className="big-image-container"
         alt="Illustration of a person representing health and well-being"/>
        </section>
    )
}