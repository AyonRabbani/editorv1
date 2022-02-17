import { useState, useContext } from 'react'; 

import ProductViews from './ProductViews';

// product images 
import shirt from '../img/shirt.png';
import longT from '../img/longT.png';
import hoodie from '../img/hoodie.png'; 
import sweater from '../img/sweater.png'; 

// css 
import "../css/Products.css"; 

export default function Products() {
    const [product, setProduct] = useState('')
    const [clear, setClear] = useState(false)

    function showViews(e){ 
        // the current product selected
        var currentProduct = e.target.name

        // if another product was selected, then clear is set to true
        // the clear variable is passed to ProductViews component
        if(currentProduct !== product){
            setClear(true)
        }

        // then current product becomes previous product 
        setProduct(currentProduct)
    }

    return<div className='productsContainer'>
        <div className='productImages'>
            <div><img src={shirt} name="shirt" onClick={(e) => {showViews(e)}} /></div>
            <div><img src={longT} name="longT" onClick={(e) => {showViews(e)}} /></div>
            <div><img src={hoodie} name="hoodie" onClick={(e) => {showViews(e)}} /></div>
            <div><img src={sweater} name="sweater" onClick={(e) => {showViews(e)}} /></div>
        </div>
        <ProductViews productName = {product} clearCanvas = {clear} setClear = {setClear}/>
    </div>
}