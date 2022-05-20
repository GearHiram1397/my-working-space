import { Link } from "react-router-dom"
import React from 'react'
import styled from 'styled-components'
import Header from './Header'
import Image2 from '../../pics/myworkingspace - Imgur.jpg'
const LandingPage = () => {
  return (
    <>
    <Header />
    <Wrapper>
      <LandingContainer>
          <TitledContainer >
        <Title>
        <h1>Everything You Need To Organize Your Work </h1>
        <span>
            My Working space is a easy to use app, made for students and day to day working people like you!. This app was made to help make your life easier when you
          are trying to organize your work space to help you be more productive while unlocking achivements by studying and completing your own work. Stop being so unorganized and create your work space now! 
        </span>
        </Title>
        <GetstartedContainer>
        <Link className="thelink" to='/api/register'> <GetstartedBtn>Lets get Started!</GetstartedBtn></Link>
        </GetstartedContainer>
        
        </TitledContainer>
        <LandingImgContainer >
          <LandingImg src='https://digitalagenda.app/assets/today-app.png ' alt="imag" />
            </LandingImgContainer>
      </LandingContainer>
   </Wrapper>
   </>
  )
}

export default LandingPage

const Wrapper = styled.div`
 height: 100vh;
  width: 100vw;
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
    align-items: center;
    

    @media (max-width: 768px) {
      flex-direction: column;

    }
    `

const TitledContainer = styled.div`
    display: flex;
    flex-direction: column;
    flex: 1;`
const Title = styled.div` 
    margin-right: 20px;
    letter-spacing: 1px;

    h1{ 
        font-size: 50px;
        line-height: 1.2;
        color: #21f1f5;

        @media (max-width: 768px) {
          font-size: 40px;
          text-align: center;
        }
    }

    span{ 
        font-size: 18px;
        line-height: 2;

        @media (max-width: 768px) {
             font-size: 20px;
            text-align: center;
          }
    }

    @media (max-width: 768px) {
             flex: 0.2;
            text-align: center;
  
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
      background-size: cover;
      overflow: hidden;
      border-radius: 5%;
      margin-right: 20px;
      margin-left: 20px;
    
      box-shadow: 0 0 4px #eee;
      @media (max-width: 768px) {
             display: none;

          }
    `
const LandingImg = styled.img`
  
        height: 420px;
        width: 560px;`
