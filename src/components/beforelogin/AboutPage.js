
import { Link } from "react-router-dom"
import React from 'react'
import styled from 'styled-components'
import Header from './Header'
import Image1 from '../../pics/hiramcover.jpg'

const AboutPage = () => {
  return (
    <>
    <Header />
    <Wrapper>
      <LandingContainer>
          <TitledContainer >
        <Title>
        <h1>The Developer behind the app 🚀</h1>
        <span>
            Hi!  My name is Hiram Moises Lugo Rodriguez and I am a Full Stack Developer student and this is my 
            capstone project for The Full Stack Mastery Bootcamp at CleverProgrammer.com.
            I am a student just like you that had alot of problems organizing my work thats why I
            created my working space to help me change that. 
            Stop being so unorganized and create your work space now! 
        </span>
        </Title>
        <GetstartedContainer>
        <Link className="thelink" to='/api/register'> <GetstartedBtn>Lets get Started!</GetstartedBtn></Link>
        </GetstartedContainer>
        
        </TitledContainer>
        <LandingImgContainer >
        <LandingImg src={Image1} alt="imag" />
            </LandingImgContainer>
      </LandingContainer>
   </Wrapper>
   </>
  )
}

export default AboutPage

const Wrapper = styled.div`
 
  background: #4b6cb7; /* fallback for old browsers */
  background: -webkit-linear-gradient(
    to right,
    #182848,
    #4b6cb7
  ); /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(
    to right,
    #182848,
    #4b6cb7
  ); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */

  color: #fff;
`
const LandingContainer = styled.div`
 min-height: 100vh;
  display: flex;
  margin-left: 30px;
  justify-content: center;
  align-items: center;`

const TitledContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;`
const Title = styled.div` 
    margin-right: 20px;

    h1{ 
        font-size: 50px;
        line-height: 1;
        letter-spacing: 1px;
        color: #21f1f5;
    }

    span{ 
        font-size: 18px;
        line-height: 2;
        letter-spacing: 1px;
    }
`
const GetstartedContainer = styled.div`
  display: flex;
  margin-top: 30px;
  justify-content: center;`
const GetstartedBtn = styled.div`
  background-image: linear-gradient(
    to right,
    #7474bf 0%,
    #348ac7 51%,
    #6e6ee4 100%
  );
  margin: 10px;
  padding: 15px 45px;
  font-size: 14px;
  text-align: center;
  transition: 0.5s;
  background-size: 200% auto;
  color: white;
  font-weight: 600;
  box-shadow: 0 0 10px #eee;
  border-radius: 20px;
  display: block;

  &:hover{
    background-position: right center; /* change the direction of the change here */
  color: #fff;
  text-decoration: none;
  cursor: pointer;
  }
`
const LandingImgContainer = styled.div`
  margin-left: 40px;
    flex: 0.6;
    `
const LandingImg = styled.img`
    height: 450px;
  border-radius: 8%;
  width: 400px;
  border: 1px solid grey;
  box-shadow: 0 0 4px #eee;`