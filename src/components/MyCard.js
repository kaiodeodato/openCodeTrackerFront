import React from 'react'
import styled from 'styled-components'
import { Link, useNavigate } from 'react-router-dom';

const Container = styled.div`

  .content-box{
    max-height: 50px;
    max-width: 80%;
    overflow: hidden;

    span{
      text-decoration: none;
      color: white;
      margin-right: 10px;
    }
  }


  .box-1{
    max-width: 300px;
    overflow: hidden;
    border-radius: 5px;
    display: flex;
    align-items: end;
    justify-content: start;
    margin: 5px;
    cursor: pointer;

  &:hover img{
    scale: 1.02;
  }
    

    .info-box{
      position: absolute;
      width: 300px;
      color: #ebefe5f8;
      margin-bottom: 25px;
      margin-left: 20px;
      filter: drop-shadow(0px 0px 5px #090909);
      transition: .3s;
      z-index: 5;

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
    
    &:hover .info-box {
      filter: blur(5px); 
      opacity: 0.2;
    }
  }
`

export default function MyCard({post}) {

  const navigate = useNavigate();

  return (
    <Container  onClick={()=>navigate(`/openCodeTrackerFront/single?title=${post?.title}`)}>
      <div className='box-1'>
          <div className='info-box'>
              <h2>{post?.title}</h2>
              <div className='content-box'>
                  <span>
                  {post?.tecnologies &&
                post.tecnologies.map((tech, index) => (
                  <span key={index}>{tech}</span>
                ))}
                    
                  </span>
              </div>
          </div>
          <div>
            <img src={post?.image} alt={post?.title} />
          </div>
      </div>
    </Container>
  )
}
