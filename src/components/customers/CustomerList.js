// CUSTOMERLIST COMPONENT SOM TAR ALLA KUNDER FRÅN API OCH LISTAR DEM MED STRUKTUR 
// FRÅN CUSTOMER COMPONENT OCH LÄGGER ÄVEN TILL ETT FÄLT MED RUBRIKER OVANFÖR KUNDERNA

import React, { useState, useEffect } from 'react'
import Customer from './Customer'
import './Customer.css';

const CustomerList = () => {

    const [customers, setCustomers] = useState([])

    useEffect(() => {
        async function fetchCustomerData() {
            const customerResults = await fetch("https://ecexam-webapi.azurewebsites.net/api/customers")
            setCustomers(await customerResults.json())
        }
        fetchCustomerData()
    }, [])

    return (
        <div>
            <div id="customerListHeader" className="d-flex align-items-center justify-content-center">
                <h2>Customers</h2>
            </div>
            <table id="customer_table" className="customer_table table my-5 container table-hover shadow rounded">
            <thead id="customerTableHeader">
                <tr>
                <th className="col-1" scope="col">ID</th>
                <th className="col-1" scope="col">Firstname</th>
                <th className="col-2" scope="col">Lastname</th>
                <th className="col-3 email_customer" scope="col">Email</th>
                </tr>
            </thead>
            </table>
            {
                customers.map(customer => (
                    <div key={customer.id}>
                        <Customer member={customer}/>
                    </div>
                ))
            }
        </div>
    )
}

export default CustomerList
