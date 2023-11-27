import React from 'react';


const types = {
    email: {
        regex: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
        message: 'Preencha um email válido',
    },

    password: {
        regex: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/,
        message: 'Preencha uma senha válida'
    },
}

const useForm = (type) => {

    const [value, setValue] = React.useState('');
    const [error, setError] = React.useState(null);


    function validate (value) {
        if (type === false) return true;
        if (value.length === 0) {
            setError('Preencha um valor')
            return false;
        } else if (types[type] && !types[type].regex.test(value)) {
            setError(types[type].message);
            return false;
        } else {
            setError(null);
            return true;
        }
    }


    function handleChange(e) {
        setValue(e.target.value);
    
        // Validate the input value
        if (error) validate(e.target.value);

        const icon = e.target.parentElement.parentElement.querySelector('.icon');
        icon.style.transition = 'opacity 0.5s ease-in-out';
    
        if (validate(e.target.value)) {
          icon.style.opacity = 0;
        } else {
          icon.style.opacity = 1;
        }
    }


  return {
    value,
    setValue,
    onChange: handleChange,
    validate: () => validate(value),
    onBlur: () => validate(value),
    error,
  };
};

export default useForm