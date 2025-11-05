import React, { useState, useEffect } from 'react'
import useGlobalReducer from "../hooks/useGlobalReducer";
import { Link } from "react-router-dom"
import { ContactCard } from "../components/ContactCard.jsx"

export const Agenda = () => {
    const { store, dispatch } = useGlobalReducer()
    const contactos = store.contacts || []

    const obtenerContactos = async () => {
        try {
              const resp = await fetch ("https://playground.4geeks.com/contact/agendas/david/contacts")
              const data = await resp.json ();

              dispatch({
                type: "get_contacts", 
                payload: data.contacts 
              })
        }  catch(error) {
            console.error ('Error general al obtener contactos de la agenda', error);
        }
    }

     useEffect(() => {
        obtenerContactos()
    }, [])

    return (
        <div className="text-center mt-5">
            <h1>Agenda de David </h1>

            {contactos.length === 0 ? (
                <p>Cargando contactos o no hay contactos</p>
            ) : (
                contactos.map((item) => (
                    <ContactCard 
                    key={item.id}
                    informacion= {item}
                    />
                ))
            )
            }



        </div>
    );
}; 