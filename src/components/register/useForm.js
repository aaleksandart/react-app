// USEFORM COMPONENT HOOK SOM HANTERAR FORMULÄRET
// USEFORM HANTERAR VÄRDEN, FELAKTIGHETER OCH SUBMIT FUNCTIONEN

import { useState, useEffect } from "react";

const useForm = (callback, validate) => {
    const [values, setValues] = useState({
        firstname: '',
        lastname: '',
        email: ''
    });
    const[errors, setErrors] = useState({
        firstname: '',
        lastname: '',
        email: ''
    });
    
    const[isSubmitting, setIsSubmitting] = useState(false);

    const handleChange = event => {
        const {name, value} = event.target
        setValues({
            ...values,
            [name]: value
        });
    };
    
    const handleSubmit = event=> {
        event.preventDefault();
        setErrors(validate(values));
        setIsSubmitting(true);        
    };

    useEffect(() => {
        if(Object.keys(errors).length === 0 && isSubmitting) {
            callback();
        }
    }, [errors, callback, isSubmitting]);
    
    return{ handleChange, handleSubmit, values, errors}
}

export default useForm;