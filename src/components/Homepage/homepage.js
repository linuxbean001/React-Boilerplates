import React, { Component } from 'react';
import styled from 'styled-components';

const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100vh;
    font-family: 'Open Sans', sans-serif;
`;

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    width: 100%;
    height: 40%;
`;

const Title = styled.h1`
    color: black;
    font-size: 2.5rem;
    font-weight: 700;
    text-align:center;
`;



class HomePage extends Component{
    render(){
        return(
            <Container>
                <Wrapper>
                    <Title>
                        Homepage React Component <br/>
                        This is a basic structure of React-Boilerplate
                    </Title>
                   
                </Wrapper>
            </Container>
        );
    }
}  

export default HomePage;