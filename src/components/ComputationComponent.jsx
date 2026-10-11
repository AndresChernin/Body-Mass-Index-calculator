function ComputationComponent({unit, handleChangeOfUnit, 
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
            {unit === "metric" &&
            (
              <div className="input-part">            
                <div className="height-input-container-metric">
                    <label className="text-in-height-input-container"
                    htmlFor="height-metric">
                         Height
                    </label>
                    <label className={`label-for-height-input-metric 
                          ${errorsMetric.height === "" ? "" : "error-label"}`}>
                       <input
                          id="height-metric"
                          type="text"
                          value={heightMetric}
                          aria-invalid={errorsMetric.height !== ""}
                          aria-describedby="height-metric-error"
                          onChange={(event) => handleHeightChangeMetric(event)}
                          />
                          <span className="text-for-input">cm</span>
                    </label>
                   <p id="height-metric-error"
                      className={`text-in-height-input-container 
                      ${errorsMetric.height === ""? "no-error" : "error-message"}`}>
                       {errorsMetric.height || "\u00A0"}
                   </p>
                </div>
        
               <div className="weight-input-container-metric">
                    <label className="text-in-weight-input-container"
                    htmlFor="weight-metric">
                         Weight
                    </label>
                    <label className={`label-for-weight-input-metric 
                     ${errorsMetric.weight === "" ? "" : "error-label"}`}>
                        <input
                        id="weight-metric"
                          type="text"
                        value={weightMetric}
                     aria-invalid={errorsMetric.weight !== ""}
                          aria-describedby="weight-metric-error"
                        onChange={(event)=>handleWeightChangeMetric(event)}/>
                      <span className="text-for-input">kg</span>
                    </label>
                <p
                id="weight-metric-error" 
                className={`text-in-height-input-container 
                      ${errorsMetric.weight === ""? "no-error" : "error-message"}`}>
                      {errorsMetric.weight || "\u00A0"}
                 </p>
               </div>
            </div>
            
            )}
            {unit==="imperial" &&(
              <div className="input-part">  
                   <div className={`height-input-container-imperial`}>
                       <label className="text-in-height-input-container">
                           Height
                       </label>
                   <div className={`container-for-height-imperial-input
                       ${errorsImperial.height === "" ? "" : "error-label"}`}>
                       <label
                       htmlFor="height-feet" 
                       className="label-for-feet-input">
                          <input
                           id="height-feet" 
                           type="text" 
                           inputMode="numeric"
                            name="feet" 
                            value={heightImperial.feet} 
                            aria-invalid={errorsImperial.height !== ""} 
                            aria-describedby="height-imperial-error" 
                            onChange={handleHeightChangeImperial}  
                           />
                          <span className="text-for-input">ft</span>
                        </label>
                        <label
                        htmlFor="height-inches" 
                        className="label-for-inches-input">
                             <input
                                 
                                id="height-inches"
                                 type="text"
                                  inputMode="numeric"
                                   name="inches" 
                                   value={heightImperial.inches} 
                                   aria-invalid={errorsImperial.height !== ""} 
                                   aria-describedby="height-imperial-error" 
                                   onChange={handleHeightChangeImperial} 
                                   />
                               <span className="text-for-input">in</span> 
                         </label>           
                   </div>
                   <p className={`error-message ${
                        errorsImperial.height === "" ? "no-error" : ""}`}>
                       {errorsImperial.height || "\u00A0"}
                   </p>
                </div>      
            
            
                <div className="weight-input-container-imperial">
                    <label className="text-in-height-input-container">
                       Weight
                    </label>
                    <div className={`container-for-weight-imperial-input
                    ${errorsImperial.weight === "" ? "" : "error-label"}`}>
                    <label
                    htmlFor="weight-stones" 
                    className="label-for-stones-input">
                      <input
                        id="weight-stones" 
                        type="text" 
                        inputMode="numeric"
                         name="stones" 
                        value={weightImperial.stones}
                        aria-invalid={errorsImperial.weight !== ""} 
                        aria-describedby="weight-imperial-error" 
                        onChange={handleWeightChangeImperial}
                      />
                    <p className="text-for-input">st</p>
                   </label>
                   <label
                   htmlFor="weight-pounds" 
                   className="label-for-pounds-input">
                      <input
                          id="weight-pounds"
                           type="text"
                            inputMode="numeric" 
                            name="pounds"
                             value={weightImperial.pounds}
                              aria-invalid={errorsImperial.weight !== ""} 
                              aria-describedby="weight-imperial-error" 
                              onChange={handleWeightChangeImperial}
                       />
                    <span className="text-for-input">lbs</span>
                  </label>
                </div>
                <p
                id="weight-imperial-error" 
                className={`error-message ${
                   errorsImperial.weight === "" ? "no-error" : ""}`}>
                   {errorsImperial.weight || "\u00A0"}
                </p>
             </div>
           </div>        
            )}
            <OutputComponent bmi={bmi} classification={classification}
                             minWeight={minWeight} maxWeight={maxWeight} errorsMetric={errorsMetric}
                             errorsImperial={errorsImperial}/>
            </div>
        </section>
    )
}