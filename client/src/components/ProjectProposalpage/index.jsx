import React, { useState } from 'react';
import { SubmitButton } from '../Contactpage/Contactpage.modules';
import {
    Background,
    ProposalForm,
    ProposalFromWrapper,
} from './ProjectProposalpage.modules';
import { FaRegHandshake } from 'react-icons/fa';
import { FiThumbsUp } from 'react-icons/fi';
import API from '../../api';

function ProjectProposalpage() {
    const [formData, setFormData] = useState({
        companyName: '',
        budget: 1,
        projectName: '',
        projectDesc: '',
        companyEmail: '',
        contactNo: '',
    });
    const [clicked, setClicked] = useState(false);

    const handleCompanyNameChange = (e) => {
        const value = e.target.value;
        setFormData({ ...formData, companyName: value });
    };
    const handleBudgetChange = (e) => {
        let value = e.target.value;

        if (value === '' || value === null) {
            value = '';
        } else if (value <= 0) {
            value = Math.abs(value);
        }
        value = parseInt(value);
        setFormData({ ...formData, budget: value });
    };
    const handleProjectNameChange = (e) => {
        const value = e.target.value;
        setFormData({ ...formData, projectName: value });
    };
    const handleProjectDescChange = (e) => {
        const value = e.target.value;
        setFormData({ ...formData, projectDesc: value });
    };
    const handleCompanyEmailChange = (e) => {
        const value = e.target.value;
        setFormData({ ...formData, companyEmail: value });
    };
    const handleContactNumberChange = (e) => {
        const value = e.target.value;
        setFormData({ ...formData, contactNo: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setClicked(true);

        API.post('/propose', formData);
    };

    return (
        <Background name="proposal">
            <ProposalFromWrapper>
                <span className="title">Project Proposal Form</span>
                <ProposalForm onSubmit={handleSubmit}>
                    <label>
                        Company Name:
                        <input
                            type={'text'}
                            name="company"
                            required
                            onChange={handleCompanyNameChange}
                            value={formData.companyName}
                        />
                    </label>
                    <label>
                        Budget: ₹
                        <input
                            type={'number'}
                            name="budget"
                            required
                            onChange={handleBudgetChange}
                            value={formData.budget}
                        />
                    </label>
                    <label>
                        Project Name:
                        <input
                            type={'text'}
                            name="project_name"
                            required
                            onChange={handleProjectNameChange}
                            value={formData.projectName}
                        />
                    </label>
                    <label htmlFor="project_description">
                        Project Description:
                    </label>
                    <textarea
                        rows={10}
                        cols={50}
                        id="project_description"
                        name="project_description"
                        onChange={handleProjectDescChange}
                        value={formData.projectDesc}
                    />
                    <label>
                        Email:
                        <input
                            type={'email'}
                            name="company_mail"
                            required
                            onChange={handleCompanyEmailChange}
                            value={formData.companyEmail}
                        />
                    </label>
                    <label>
                        Contact Number:
                        <input
                            type={'tel'}
                            name="contact_number"
                            required
                            onChange={handleContactNumberChange}
                            value={formData.contactNo}
                        />
                    </label>
                    <SubmitButton
                        type="submit"
                        disabled={clicked ? true : false}
                        sent={clicked}
                        style={{ width: 'fit-content', alignSelf: 'center' }}
                    >
                        <p> {clicked ? 'Thank you' : 'Propose'}</p>
                        {clicked ? <FiThumbsUp /> : <FaRegHandshake />}
                    </SubmitButton>
                </ProposalForm>
            </ProposalFromWrapper>
        </Background>
    );
}

export default ProjectProposalpage;
