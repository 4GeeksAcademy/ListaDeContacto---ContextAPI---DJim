import React, { useState } from 'react'
import useGlobalReducer from "../hooks/useGlobalReducer";
import { useNavigate, useParams } from "react-router-dom"


export const EditContact = () => {
    const { store, dispatch } = useGlobalReducer()


    let [data, setData] = useState({
        name: "", email: "", phone: "", address: ""
    })

    const navigate = useNavigate()
    const { contact_id } = useParams()

    //buscar el contacto directamente en el store 
    // const contactToEdit = store.contacts.find(con => con.id === parseInt(contact_id))
    // if (contactToEdit) {
    //     setData({
    //         name: contactToEdit.name,
    //         email: contactToEdit.email,
    //         phone: contactToEdit.phone,
    //         address: contactToEdit.address
    //     })
    // } else {
    //     alert("usuario no encontrado")
    // }


    return (
        <div className='container'>
            <h2>Edit  Contact</h2>

            <h2>Edit Contact ID: {contact_id} </h2>
            {/* <p>{data.name}</p> */}

        </div>
            )
}
