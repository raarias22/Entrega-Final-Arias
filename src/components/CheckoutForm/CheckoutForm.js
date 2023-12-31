import React from "react"
import '../CheckoutForm/CheckoutForm.css'


function CheckoutForm({handleForm, generateOrder, dataForm, errors, validateForm}) {
    const handleOnSubmit = (e) => {
      e.preventDefault()
      if (validateForm()) {
        generateOrder()
      }
      
    }

return (
  <div className="mx-5 px-5">
    <form onSubmit={handleOnSubmit} className=' d-flex flex-column gap-2 mx-5 px-5'>

      {errors && errors.name && <span className="text-danger me-auto"> {errors.name}</span>}
      <input onChange={handleForm} type="text" name='name' value={dataForm.name} placeholder='Ingrese su Nombre'/>
      
      {errors && errors.email && <span className="text-danger me-auto"> {errors.phone}</span>}
      <input onChange={handleForm} type="text" name='phone' value={dataForm.phone} placeholder='Ingrese su Telefono'/>
      
      {errors && errors.email && <span className="text-danger me-auto"> {errors.email}</span>}
      <input onChange={handleForm} type="text" name='email' value={dataForm.email} placeholder='Ingrese su email'/>
      
      {errors && errors.email && <span className="text-danger me-auto">{errors.email}</span>}
      <input onChange={handleForm} type="text" name='emailConfirm' value={dataForm.emailConfirm} placeholder='Confirme el email'/>
      
      <button className="btn btn-outline-primary w-50 mt-2" type="submit">Finalizar Compra</button>

    </form>       
  </div>
)
}

export default CheckoutForm