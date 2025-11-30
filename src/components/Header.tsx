import React from 'react';
import styled from 'styled-components';

const HeaderNav = styled.header`
    background-color: ${props => props.theme.backgroundColor.contantsBg};
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
        font-weight: ${props => props.theme.fontWeight.bold};
    }
    .menu {
    ul {
      display: flex;
    }
    li {
        margin-right: 10px;
        font-weight: ${props => props.theme.fontWeight.bold};
        color: ${props => props.theme.color.menuText};
        padding: 0 30px;
        display: inline-block;
        font-size: ${props => props.theme.fontSize.default};
        text-decoration: none;
        position: relative;

        &::after  {
        content: "";
        display: block;
        height: 2px;
        left: 50%;
        position: absolute;
        transition: width 0.3s ease 0s, left 0.3s ease 0s;
        width: 0;
        background-color: ${props => props.theme.backgroundColor.second};
      }
 
    &:hover {
      color: ${props => props.theme.color.primary}; /* 텍스트 색상도 변경 */
      &::after {
        width: 100%;
        left: 0;
      }
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
