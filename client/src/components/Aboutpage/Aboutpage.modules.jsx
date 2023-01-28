import styled from 'styled-components';

const Background = styled.section`
    width: 100%;

    background: #f5f5f5;

    display: flex;
    justify-content: center;
    align-items: center;
`;

const AboutMePage = styled.section`
    width: 90%;
    max-width: 1200px;
    margin: 2em 0;
    padding: 2em 1em;

    background: white;
    box-shadow: 0 1px 1px 0 rgb(0 0 0 / 6%), 0 2px 5px 0 rgb(0 0 0 / 20%);

    display: grid;
    grid-template-columns: 1fr 1fr;
    column-gap: 1.5em;

    @media (max-width: 900px) {
        grid-template-rows: 1fr;
        grid-template-columns: none;

        row-gap: 1.5em;
    }
`;

const Skills = styled.div`
    display: grid;
    grid-template-rows: auto;

    justify-content: center;
    align-items: center;

    row-gap: 1em;
`;

const MainInfo = styled.div`
    display: grid;
    grid-template-columns: auto auto;

    justify-content: center;
    align-items: center;

    column-gap: 1em;

    img {
        width: 50%;
        min-width: 200px;
        border-radius: 50%;
        justify-self: center;

        padding: 0.5em;

        border: 5px solid #0078ff;
        transform: rotate(15deg);
    }

    @media (max-width: 900px) {
        grid-template-rows: 1fr;
        grid-template-columns: none;

        div {
            justify-self: center;
        }
    }
`;

const SkillGraphs = styled.div`
    align-self: flex-start;

    h2 {
        margin-bottom: 0.5em;
    }
`;

const ProgressBar = styled.div`
    width: 100%;
    height: 0.7rem;
    margin: 0.5rem 0 1.2rem 0;

    background-color: #cde1f8;
`;

const Progress = styled.div`
    width: ${(props) => props.progress + '%'};
    height: 100%;

    background-color: #0078ff;
`;

const AboutMe = styled.div`
    span {
        border-bottom: #0078ff 5px solid;
        font-size: 2em;
        font-weight: bold;
    }

    p {
        margin-top: 2em;
        line-height: 2em;
        word-spacing: 0.3em;
    }
`;

const AboutInfo = styled.div`
    p {
        margin-top: 1em;
        margin-right: 1em;
    }
`;

export { Background, AboutMePage, Skills, AboutMe, AboutInfo, MainInfo, SkillGraphs, ProgressBar, Progress };
