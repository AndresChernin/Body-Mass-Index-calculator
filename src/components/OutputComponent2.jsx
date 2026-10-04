function OutputComponent2({
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
        <div className={`output-part ${hasErrors ? "output-error" : ""}`}>

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

                    <h1>{bmi}</h1>

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

