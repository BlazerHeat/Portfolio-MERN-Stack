import React, { useState } from 'react';
import { SubmitButton } from '../Contactpage/Contactpage.modules';
import {
    Background,
    ProposalForm,
    ProposalFromWrapper,
} from './ProjectProposalpage.modules';
import { FaRegHandshake } from 'react-icons/fa';
import { BsCheck } from 'react-icons/bs';

function ProjectProposalpage() {
    const [clicked, setClicked] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        setClicked(true);
    };

    return (
        <Background name="proposal">
            <ProposalFromWrapper>
                <span className="title">Project Proposal Form</span>
                <ProposalForm onSubmit={handleSubmit}>
                    <label>
                        Company Name:
                        <input type={'text'} name="company" required />
                    </label>
                    <label>
                        Budget:
                        <input type={'number'} name="budget" required />
                    </label>
                    <label>
                        Project Name:
                        <input type={'text'} name="project_name" required />
                    </label>
                    <label htmlFor="project_description">
                        Project Description:
                    </label>
                    <textarea
                        rows={10}
                        cols={50}
                        id="project_description"
                        name="project_description"
                    />
                    <label>
                        Email:
                        <input type={'email'} name="company_mail" required />
                    </label>
                    <label>
                        Contact Number:
                        <input type={'tel'} name="contact_number" required />
                    </label>
                    <SubmitButton
                        type="submit"
                        disabled={clicked ? true : false}
                        sent={clicked}
                        style={{ width: 'fit-content', alignSelf: 'center' }}
                    >
                        <p> {clicked ? 'Thank you' : 'Propose'}</p>
                        {clicked ? <BsCheck /> : <FaRegHandshake />}
                    </SubmitButton>
                </ProposalForm>
            </ProposalFromWrapper>
        </Background>
    );
}

export default ProjectProposalpage;
