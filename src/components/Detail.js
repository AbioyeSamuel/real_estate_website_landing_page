import React from 'react'
import "./Detail.css";

function Detail(props) {
  return (
    <div>
    <img className='details' src={props.image} alt={props.alt}/>
     <p class="detail-text">{props.detailInfo}</p>
    </div>
  )
}

export default Detail;