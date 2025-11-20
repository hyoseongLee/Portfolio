import React from 'react';
import styled from 'styled-components';

const HeaderNav = styled.header`
    position: fixed;
    width: 100%;
    top: 0;
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
        font-weight: ${props => props.theme.fontWeight.bold};
        font-size: ${props => props.theme.fontSize.default};
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
                    <>Hs`s</>
                </div>
                <div className='menu'>
                    <ul>
                        <li>
                            <>Home</>
                        </li>
                        <li>
                            <>About Me</>
                        </li>
                        <li>
                            <>Project</>
                        </li>
                        <li>
                            <>Board</>
                        </li>
                    </ul>
                </div>
            </Wrapper>
        </HeaderNav>
    )
}

export default Header;
