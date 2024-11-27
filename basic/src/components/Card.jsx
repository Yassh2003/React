import React from 'react'
import './Card.css'
import Button from './Button'

const Card = (props) => {
  return (
    <div className='outer' style={props.style}>
        <div id='card-head'>
            <p>{props.cardhead}</p>
        </div>
        <div id='card-mid'>
            <p>{props.cardmid}</p>
        </div>
        <div id='card-para'>
            <p>{props.cardpara}</p>
        </div>
        <hr id='hori'/>
        <div id='bottom-head'> 
            <p>{props.bottomhead}</p>
        </div>
        <div id='lower'>
            <div id='per-div'>
                <p>{props.perdiv}</p>
            </div>
            <div id='but-div'>
                <Button style={{"backgroundColor":"black","color":"white"}}/>
            </div>
        </div>
    </div>
  )
}

export default Card