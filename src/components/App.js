import React from "react";
import {fabric} from "fabric"; 

import { CanvasContext } from "./CanvasContext"
import Editor from "./Editor"; 
import Products from "./Products";

export default class App extends React.Component {
    constructor(){
        super(); 
        // initalize canvas.. used in Editor component
        this.initCanvas = () => {
            this.setState({canvas: new fabric.Canvas('canvas', {
                backgroundColor: 'blue',
                height: 400, 
                width: 400
            })})
        }
        //
        this.saveCanvas = (previousView) => {
            if (previousView == "front" ) {
                this.setState({
                    cavnasObjA: JSON.stringify(this.state.canvas)
                })
            }
            if (previousView == "back" ) {
                this.setState({
                    cavnasObjB: JSON.stringify(this.state.canvas)
                })
            }
            if (previousView == "side" ) {
                this.setState({
                    cavnasObjC: JSON.stringify(this.state.canvas)
                })
            }
            if (previousView == "collar" ) {
                this.setState({
                    cavnasObjD: JSON.stringify(this.state.canvas)
                })
            }
        }
        //clear all canvas objs... used in 
        this.clearCanvasObjs = () => {
            this.setState({
                cavnasObjA: '', 
                cavnasObjB: '', 
                cavnasObjC: '', 
                cavnasObjD: '',
            }, () => {this.state.canvas.clear()})
        }

        this.state = {
            canvas: '', //canvas is the base canvas that is present at all times
            cavnasObjA: '', 
            cavnasObjB: '', 
            cavnasObjC: '', 
            cavnasObjD: '', 
            initCanvas: this.initCanvas, 
            saveCanvas: this.saveCanvas, 
            clearCanvasObjs: this.clearCanvasObjs,

        }; 
    }

    render(){
        return <CanvasContext.Provider value={this.state}>
        {/* <Products />
        <Editor /> */}
        </CanvasContext.Provider>
}}