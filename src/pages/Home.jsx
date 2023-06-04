import { ContextAPI } from '../userContext'
import React, { useContext, useState, useEffect } from 'react'
import styled from 'styled-components'
import SearchPost from '../components/SearchPost'
import HeroHome from '../components/HeroHome'
import BottomHome from '../components/BottomHome'
import Section from '../components/Section'
import { Link, useNavigate } from 'react-router-dom';


const ContainerPosts = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin: 0 auto;
  flex: 1;
  width: 99%;
  /* background-color: red; */

  .content{
    flex: 1;
    flex-wrap: wrap;
    margin-bottom: 3px;
  }
  .right-side{
    width: 445px;
    margin-top: 1px;

   
  }
  .backend{
    display: flex;
    flex-direction: column;
    align-items: start;
    justify-content: end;
    width: 99%;
    height: 300px;
    overflow: hidden;
    border-radius: 5px;
    margin-bottom: 5px;
    margin-inline: 3px;

    a{
      transition: .4s;
    }
    a:hover{
      scale: 1.03;
    }

    h2{
      position: absolute;
      color: #ebefe5;
      filter: drop-shadow(0px 0px 3px #4d4d4d8a);
      padding: 10px;
      margin-bottom: 20px;
      z-index: 3;
    }
    span{
      position: absolute;
      color: #ebefe5;
      filter: drop-shadow(0px 0px 3px #4d4d4d8a);
      padding: 10px;
      z-index: 3;
    }
  }

  .mostView{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: left;
    background-color: #f7f8f6e0;
    border-radius: 5px;
    margin: 3px;
 

    h4{
      margin-top: 7px;
      margin-left: 15px;
      color: #124559;
    }
    .technologies{
      padding: 10px;

      span{
        cursor: pointer;
      }    

      span:hover{
        text-decoration: none;
        color: #7e8486;
      }
    }

  }
  @media only screen and (max-width: 600px) {
    .right-side{
    width: 100%;
  }
}


`

export default function Home() {

  const {posts, setPosts, trending, setTrending} = useContext(ContextAPI)
  const [uniqueTechnologies, setUniqueTechnologies] = useState([])
  const navigate = useNavigate();

  useEffect(() => {
    const uniqueTechnologies = [...new Set(
      posts.flatMap(post => post.tecnologies)
    )];
    setUniqueTechnologies(uniqueTechnologies);
  }, [posts]);


  return (
    <div className='container'>
      <HeroHome/>

      <ContainerPosts>
          <div className='content'>
            <Section posts={posts} name={'Javascript'}/>
            <Section posts={posts} name={'React'}/>
          </div>

          <div className='right-side'>
            <div className='backend'>
              <h2>BackEnd</h2>
              <span>Add a new post</span>
              <Link to="https://opencodetrackerback.onrender.com/">
                <img src="https://images.unsplash.com/photo-1627398242454-45a1465c2479?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80" alt="code image" />
              </Link>
            </div>

            <div className='mostView'>
              <h4>trending</h4>
              {trending.map((post, index)=>{
                if(index > -1 && index < 5){
                  return(
                    <SearchPost key={index} post={post}/>
                  )
                }
              })}
              </div>
              <div className='mostView technologies-box'>
            
              <h4>Tecnologies</h4>
                <div className='technologies'>
                {uniqueTechnologies.map((tech, index)=>{
                  return(
                    <span 
                      onClick={()=>navigate(`/openCodeTrackerFront/search?q=${tech}`)}
                      key={index} 
                      >{tech} </span> 
                    
                  )
                })}
                </div>
            </div>

          </div>
      </ContainerPosts>
      <BottomHome/>
      
  </div>




  
     
  )
}
