import styled from "styled-components";
import { motion } from "framer-motion";
import html from '../../asset/img/html.png';
import css from '../../asset/img/CSS3.png';
import js from '../../asset/img//js.png';
import react from '../../asset/img/react.png';
import typescript from '../../asset/img/typescript.png';
import express from '../../asset/img/express.png';
import GitHub from '../../asset/img/GitHub.png';
import AWS from '../../asset/img/AWS.png';
import Firebase from '../../asset/img/Firebase.png';
import Redux from '../../asset/img/Redux.png';
import recoil from '../../asset/img/recoil.png';
import StyledComponent from '../../asset/img/StyledComponent.png';
import TailwindCSS from '../../asset/img/TailwindCSS.png';
import zustand from '../../asset/img/zustand.jpg';
import MainSection from "../Layout";

const AboutMe = styled(motion.div)`
  color: ${(props) => props.theme.color.menuText};
  margin-bottom: 3.125rem;
  .text {
    line-height: 25px;
  }
  &:last-child {
    margin-bottom: 0;
  }
`;
const TechImage = styled.div`
  position: relative;
  width: 3.125rem;
  height: 3.125rem;
  margin-right: 15px;
  box-shadow: 0 0 3px rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  
  img {
    width: 100%;
    height: 100%;
  }

  /* 툴팁 텍스트 */
  .tooltip {
    position: absolute;
    bottom: 110%;           /* 아이콘 위로 */
    left: 50%;
    transform: translateX(-50%);
    padding: 4px 8px;
    border-radius: 4px;
    font-size: 12px;
    white-space: nowrap;
    background: ${({ theme }) => theme.backgroundColor.default};
    color: ${({ theme }) => theme.color.primary};
    opacity: 0;
    pointer-events: none;
    transition: opacity 0.2s ease;
  }

  &:hover .tooltip {
    opacity: 1;
  }
`;

const TechList = styled.div`
  display: grid;
  padding-top: 0.625rem;
  padding-bottom: 0.625rem;
  grid-template-columns: 100px 100px 100px;
  gap: 10px;
  padding-left: 1.375rem;
  
`;
const Subheading = styled.h3`
  text-transform: capitalize;
  letter-spacing: 3px;
  font-weight: 600;
  padding-left: 10px;
`;
export const showHide = {
    start: {
        opacity: 0,
        transition: {
            duration: 0,
            staggerChildren: 0.5,
        },
    },
    end: {
        opacity: 1,
        transition: {
            duration: 1,
            staggerChildren: 0.5,
        },
    },
};
export const showHideChild = {
    start: {
        y: -5,
        opacity: 0,
    },
    end: {
        y: 0,
        opacity: 1,
    },
};

function About() {
    return (
        <MainSection>
            <motion.div variants={showHide} initial='start' animate='end'>
                <AboutMe variants={showHideChild}>
                    <div className='text'>안녕하세요 하루처럼 매 순간 새롭게 도전하고 성장하는 프론트엔드 개발자가 되고 싶은 이효성입니다. 시간을 내어 포트폴리오를 방문해 주셔서 감사합니다.</div>
                </AboutMe>
                <AboutMe variants={showHideChild}>
                </AboutMe>
                <AboutMe variants={showHideChild}>
                    <div className='text'>
                        <ul style={{ listStyle: "circle", paddingLeft: "20px" }}>
                            <li>2016 ~ 2022 상지 대학교 · (사회복지학)</li>
                            <li>2025.01~2025.07 Programmers | [6기] 타입스크립트로 함께하는 웹 풀 사이클 개발 수료(React, Node.js)</li>
                        </ul>
                    </div>
                </AboutMe>
                <AboutMe variants={showHideChild}>
                    <div className='skills'>
                        <div>
                            <Subheading>- basic</Subheading>
                            <TechList>
                                <TechImage>
                                    <img src={html} alt="Html" />
                                    <span className="tooltip">Html</span>
                                </TechImage>
                                <TechImage>
                                    <img src={css} alt="Css" />
                                    <span className="tooltip">Css</span>

                                </TechImage>
                                <TechImage>
                                    <img src={js} alt="JavaScript" />
                                    <span className="tooltip">JavaScript</span>
                                </TechImage>
                            </TechList>
                        </div>
                        <div>
                            <Subheading>- library</Subheading>
                            <TechList>
                                <TechImage>
                                    <img src={react} alt="React" />
                                    <span className="tooltip">React</span>

                                </TechImage>
                                <TechImage>
                                    <img src={typescript} alt="TypeScript" />
                                    <span className="tooltip">TypeScript</span>
                                </TechImage>
                                <TechImage>
                                    <img src={express} alt="Express" />
                                    <span className="tooltip">Express</span>
                                </TechImage>
                                <TechImage>
                                    <img src={recoil} alt="recoil" />
                                    <span className="tooltip">Recoil</span>
                                </TechImage>
                                <TechImage>
                                    <img src={Redux} alt="Redux" />
                                    <span className="tooltip">Redux</span>
                                </TechImage>
                                <TechImage>
                                    <img src={StyledComponent} alt="Styled-Component" />
                                    <span className="tooltip">Styled-Component</span>
                                </TechImage>
                                <TechImage>
                                    <img src={zustand} alt="Zustand" />
                                    <span className="tooltip">Zustand</span>
                                </TechImage>
                                <TechImage>
                                    <img src={TailwindCSS} alt="TailwindCSS" />
                                    <span className="tooltip">TailwindCSS</span>
                                </TechImage>
                            </TechList>
                        </div>
                        <div>
                            <Subheading>- Others</Subheading>
                            <TechList>
                                <TechImage>
                                    <img src={GitHub} alt="Github" />
                                    <span className="tooltip">Github</span>
                                </TechImage>
                            </TechList>
                        </div>
                        <div>
                            <Subheading>- DataBase</Subheading>
                            <TechList>
                                <TechImage>
                                    <img src={AWS} alt="Aws" />
                                    <span className="tooltip">AWS</span>
                                </TechImage>
                                <TechImage>
                                    <img src={Firebase} alt="FireBase" />
                                    <span className="tooltip">FireBase</span>
                                </TechImage>
                            </TechList>
                        </div>
                    </div>
                </AboutMe>
            </motion.div>
            </MainSection>
    );
}

export default About;