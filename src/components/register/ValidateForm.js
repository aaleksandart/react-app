// FUNCTION SOM VALIDERAR FORMULÄRET

export default function validateForm(values) {
    let errors = {};

    if(!values.firstname) {
        errors.firstname = "You need to fill in your firstname."
    } else if(!/^([A-Za-z]).{1,}$/.test(values.firstname)) {
        errors.firstname = "You need at least 2 letters in your firstname."
    }

    if(!values.lastname) {
        errors.lastname = "You need to fill in your lastname."
    } else if(!/^([A-Za-z]).{1,}$/.test(values.lastname)) {
        errors.lastname = "You need at least 2 letters in your lastname."
    }

    if(!values.email) {
        errors.email = "You need to fill in your email address."
    } else if(!/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(values.email)) {
        errors.email = "You need a valid email address.   Ex: d.andersson@gmail.com"
    }

    return errors;
}