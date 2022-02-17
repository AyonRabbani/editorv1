import React from 'react';

import shirt from '../img/shirt.png';
import longT from '../img/longT.png';
import hoodie from '../img/hoodie.png'; 
import sweater from '../img/sweater.png'; 


export default function SelectView({productName, handleView}) {
  
  return <div className="productViews">  
  {productName === "shirt" && <div className='viewContainer'>
      <div>
      <p>Front</p>
      <img className="view" src={shirt}
      name="front" onClick={(e) => {handleView(e, shirt)}}/>
      </div>
      <div>
      <p>Back</p>
      <img className="view" src={shirt}
      name="back" onClick={(e) => {handleView(e, shirt)}}/>
      </div>
      <div>
      <p>Side</p>
      <img className="view" src={shirt}
      name="side" onClick={(e) => {handleView(e, shirt)}}/>
      </div>
      <div>
      <p>Collar</p>
      <img className="view" src={shirt}
      name="collar" onClick={(e) => {handleView(e, shirt)}}/>
      </div>
  </div>}

  {productName === "longT" && <div>
      <img className="view" src={longT}
      name="front" onClick={(e) => {handleView(e, longT)}}/>
      <img className="view" src={longT}
      name="back" onClick={(e) => {handleView(e, longT)}}/>
      <img className="view" src={longT}
      name="side" onClick={(e) => {handleView(e, longT)}}/>
      <img className="view" src={longT}
      name="collar" onClick={(e) => {handleView(e, longT)}}/>
  </div>}

  {productName === "hoodie" && <div>
      <img className="view" src={hoodie}
      name="front" onClick={(e) => {handleView(e, hoodie)}}/>
      <img className="view" src={hoodie}
      name="back" onClick={(e) => {handleView(e, hoodie)}}/>
      <img className="view" src={hoodie}
      name="side" onClick={(e) => {handleView(e, hoodie)}}/>
      <img className="view" src={hoodie}
      name="collar" onClick={(e) => {handleView(e, hoodie)}}/>
  </div>}

  {productName === "sweater" && <div>
      <img className="view" src={sweater}
      name="front" onClick={(e) => {handleView(e, sweater)}}/>
      <img className="view" src={sweater}
      name="back" onClick={(e) => {handleView(e, sweater)}}/>
      <img className="view" src={sweater}
      name="side" onClick={(e) => {handleView(e, sweater)}}/>
      <img className="view" src={sweater}
      name="collar" onClick={(e) => {handleView(e, sweater)}}/>
  </div>}
</div>;
}

