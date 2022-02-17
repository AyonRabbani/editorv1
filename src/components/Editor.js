import { useContext, useEffect } from "react";
import { CanvasContext } from "./CanvasContext";


export default function Editor() {
    const {canvas, initCanvas} = useContext(CanvasContext)

    
    useEffect( () => {
        initCanvas()
    }, [])

    return <div style={{border: 'solid', height: 400, width: 400}} className="editor">
        <canvas id="canvas" />
    </div>
}