import React from 'react'
import './Country.css'

export default function Country(props) {
   const differenttcountry=props.differentcountry
    return (
        <div className="discover-countries">
            
           {differenttcountry.map((element,i)=>(
               <a className="discover-countrie" href={element.lien}>
                   <div key={i} className="discover-differents-countries">
                   <img src={element.imagee}/>


                   <div>
            <p>{element.paragraphe}</p>
            <input type="button" value={element.value} />
                </div>

                 </div>



</a>
           )
           
           )
           
           
           }
        </div>
    )
}
