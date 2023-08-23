import { useState } from "react"

export const checkoutValidacion = (WrappedComponent) => {

    const CheckoutValidacion = (props) => {

        const [errors, setErrors] = useState({})
        const validateForm = () => {
            let newErrors = {}
            let isValid = true

            if(!props.dataForm.name){
                newErrors.name = 'Este campo no puede estar vacio, ingrese su nombre'
                isValid = false
            }
            if(!props.dataForm.phone){
                newErrors.phone = 'Este campo no puede estar vacio, porfavor ingrese su numero'
                isValid = false
            }
            if(!props.dataForm.email){
                newErrors.email = 'Este campo no puede estar vacio, ingrese su mail'
                isValid = false
            }
            if(!props.dataForm.emailConfirm){
                newErrors.emailConfirm = 'Este campo no puede estar vacio'
                isValid = false
            }
            if(props.dataForm.emailConfirm !== props.dataForm.email){
                newErrors.email = 'Para confirmar, debe ingresar el mismo email.'
                isValid = false
            }
            setErrors(newErrors)
            return isValid
        }
        return <WrappedComponent

                { ...props }
                errors = { errors }
                validateForm = { validateForm }
            />
    }
    return CheckoutValidacion
}