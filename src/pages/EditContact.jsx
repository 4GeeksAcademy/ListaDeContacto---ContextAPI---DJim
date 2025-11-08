import React, { useState } from 'react'
import useGlobalReducer from "../hooks/useGlobalReducer";



export const editContact = async (id, contact) => {
    const { store, dispatch } = useGlobalReducer()
try {
          const response = await fetch("https://playground.4geeks.com/contact/agendas/david/contacts" + "/contacts" + `/${id}`, {
            method: "PUT",
            body: JSON.stringify(contact),
            headers: { "Content-type": "application/json" },
          });
          const data = await response.json();
           dispatch({
                type: "edit_contacts", 
                payload: data 
              })
          } catch (e) {
          console.log(e);
        }
      

    return (
        <div className='container'>
            <h2>Edit  Contact</h2>

            <h2>Edit Contact ID: {contact_id} </h2>
            {/* <p>{data.name}</p> */}

        </div>
            )
}
