import React from 'react';
import '../css/NewProject.css';

const NewProject = () => {
    return (
        <>
            <form>
                <label htmlFor='nameInput'>Project Name</label>
                <input type="text" id="nameInput" />
                <br />

                <label htmlFor='statusInput'>Status</label>
                <select id="statusInput" defaultValue="">
                    <option value="" disabled>Select Status</option>
                    <option value="complete">Complete</option>
                    <option value="developing">Developing</option>
                    <option value="incomplete">Incomplete</option>
                </select>
                <br />

                <label htmlFor='primaryLanguageInput'>Primary Language</label>
                <select id="primaryLanguageInput" defaultValue="">
                    <option value="" disabled>Select Language</option>
                    <option value="js">Javascript</option>
                    <option value="py">Python</option>
                    <option value="jar">Java</option>
                    <option value="sh">Bash</option>
                    <option value="ps1">Powershell</option>
                </select>
                <br />

                <label htmlFor='dateInput'>Start Date</label>
                <input type="date" id="dateInput" />
                <br />

                <label htmlFor='descriptionInput'>Description</label>
                <textarea id="descriptionInput" rows="4" style={{ width: '100%', border: '1px solid #ccc', borderRadius: '5px', padding: '10px' }}></textarea>
            </form>
        </>
    );
}

export default NewProject;