function IntroductionComponent({logoImg}){
    return(
        <section className="introduction-part">
            <div className="introduction-part-inner-container">
                <img src={logoImg}/>
                <h1>Body Mass Index Calculator</h1>
                <p>Better understand your weight in relation to your height using our 
                   body mass index (BM) calculator. While BMI is not the sole determinant 
                   of a healthy weight, it offers a valuable starting point to evaluate 
                   your overall health and well-being.</p>
            </div>
        </section>
    )
}