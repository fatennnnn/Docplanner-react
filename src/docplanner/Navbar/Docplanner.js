import React from 'react'
import './Docplanner.css'
export default function Docplanner(props) {
    const navbar=props.dropdown
    return (
        <div className="classtotal">
            <img class="logo-docplanner" src="https://www.docplanner.com/img/logo-default-group-en.svg?v=1" alt="Docplanner Group"/>
            <ul className="menu">
            {navbar.map((element, i) => (
                <li className="dropdown" key={i}>
                    <a  className="listee" href="#">{element.elem}</a>
                    {element.active && (
                            <ul className="list">
                                {element.drop.map((e, j) => (
                                    <li className="limenu"  key={j}><a className="lien-menu" href="#">{e}</a></li>
                                ))}

                            </ul>
                        )}



                </li>
            ))}
            </ul>
        </div>
    )
}
