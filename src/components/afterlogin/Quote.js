import React from 'react'
import {useEffect, useState} from 'react'
import styled from 'styled-components'



const Quote = () => {
  const category = 'success'
  const [posts, setPosts] = useState([]);
  const fetchPost = async () => {
  const response = await fetch(
    
      `https://api.api-ninjas.com/v1/quotes?category=${category}`,
    {
      method: "GET",
      withCredentials: true,
      headers: {
        "X-Api-Key": "+ycKmxh6e4HTp8MxXQ2RKQ==X1uC0v9EHLLDeKA4",
        "Content-Type": "application/json"
      }})

   const data = await response.json();
  // console.log(JSON.stringify(data));
    setPosts(...data);
  };


  useEffect(() => {
    fetchPost();
    
  }, []);

  let quote = posts.quote
  let author = posts.author


  console.log(JSON.stringify(posts))
 
  return (
    <QouteContainer>
      <Qoute>
      <h1>{quote}</h1>
      <Label>
      <h3>- {author}</h3>
      </Label>
      </Qoute>
    </QouteContainer>
  )
}

export default Quote

const QouteContainer = styled.div`
  display: flex;
  justify-content: center
 
`

const Qoute = styled.div`
padding: 30px;
display: inline-block;
  text-align: center;
  background-color: #1a252f;
  border-radius: 20px;
  width: 80%;
  letter-spacing: 1px;
  color: #eee;
  border: 1px solid black;
box-shadow: 0 0 10px grey;
  
  h1{
      font-size: 33px;
      font-weight: 700;
      padding: 30px;
      letter-spacing: 1px;
      border-style: inset;
      border-radius: 20px;
      
      @media (max-width: 768px) {
        font-size: 18px;
        text-align: center;
        line-height: 2;

    }
    }

    h3{
      font-size: 28px;
      font-weight: 500;
      @media (max-width: 768px) {
        font-size: 18px;
        text-align: center;

    }
     
    }
`

const Label = styled.div`
  display: flex;
  justify-content: flex-end

`