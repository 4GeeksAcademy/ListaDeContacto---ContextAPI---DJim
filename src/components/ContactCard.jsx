import React, { useState } from 'react'
import { useNavigate } from "react-router-dom"
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faLocationDot,
    faPhoneVolume,
    faEnvelope,
    faTrashCan,
    faPen,
} from "@fortawesome/free-solid-svg-icons";


export const ContactCard = (props) => {

     
   const deleteContact = async (id) => {
    const { store, dispatch } = useGlobaleducer()
        try {
          
          const response = await fetch("https://playground.4geeks.com/contact/agendas/david/contacts" + "/contacts" + `/${id}`, {
            method: "DELETE",
          });
          if (!response.ok) {
            alert("No se puede borrar");
            throw new Error("No se pudo borrar el contacto");
          } else {
            const filteredContacts = store.contacts.filter(
              (contact) => contact.id !== id
            );
            dispatch({
                type: "delete_contacts", 
                payload: filteredContacts 
              })
          }
        } catch (e) {
          console.error(e);
        }
      }
   



    return (
        <div>

            <div className="row">
                <div className="col-md-2">
                    <img
                        src="https://ashisheditz.com/wp-content/uploads/2024/06/frases-chidas-para-foto-de-perfil-de-facebook.jpg"
                        className="d-flex mx-auto img-fluid rounded-circle mt-3 mb-3"
                        alt=""
                    />
                </div>
                <div className="col-md-7">
                    <div className="card-body">
                        <h5 className="card-title text-align-start mb-3">{props.informacion.name}</h5>
                        <div className="ms-6">
                            <div className="col-md-10 d-flex justify-content-end mx-auto">
                                <div className="pe-5">
                                    <span>
                                        <FontAwesomeIcon icon={faPen} />
                                    </span>
                                </div>
                                <div className="pe-5">
                                    <span>
                                        <FontAwesomeIcon icon={faTrashCan} />
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div className="d-flex">
                            <div>
                                <p className="card-text pe-5 mb-2">
                                    <FontAwesomeIcon icon={faLocationDot} />
                                </p>
                            </div>
                            <div>{props.informacion.address}</div>
                        </div>
                        <div className="d-flex">
                            <div>
                                <p className="card-text pe-5 mb-2">
                                    <FontAwesomeIcon icon={faPhoneVolume} />
                                </p>
                            </div>
                            <div>
                                <div>{props.informacion.phone}</div>
                            </div>
                        </div>
                        <div className="d-flex">
                            <div>
                                <p className="card-text pe-5 mb-2">
                                    <FontAwesomeIcon icon={faEnvelope} />
                                </p>
                            </div>
                            <div>{props.informacion.email}</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}