import React from 'react';
import styled from 'styled-components';
import {About, Intro, Project } from '../components';


const HomeWrap = styled.div`
    width: 100%;
    position: relative;
`;

const ContentWrap = styled.div`
    width: 100%;
    height: auto;
    min-height: 100vh;
    padding-top: 4vw;
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
`;

const Home: React.FC = () => {
    return (
       <HomeWrap>
        <ContentWrap>
       <Intro />
       <About />
       <Project />
       </ContentWrap>
       </HomeWrap>
    );
};

export default Home;