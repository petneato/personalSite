import React  from 'react';


export const InputField = ({ label, id, type = "text" }) => (
    <>
        <label htmlFor={id}>{label}</label>
        <input type={type} id={id} />
        <br />
    </>
);

export const SelectField = ({ label, id, options }) => (
    <>
        <label htmlFor={id}>{label}</label>
        <select id={id} defaultValue="">
            <option value="" disabled>Select {label}</option>
            {options.map(option => <option key={option.value} value={option.value}>{option.label}</option>)}
        </select>
        <br />
    </>
);

export const TextAreaField = ({ label, id }) => (
    <>
        <label htmlFor={id}>{label}</label>
        <textarea id={id} rows="4" style={{ width: '100%', border: '1px solid #ccc', borderRadius: '5px', padding: '10px' }}></textarea>
    </>
);