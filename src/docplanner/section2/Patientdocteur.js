import React from 'react'
import './Patientdocteur.css'

function Patientdocteur(props) {
    const  patientdoc=props.Patientdo

    return (
        <div className="patient-docteur">
        {patientdoc.map((element, i) => (

        <div   className={element.image?"patient":"doctor"} key={i}> 
         <div className="patient-title">
         <h6>{element.elem}</h6>
         <h2>{element.title}</h2>
         </div>
         <div className="part-patient" >
         {element.option && (
         <select>
         {element.option.map((e, j) => (
          <option key={j}>{e}</option>
          ))}
         </select>
         )}
        
        <img className={element.image?"img-patient":"img-doctor"} src={element.img}/>
        </div>

       </div>
    ))}
        </div>
    )
}

export default Patientdocteur
