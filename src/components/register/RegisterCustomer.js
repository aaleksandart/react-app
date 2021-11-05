// REGISTERCUSTOMER COMPONENT SOM EFTER ATT USEFORM HAR GODKÄNT KÖR IGÅNG MED EN SUBMITFUNKTION FÖR ATT LÄGGA UPP NY KUND TILL API

import React, { useState } from 'react'
import './RegisterCustomer.css';
import useForm from './useForm'
import validate from './ValidateForm'

const RegisterCustomer = () => {

    const { handleChange, values, handleSubmit, errors } = useForm(submit, validate)

    function submit() {
        console.log("submitted without errors")
        let json = JSON.stringify({ firstName: values.firstname, lastName: values.lastname, email: values.email })
        console.log(json)

        async function postCustomer() {
            try {
                await fetch("https://ecexam-webapi.azurewebsites.net/api/customers", {
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    method: 'post',
                    body: json
                })
                window.location.replace('/customers')
            } catch (err_message) {
                alert(err_message)
            }
        }
        postCustomer()

    }

    return (
        <>
            <div className="container">
                <form id="form" className="form container my-5 shadow rounded bg-white" onSubmit={handleSubmit} noValidate>
                    <div id="header_create_account" className="shadow rounded my-5">
                        <h3>Create account</h3>
                    </div>
                    <div className="form_manager mb-2">
                        <label htmlFor="firstname" className="form-label">Firstname</label>
                        <input id="firstname" type="text" name="firstname" className="form-control" placeholder="Daniel" value={values.firstname} onChange={handleChange} />
                        {errors.firstname && <small className="text-danger ms-1">{errors.firstname}</small>}
                    </div>
                    <div className="form_manager mb-2">
                        <label htmlFor="lastname" className="form-label">Lastname</label>
                        <input id="lastname" type="text" name="lastname" className="form-control" placeholder="Andersson" value={values.lastname} onChange={handleChange} />
                        {errors.lastname && <small className="text-danger ms-1">{errors.lastname}</small>}
                    </div>
                    <div className="form_manager mb-4">
                        <label htmlFor="email" className="form-label">Email address</label>
                        <input id="email" type="email" name="email" className="form-control" placeholder="d.andersson@gmail.com" value={values.email} onChange={handleChange} />
                        {errors.email && <small className="text-danger ms-1">{errors.email}</small>}
                    </div>
                    <div className="d-grid gap-2">
                        <button id="registerButton" className="register-customer-button btn mb-5 fw-bolder shadow" type="submit">Submit</button>
                    </div>
                </form>
            </div>
        </>
    )
}

export default RegisterCustomer
