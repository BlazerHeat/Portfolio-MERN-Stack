import styled from 'styled-components';
import BackgroundImage from '../../images/project.jpeg';

export const Background = styled.div`
    width: 100%;
    min-height: 90vh;

    background: linear-gradient(rgba(7, 7, 7, 0.7), rgba(7, 7, 7, 0.7)),
        url(${BackgroundImage});
    background-repeat: no-repeat;
    background-position: center center;
    background-size: cover;
    /* background-attachment: fixed; */

    display: flex;
    justify-content: center;
    align-items: center;

    color: white;

    .title {
        border-bottom: #0078ff 5px solid;
        font-size: 2em;
        font-weight: bold;
    }
`;

export const ProposalFromWrapper = styled.div`
    width: 80%;
    margin: auto;

    background-color: white;
    color: black;

    padding: 1em;
`;

export const ProposalForm = styled.form`
    display: flex;
    flex-direction: column;

    margin-top: 20px;

    label {
        margin: 5px 0;

        input {
            margin-left: 5px;
            font-size: 15px;
        }

        textarea {
            font-size: 14px;
        }
    }
`;
