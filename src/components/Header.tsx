import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const HeaderNav = styled.header`
    position: fixed;
    width: 100%;
    top: 0;
    background-color: ${props => props.theme.backgroundColor.second};
    left:0;
    right: 0;
    z-index: 999;
`;

const Wrapper = styled.nav`
    display: flex;
    margin:0 auto;
    height: 70px;
    align-items: center;
    justify-content: space-between;
    width: 93%;
    .logo {
        color: ${props => props.theme.color.menuText};
        font-size: ${props => props.theme.fontSize.large};
        font-weight: ${props => props.theme.fontWeight.default};
    }
    .menu {
    ul {
      display: flex;
    }
    li {
      margin-right: 5px;
      & > a {
        padding: 0 30px;
        display: inline-block;
        color: ${props => props.theme.color.menuText};
        font-weight: 500;
        transition: all 0.3s ease;
        position: relative;
        }
      }
    }
`



const Header: React.FC = () => {
    return (
        <HeaderNav>
            <Wrapper>
                <div className='logo'>
                    <Link to='/'>Hs`s</Link>
                </div>
                <div className='menu'>
                    <ul>
                        <li>
                            <Link to='/'>Home</Link>
                        </li>
                        <li>
                            <Link to='/About'>About Me</Link>
                        </li>
                        <li>
                            <Link to='/Project'>Project</Link>
                        </li>
                        <li>
                            <Link to='/Board'>Board</Link>
                        </li>
                    </ul>
                </div>

            </Wrapper>
        </HeaderNav>
    )
}

export default Header;
