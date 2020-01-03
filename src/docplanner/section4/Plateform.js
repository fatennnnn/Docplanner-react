import React from 'react'
import "./Plateform.css"

export default function Plateform(props) {
    const plateformee=props.plateforme
    return (
        <div className="section-plateform">
            

            <div className="section-plateform-left">
                <h1>The world's
                          biggest health care platform</h1>
        <p> We work from 6 offices all over the world, bringing Docplanner Group to life in almost 20 countries.</p>

        <img className="lead-logo-back"
          src="https://res-5.cloudinary.com/crunchbase-production/image/upload/c_lpad,f_auto,q_auto:eco/jcmy9zzlqh682l0my9p3" />
      </div>
      <div className="section-plateform-right"  >
          {plateformee.map((element,i)=>(
        <div className={element.condition?"plate1 plate-r":"plate2 plate-r"}   key={i} >

          <img src={element.logo} />
          <h3>{element.description}</h3>
          <p className="countries">{element.text}</p>
        </div>
        ))}
        </div>
        
        </div>
    )
}
