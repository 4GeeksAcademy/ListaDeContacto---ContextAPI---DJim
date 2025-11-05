import React, { useState } from 'react'
import { Link, useNavigate } from "react-router-dom"
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";


export const ContactCard = (props) => {


    const navigate = useNavigate()
    const { store, dispatch } = useGlobalReducer()



    return (
        <div>

            <div className="card" style={{ width: "18rem" }}>
                <img src="https://ashisheditz.com/wp-content/uploads/2024/06/frases-chidas-para-foto-de-perfil-de-facebook.jpg" className="card-img-top" alt="..." />
                <div className="card-body">
                   <p className="card-text">{props.informacion.name}</p>
                   <p className="card-text">{props.informacion.email}</p>
                   <p className="card-text">{props.informacion.phone}</p>
                   <p className="card-text">{props.informacion.address}</p>

                    <Link to={'/edit-contact/' + props.informacion.id}>
                        <button className="btn btn-primary">Editar Contacto</button>
                    </Link>

                </div>
            </div>


        </div>
    )
}













<div className="card" style="width: 18rem;">
  <img src="..." className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">Card title</h5>
    <p className="card-text"></p>
    <a href="#" className="btn btn-primary">Go somewhere</a>
  </div>
</div>