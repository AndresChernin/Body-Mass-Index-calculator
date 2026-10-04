function ComputationComponent2({unit, handleChangeOfUnit, 
    heightMetric, weightMetric, handleHeightChangeMetric, handleWeightChangeMetric,
    heightImperial,weightImperial,handleHeightChangeImperial,handleWeightChangeImperial,
    bmi, classification, minWeight,maxWeight, errorsMetric, errorsImperial
}){
    return(
        <section className="computation-part">
            <div className="computation-part-inner-container">
            <h1 className="h1-for-computation-part">Enter your details below</h1>
            <div className="computation-part-metric-or-imperial-part">
                
                <label className="metric-part">
                    
                        <input
                           type="radio"
                           inputMode="decimal"
                           name="unit"
                        value="metric"
                       checked={unit === "metric"}
                        onChange={handleChangeOfUnit}
                        />
                        <span></span>
                       <p className="text-in-metric-or-imperial-part">Metric</p> 
                </label>

                <label className="imperial-part">
                        <input
                           type="radio"
                            name="unit"
                         value="imperial"
                     checked={unit === "imperial"}
                     onChange={handleChangeOfUnit}
                        />
                        <span></span>
                        <p className="text-in-metric-or-imperial-part">Imperial</p>
                </label>

            </div>
            {unit==="metric" &&
            (
              <div className="input-part">            
                <div className="height-input-container-metric">
                    <p className="text-in-height-input-container">
                         Height
                    </p>
                    <label className={`label-for-height-input-metric 
                          ${errorsMetric.height==="" ? "" : "error-label"}`}>
                       <input
                          type="text"
                          value={heightMetric}
                     
                          onChange={(event)=>handleHeightChangeMetric(event)}/>
                          <p className="text-for-input">cm</p>
                    </label>
                   <p className={`text-in-height-input-container 
                      ${errorsMetric.height===""? "no-error" : "error-message"}`}>
                       {errorsMetric.height || "\u00A0"}
                   </p>
                </div>
        
               <div className="weight-input-container-metric">
                    <p className="text-in-weight-input-container">
                         Weight
                    </p>
                    <label className={`label-for-weight-input-metric 
                     ${errorsMetric.weight==="" ? "" : "error-label"}`}>
                        <input
                        type="text"
                        value={weightMetric}
                     
                        onChange={(event)=>handleWeightChangeMetric(event)}/>
                      <p className="text-for-input">kg</p>
                    </label>
                <p className={`text-in-height-input-container 
                      ${errorsMetric.weight===""? "no-error" : "error-message"}`}>
                      {errorsMetric.weight || "\u00A0"}
                 </p>
               </div>
            </div>
            
            )}
            {unit==="imperial" &&(
              <div className="input-part">  
                   <div className={`height-input-container-imperial`}>
                       <p className="text-in-height-input-container">
                           Height
                       </p>
                   <div className={`container-for-height-imperial-input
                       ${errorsImperial.height==="" ? "" : "error-label"}`}>
                       <label className="label-for-feet-input">
                          <input
                             type="text"
                             inputMode="numeric"
                             name="feet"
                             min="0"
                             value={heightImperial.feet}
                     
                            onChange={handleHeightChangeImperial}/>
                          <p className="text-for-input">ft</p>
                        </label>
                        <label className="label-for-inches-input">
                             <input
                                type="text"
                                name="inches"
                                value={heightImperial.inches}
                                onChange={handleHeightChangeImperial}/>
                            <p className="text-for-input">in</p>
                        </label>
                   </div>
                   <p className={`error-message ${
                        errorsImperial.height === "" ? "no-error" : ""}`}>
                       {errorsImperial.height || "\u00A0"}
                   </p>
                </div>      
            
            
                <div className="weight-input-container-imperial">
                    <p className="text-in-height-input-container">
                       Weight
                    </p>
                    <div className={`container-for-weight-imperial-input
                    ${errorsImperial.weight==="" ? "" : "error-label"}`}>
                    <label className="label-for-stones-input">
                      <input
                         type="text"
                         name="stones"
                         value={weightImperial.stones}
                         onChange={(event)=>handleWeightChangeImperial(event)}
                      />
                    <p className="text-for-input">st</p>
                   </label>
                   <label className="label-for-pounds-input">
                      <input
                          type="text"
                          name="pounds"
                          value={weightImperial.pounds}
                          onChange={(event)=>handleWeightChangeImperial(event)}
                       />
                    <p className="text-for-input">lbs</p>
                  </label>
                </div>
                <p className={`error-message ${
                   errorsImperial.weight === "" ? "no-error" : ""}`}>
                   {errorsImperial.weight || "\u00A0"}
                </p>
             </div>
           </div>        
            )}
            <OutputComponent2 bmi={bmi} classification={classification}
                             minWeight={minWeight} maxWeight={maxWeight} errorsMetric={errorsMetric}
                             errorsImperial={errorsImperial}/>
            </div>
        </section>
    )
}