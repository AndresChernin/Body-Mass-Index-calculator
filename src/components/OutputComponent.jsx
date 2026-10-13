function OutputComponent({
    bmi,
    classification,
    minWeight,
    maxWeight,
    errorsMetric,
    errorsImperial
}) {
    const hasErrors =
        errorsMetric.height !== "" || errorsImperial.height!=="" || errorsImperial.weight!==""||
        errorsMetric.weight !== "";

    return (
        <div className={`output-part ${hasErrors ? "output-error" : ""}`}
        >
        
            <p className="visually-hidden" role="status" aria-atomic="true" >

              {hasErrors ? "Please check your details." : bmi ? `Your BMI is ${bmi}.` : ""}

            </p>
            {hasErrors ? (
                <>
                    <p className="middle-width-text">
                        Please check your details
                    </p>

                    <h1>Invalid input</h1>

                   
                </>
            ) : (
                <>
                    <p className="middle-width-text">
                        Your BMI is
                    </p>

                    <h3>{bmi}</h3>

                    <p>
                        Your BMI suggests you're {classification}.
                        Your ideal weight is between
                        <span>
                            {" "}{minWeight}kgs - {maxWeight}kgs
                        </span>.
                    </p>
                </>
            )}

        </div>
    );
}

