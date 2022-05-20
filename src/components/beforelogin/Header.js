import React from 'react'
import { Link } from "react-router-dom"
import styled from "styled-components"
import { useContext } from 'react';
import UserContext from '../../UserContext'

const Header = () => {
  let user = JSON.parse(localStorage.getItem("user"))
    
    const userContext = useContext(UserContext)
  
    return (
      <Container>
          <RightSide>
              <Link to="/"> <Logo src="https://i.imgur.com/XCFT9Ps.png" alt='logo'/></Link>
            <h1>My Working Space</h1>
           </RightSide>
           <Expand>
             </Expand>  
           <LeftSide>
           <Link className="thelink" to="/about"> <BtnGrad > About</BtnGrad></Link>
           { userContext.user.isAuthen ? (<><Link className="thelink" to="/api/logout"><BtnGrad> Logout </BtnGrad></Link></>) 
        : ( <>
          <Link className="thelink" to="/api/auth"><BtnGrad> Login</BtnGrad></Link>
           <Link className="thelink" to="/api/register"><BtnGrad> Register</BtnGrad></Link>
        </>) }    
           </LeftSide>   
       </Container>
    )
}

export default Header

const Container = styled.div`
    display: flex;
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
    justify-content: center;
`
const Logo = styled.img`
 height: 90px;
  width: 90px;
  margin-top: -10px;
  border-radius: 50%;
`
const RightSide = styled.div`
   display: flex;
  font-size: 14px;
  margin-top: 2px;

  h1{
    padding-top: 10px;	
    font-size: 20px;
    margin-left: -10px;

    @media (max-width: 768px) {
            display: none;

          }
  }
`
const Expand = styled.div`
    flex: 1;
`

const LeftSide = styled.div`
    display: flex;
`

const BtnGrad = styled.div`
  background-image: linear-gradient(
    to right,
    #614385 0%,
    #617cc5 51%,
    #825bb1 100%
  );
  margin: 15px;
  padding: 15px 45px;
  text-align: center;
  font-size: 15px;
  transition: 0.5s;
  background-size: 200% auto;
  font-weight: 600;
  color: white;
  box-shadow: 0 0 10px #eee;
  border-radius: 20px;
  display: block;

  &:hover{
    background-position: right center; /* change the direction of the change here */
    color: #fff;
    text-decoration: none;
    cursor: pointer;
  }

  @media (max-width: 768px) {
    padding: 10px 20px;
    margin: 8px;
    margin-top: 20px;
  }
`