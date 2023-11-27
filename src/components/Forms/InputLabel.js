import React from 'react';

const InputLabel = ({

    type,
    label,
    id,
    value,
    placeholder,
    inputClassName,
    labelClassName,
    onChange,
    onBlur,
    error,
    maxLength,
    onKeyDown,


}) => {
    return (
        <>
            <div>
                <label htmlFor={id} className={`${labelClassName}`}>{label}</label>
                <input type={type} id={id} placeholder={placeholder} value={value} className={inputClassName} onChange={onChange} onBlur={onBlur} maxLength={maxLength} onKeyDown={onKeyDown} />
            </div>
        </>

    )
}

export default InputLabel
