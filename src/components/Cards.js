import React from 'react';
import './Cards.css';
import Detail from './Detail';

function Cards(props) {
  return (
    <div className="row">
    <div className="col-lg-6 card-col" style={{width: "25rem"}}>
    <div className="card" >
  <Detail image={props.imageL}/>
  <div class="card-body">
  <Detail detailInfo={props.detailL} />
  </div>
</div>
    </div>
    <div className="col-lg-6 card-col" style={{width: "25rem"}}>
    <div className="card" >
    <Detail image={props.imageR}/>
  <div class="card-body">
  <Detail detailInfo={props.detailR} />
  </div>
</div>
    </div>
    
  </div>
  
  
  
  );
}

export default Cards;