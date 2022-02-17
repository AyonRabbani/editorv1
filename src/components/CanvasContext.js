import {createContext} from 'react'; 


export const CanvasContext = createContext({
    canvas: '', 
    cavnasObjA: '', 
    cavnasObjB: '', 
    cavnasObjC: '', 
    cavnasObjD: '', 
    initCanas: () => {}, 
    saveCanvas: () => {}, 
    clearCanvasObjs: () => {}, 
})