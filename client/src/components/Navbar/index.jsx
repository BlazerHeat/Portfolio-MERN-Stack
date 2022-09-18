import { useState } from 'react';
import {
    Header,
    Nav,
    NavLogo,
    NavList,
    NavItem,
    NavLink,
    NavButton,
    Burger,
    Cross,
} from './Navbar.modules';
import { AiFillGithub } from 'react-icons/ai';

const navbarSize = 80;

function Navbar() {
    const [click, setClick] = useState(false);

    const handleClick = () => {
        setClick(!click);
    };

    return (
        <Header>
            <Nav>
                <NavLogo to="home" smooth={true}>
                    <h1>VRG</h1>
                </NavLogo>
                <NavList
                    className={click ? 'show' : 'hide'}
                    onClick={handleClick}
                >
                    <NavItem>
                        <NavLink
                            to="home"
                            activeClass="active"
                            spy={true}
                            smooth={true}
                            offset={-navbarSize}
                            onClick={handleClick}
                        >
                            Home
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink
                            to="aboutme"
                            activeClass="active"
                            spy={true}
                            smooth={true}
                            offset={-navbarSize}
                            onClick={handleClick}
                        >
                            About
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink
                            to="services"
                            activeClass="active"
                            spy={true}
                            smooth={true}
                            offset={-navbarSize}
                            onClick={handleClick}
                        >
                            Services
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink
                            to="proposal"
                            activeClass="active"
                            spy={true}
                            smooth={true}
                            offset={-navbarSize}
                            onClick={handleClick}
                        >
                            Proposal
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink
                            to="contact"
                            activeClass="active"
                            spy={true}
                            smooth={true}
                            offset={-navbarSize}
                            onClick={handleClick}
                        >
                            Contact
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavButton
                            href="https://github.com/BlazerHeat"
                            target="_blank"
                        >
                            <AiFillGithub style={{ transform: 'scale(1.5)' }} />
                            <p>Github</p>
                        </NavButton>
                    </NavItem>
                </NavList>
                {click ? (
                    <Cross onClick={handleClick} />
                ) : (
                    <Burger onClick={handleClick} />
                )}
            </Nav>
        </Header>
    );
}

export default Navbar;
