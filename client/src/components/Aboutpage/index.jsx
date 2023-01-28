import {
    Background,
    AboutMePage,
    Skills,
    AboutMe,
    AboutInfo,
    MainInfo,
    SkillGraphs,
    ProgressBar,
    Progress,
} from './Aboutpage.modules';
import DP from '../../images/profile-pic.jpg';

function Skill({ skillName, skillPercent }) {
    return (
        <>
            <span>{skillName} </span>
            <span>{skillPercent}%</span>
            <ProgressBar>
                <Progress progress={skillPercent} />
            </ProgressBar>
        </>
    );
}

function Aboutpage() {
    return (
        <Background name="aboutme">
            <AboutMePage>
                <Skills>
                    <MainInfo>
                        <img src={DP} alt="" />
                        <AboutInfo>
                            <p>
                                <strong>Name:</strong> Vatsal Ghoghari
                            </p>
                            <p>
                                <strong>DOB:</strong> 29/12/2001
                            </p>
                            <p>
                                <strong>Profile:</strong> Full Stack Developer
                            </p>
                            <p>
                                <strong>Email:</strong> vghoghari82@gmail.com
                            </p>
                            <p>
                                <strong>Phone:</strong> (+91) 7203088769
                            </p>
                        </AboutInfo>
                    </MainInfo>
                    <SkillGraphs>
                        <h2>Skills</h2>
                        <Skill skillName="JavaScript (Node.js)" skillPercent={95} />
                        <Skill skillName="Python" skillPercent={90} />
                        <Skill skillName="HTML/CSS" skillPercent={85} />
                        <Skill skillName="C/C++" skillPercent={70} />
                        <Skill skillName="Java" skillPercent={65} />
                    </SkillGraphs>
                </Skills>
                <AboutMe>
                    <span>About Me</span>
                    <p>
                        Hi, I am Vatsal Ghoghari currently pursuing for B.Tech in CSE (Computer Science & Engg.) at{' '}
                        <a
                            href="https://www.charusat.ac.in/"
                            target="_blank"
                            rel="noreferrer"
                            style={{ color: 'black', wordSpacing: '0em' }}
                        >
                            Charusat University.
                        </a>
                        <br />I also like to participate in competitive coding wars with the help of some public hubs
                        like{' '}
                        <a
                            href="https://www.codechef.com/"
                            target="_blank"
                            rel="noreferrer"
                            style={{ color: 'black', wordSpacing: '0em' }}
                        >
                            CodeChef
                        </a>{' '}
                        And{' '}
                        <a
                            href="https://cssbattle.dev/"
                            target="_blank"
                            rel="noreferrer"
                            style={{ color: 'black', wordSpacing: '0em' }}
                        >
                            CSS-Battle
                        </a>{' '}
                        to improve my coding skills for frontend as-well backend side.
                        <br />
                        <br />
                        Always passionate about Technology and programing.
                        <br />
                        Projects i have worked on in free time:{' '}
                        <a
                            href="https://github.com/BlazerHeat?tab=repositories"
                            target="_blank"
                            rel="noreferrer"
                            style={{ color: 'black', wordSpacing: '0em' }}
                        >
                            Github Repo
                        </a>
                    </p>
                </AboutMe>
            </AboutMePage>
        </Background>
    );
}

export default Aboutpage;
