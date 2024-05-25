import React from 'react';
import '../css/NewProject.css';
import { InputField, SelectField, TextAreaField } from '../components/formComp.js';



const NewProject = () => {
    const statusOptions = [
        { label: 'Complete', value: 'complete' },
        { label: 'Developing', value: 'developing' },
        { label: 'Incomplete', value: 'incomplete' }
    ];

    const languageOptions = [
        { label: 'Javascript', value: 'js' },
        { label: 'Python', value: 'py' },
        { label: 'Java', value: 'jar' },
        { label: 'Bash', value: 'sh' },
        { label: 'Powershell', value: 'ps1' }
    ];

    return (
        <>
            <form>
                <InputField label="Project Name" id="nameInput" />
                <SelectField label="Status" id="statusInput" options={statusOptions} />
                <SelectField label="Primary Language" id="primaryLanguageInput" options={languageOptions} />
                <InputField label="Start Date" id="dateInput" type="date" />
                <TextAreaField label="Description" id="descriptionInput" />
            </form>
        </>
    );
}

export default NewProject;