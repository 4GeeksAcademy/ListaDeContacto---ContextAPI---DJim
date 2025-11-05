import React, { useState } from 'react'
import useGlobalReducer from "../hooks/useGlobalReducer";
import {useNavigate} from "react-router-dom"



export const AddContact = () => {
    const { store, dispatch } = useGlobalReducer()
     const navigate = useNavigate()





    let [data, setData] = useState({
        name: "", email: "", phone: "", address: ""
    })



    const formChange = (e) => {
        setData({ ...data, [e.target.name]: e.target.value})
    }


    const forSubmit = (e) => {
        e.preventDefault()
        ///validaciopn pero deben ser todos los campos dentro del if 
        if (!data.email || !data.name || !data.phone || !data.address) {
            alert("todos los campos son obligatorios")
            return;
        }


        fetch("https://playground.4geeks.com/contact/agendas/david/contacts", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                ...data, agenda_slug: "david"
            })
            })
                .then((response) => {
                    if (!response.ok) {
                        throw new Error("Error al crear el contacto")
                    }
                    return response.json()
                })
                .then((newContact) => {
                    dispatch({
                        type: "add_contact",
                        payload: newContact
                    })
                    navigate("/")
                })
                .catch((error) => console.error("Error creando al contacto", error)) 
        


    }

    return (
        <div className='container'>
            <h2>Add Contact</h2>
            <form className="row g-3" onSubmit={forSubmit}>
                <div className="col-md-6">
                    <label htmlFor="inputEmail4" className="form-label">Email</label>
                    <input type="email" className="form-control" id="inputEmail4" placeholder='@email' value={data.email} onChange={formChange} name="email" />
                </div>
                <div className="col-md-6">
                    <label htmlFor="inputname" className="form-label">Full Name</label>
                    <input type="text" className="form-control" id="inputname" value={data.name} onChange={formChange} name="name" />
                </div>
                <div className="col-12">
                    <label htmlFor="inputAddress" className="form-label">Address</label>
                    <input type="text" className="form-control" id="inputAddress" placeholder="1234 Main St" value={data.address} onChange={formChange} name="address" />
                </div>
                <div className="col-12">
                    <label htmlFor="inputAddress2" className="form-label">phone</label>
                    <input type="text" className="form-control" id="inputAddress2" value={data.phone} onChange={formChange} name="phone" />
                </div>

                <div className="col-12">
                    <button type="submit" className="btn btn-primary">Sign in</button>
                </div>
            </form>



        </div>
    )
}

