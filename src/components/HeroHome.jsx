import React,{ useState, useEffect, useContext } from 'react'
import { ContextAPI } from '../userContext'
import styled from 'styled-components'
import { Link, useNavigate } from 'react-router-dom';

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  width: 99%;
  height: auto;
  margin: 0 auto;
  border-radius: 5px;
  margin-bottom: 2px;
  overflow: hidden;
  filter: drop-shadow(0px 0px 3px #4d4d4d8a);


  .content-box{
    max-height: 50px;
    max-width: 60%;
    overflow: hidden;
    

  }
  .left-hero{
    cursor: pointer;
    display: flex;
    align-items: end;
    justify-content: start;
    margin: 2px;
    border-radius: 5px;
    max-width: 835px;
    

    

    &:hover .firstImage{
      scale: 1.02;
    }
    &:hover .firstInfo{
      filter: blur(20px); 
      opacity: 0;
   
    }
    
    
    h2{
        max-width: 70%;
      }

    .info-box{
      z-index: 5;
      position: absolute;
      color: #ebefe5;
      margin-bottom: 30px;
      margin-left: 20px;
      filter: drop-shadow(0px 0px 5px #232323);
      transition: .3s;
      display: flex;
      flex-direction: column;
      align-items: start;
      width: 1100px;
    }

    @media only screen and (max-width: 600px) { 
      .info-box{ 
        width: 92%;
    }
   
  }

    
  }
  .box-img{
    cursor: pointer;
    max-height: 510px;
    overflow:  hidden;
    align-items: start;
    justify-content: end;
    border-radius: 5px;

    
   
    img{
      width: 100%;
      transition: .4s;
    }
   
  }

  .right-hero{
    flex: 1;
    max-height: 510px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin: 2px;
  }
  .first{
    margin-bottom: 5px;
  }
  .box-1{
    overflow: hidden;
    border-radius: 5px;
    display: flex;
    align-items: end;
    justify-content: start;
    cursor: pointer;

    &:hover img{
      scale: 1.02;
    }
    &:hover .info-box {
      filter: blur(12px); 
      opacity: 0;
    }
    .info-box{
      position: absolute;
      color: #efe5e5f8;
      margin-bottom: 25px;
      margin-left: 20px;
      filter: drop-shadow(0px 0px 5px #090909);
      z-index: 10;
      transition: .3s;

      h2{
        font-size: 20px;
    
      }
      span{
        font-size: 14px;
        
      }
    }
    img{
      width: 100%;
      transition: .4s;
    }
    
    
  }
`

export default function HeroHome() {
  const navigate = useNavigate();
  const {posts, setPosts} = useContext(ContextAPI)


  return (
    <Container className='container-hero'>

      <div className='left-hero'>
        <div className='info-box firstInfo'>
          <h2>{posts[0]?.title}</h2>
          <div className='content-box'>
            <span>{posts[0]?.content1}</span>
          </div>

        </div>
        <div  onClick={()=>navigate(`/openCodeTrackerFront/single?title=${posts[0]?.title}`)} className='box-img'>
            <img className='firstImage' src={posts[0]?.image} alt={posts[0]?.title} />
        </div>
      </div>
      
      <div className='right-hero'>
        <div onClick={()=>navigate(`/openCodeTrackerFront/single?title=${posts[1]?.title}`)}  className='box-1 first'>
          <div className='info-box'>
            <h2>{posts[1]?.title}</h2>
            <div className='content-box'>
              <span>{posts[1]?.content1}</span>
            </div>
          </div>
            <img src={posts[1]?.image} alt={posts[1]?.title} />
        </div>
        <div onClick={()=>navigate(`/openCodeTrackerFront/single?title=${posts[2]?.title}`)}  className='box-1'>
          <div className='info-box'>
            <h2>{posts[2]?.title}</h2>
            <div className='content-box'>
              <span>{posts[2]?.content1}</span>
            </div>
          </div>
            <img src={posts[2]?.image} alt={posts[2]?.title} />
        </div>
      </div>

    </Container>
  )
}
