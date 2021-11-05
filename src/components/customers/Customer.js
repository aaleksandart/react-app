// CUSTOMER COMPONENT SOM BESTÄMMER HUR VARJE KUND FRÅN API SKA VISAS/SE UT

import React from 'react'
import './Customer.css';

const Customer = ({member}) => {

    return (
        
        <table id="customer_table" className="customer_table table my-4 container table-hover shadow rounded">
            <tbody className="table-light col px-md-n5">
                <tr>
                <th className="col-1" scope="row">{member.id}</th>
                <td className="col-1 member_firstname">{member.firstName}</td>
                <td className="col-2 member_lastname">{member.lastName}</td>
                <td className="col-3 member_email">{member.email}</td>
                </tr>
            </tbody>
            </table>
    )
}


export default Customer