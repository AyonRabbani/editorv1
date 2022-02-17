import React, {useContext, useState, useEffect} from 'react';

import { CanvasContext } from './CanvasContext';
import SelectView from './SelectView';
import "../css/ProductView.css"; 


export default function ProductViews({productName, clearCanvas, setClear}) {
    const {canvas, 
    cavnasObjA, 
    cavnasObjB, 
    cavnasObjC, 
    cavnasObjD, 
    saveCanvas, 
    clearCanvasObjs} = useContext(CanvasContext)
    
    const [previousView, setPreviousView] = useState('')    
    
    // clear from Products component becomes clearCanvas variable
    useEffect(() => {
        // if clearCanvas is true, then the canvas is cleared
        if (clearCanvas === true) {
            // all canvas objs are cleared 
            clearCanvasObjs()
            // clear variable is set to false
            setClear(false)
            // previous view is reset 
            // this is important, if previous view is not reset than objects
            // will save to wrong states 
            setPreviousView('')
        }
    })

    function handleView(e, viewImage){
        var currentView = e.target.name 
        
        // this code will save the chosen view to cavnasObj's on inital selection
        // if previous view is different... then save current view to where it belongs
        if (currentView !== previousView) {
            saveCanvas(previousView)
        }

        // then it will load that view depending on where it was saved
        if (currentView == "front" && cavnasObjA){
            canvas.loadFromJSON(cavnasObjA)
        }
        if (currentView == "back" && cavnasObjB){
            canvas.loadFromJSON(cavnasObjB)
        }
        if (currentView == "side" && cavnasObjC){
            canvas.loadFromJSON(cavnasObjC)
        }
        if (currentView == "collar" && cavnasObjD){
            canvas.loadFromJSON(cavnasObjD)
        }

        // then assign current view to previous view
        setPreviousView(e.target.name)
        // then change the background
        changeBackground(viewImage)
  }  

  // function changes the canvas background
  function changeBackground(viewImage){
      canvas.clear()
      canvas.setBackgroundImage(viewImage, () => {
          canvas.backgroundImage.scaleToHeight(400)
          canvas.backgroundImage.scaleToWidth(400)
          canvas.renderAll()
      })
  }

    return <div>
    {/* I manually placed all the views here, will need to turn into API */}
    <SelectView productName={productName} handleView={handleView}/> 
    </div>;
}
