import React from 'react'
import './CardList.css'
import people from '../Svgs/people.png'
import house from '../Svgs/house.png'
import friend from '../Svgs/friend.png'
import message from '../Svgs/message.png'


function CardList(props) {
  return (
    <div className='Container'>

        <div className='CardList'>
    
            <div className='Image'>
               <img src={props.image} alt="Imagez" />

            </div>

            <div className='Text'>
                <h2>{props.name}</h2>
                
                <div className="info">
                    <img className='svg' src={people} alt="Peoplez" />&nbsp;&nbsp;  
                    {props.mfriends} mutual friends including <b>{props.friends}</b>
                    and <b>{props.friends2}</b> 

                    <p>
                        <img className='svg' src={house} alt="housez" />&nbsp;&nbsp;Lives in <span>{props.location}, Nigeria</span> 
                    </p>

                </div>
                     
            </div>

        </div>
        <button id='btn1'> <img className='svg' src={friend} alt="feiendz" />&nbsp;Friends</button> &nbsp;&nbsp;

        <button id='btn2'><img className='svg' src={message} alt="messagez" />&nbsp;Message</button>

    </div>
   
  )
}

export default CardList;