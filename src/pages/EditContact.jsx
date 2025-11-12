import React, { useEffect, useState } from 'react'
import useGlobalReducer from "../hooks/useGlobalReducer";
import { useNavigate, useParams } from 'react-router-dom';

export const EditContact = () => {
  const { store, dispatch } = useGlobalReducer()
  let [data, setData] = useState({
    name: "", email: "", phone: "", address: ""
  })
  const { contact_id } = useParams();
  const navigate = useNavigate()
  useEffect(() => {
    const contactToEdit = store.contacts.find(con => con.id === parseInt(contact_id));
    if (contactToEdit) {
      setData({
        name: contactToEdit.name,
        email: contactToEdit.email,
        phone: contactToEdit.phone,
        address: contactToEdit.address
      })
    } else {
      alert("usuario no encontrado")
    }
  }, [contact_id])



  const formChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value })
  }




  const handleToEdit = async (e) => {
    e.preventDefault()
    try {
      const response = await fetch("https://playground.4geeks.com/contact/agendas/david/contacts" + `/${contact_id}`, {
        method: "PUT",
        body: JSON.stringify({
          name: data.name, email: data.email, phone: data.phone, address: data.address
        }),

        headers: { "Content-type": "application/json" },
      });
      const data2 = await response.json();
      dispatch({
        type: "edit_contacts",
        payload: data2
        
      }) 
      navigate("/agenda-david")

    } catch (e) {
      console.log(e);
    }
  }


  return (
    <div className='container'>
      <h2>Edit Contact </h2>
      <form className="row g-3" onSubmit={handleToEdit}>
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
          <button type="submit" className="btn btn-primary">Save</button>
        </div>
      </form>



    </div>
  )
}
