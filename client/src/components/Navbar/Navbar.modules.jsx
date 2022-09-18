import styled from 'styled-components';
import { Link } from 'react-scroll';
import { FaBars, FaTimes } from 'react-icons/fa';

const Header = styled.header`
    width: 100vw;
    height: 80px;

    background: rgba(0, 0, 0, 0.9);
    color: white;

    position: fixed;
    top: 0;
    left: 0;
    z-index: 10;

    text-align: center;

    font-family: 'Roboto', sans-serif;
`;

const Nav = styled.nav`
    display: flex;
    justify-content: space-between;
    align-items: center;

    height: inherit;
    background: transparent;

    width: 80%;
    max-width: 1200px;
    margin: auto;

    @media (max-width: 1000px) {
        width: 95%;
    }

    @media (max-width: 800px) {
        width: 80%;
    }
`;

const NavLogo = styled(Link)`
    cursor: pointer;

    display: flex;
    justify-content: center;
    align-items: center;

    h1 {
        font-weight: bold;
    }
    img {
        margin-right: 0.2em;
    }
`;

const NavList = styled.ul`
    list-style: none;

    display: flex;
    justify-content: center;
    align-items: center;

    @media (max-width: 800px) {
        flex-direction: column;
        position: absolute;
        justify-content: flex-start;
        padding-top: 150px;
        top: -200vh;
        left: 0;
        right: 0;

        background: rgba(0, 0, 0, 0.9);
        height: 100vh;
        z-index: -1;

        transition: top 1s ease;
        &.show {
            top: 0px;
        }
        &.hide {
            top: -200vh;
        }
    }
`;

const NavItem = styled.li`
    margin: 0 0.4em;

    @media (max-width: 800px) {
        margin: 1.2em 0;
    }
`;

const NavLink = styled(Link)`
    text-decoration: none;
    cursor: pointer;
    text-transform: uppercase;
    padding: 0.5em 1em;
    border: 2px solid transparent;
    border-radius: 3px;

    transition: border 0.25s ease;

    :hover,
    &.active {
        border-bottom: 2px solid white;
    }
`;

const NavButton = styled.a`
    text-decoration: none;
    color: white;
    cursor: pointer;
    text-transform: uppercase;
    padding: 0.5em 1em;

    display: flex;
    justify-content: center;
    align-items: center;
    border: 2px solid white;
    border-radius: 5em;

    p {
        margin-left: 10px;
    }

    transition: background 0.25s ease, color 0.25s ease, font-weight 0.25s ease;

    :hover {
        background: white;
        color: black;
        font-weight: bold;
    }
`;

const Burger = styled(FaBars)`
    color: white;
    transform: scale(1.5);
    cursor: pointer;
    @media (min-width: 800px) {
        display: none;
    }
`;

const Cross = styled(FaTimes)`
    color: white;
    transform: scale(1.5);
    cursor: pointer;
    @media (min-width: 800px) {
        display: none;
    }
`;

export {
    Header,
    Nav,
    NavLogo,
    NavList,
    NavItem,
    NavLink,
    NavButton,
    Burger,
    Cross,
};
