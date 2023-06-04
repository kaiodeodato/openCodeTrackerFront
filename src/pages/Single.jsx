import { ContextAPI } from '../userContext';
import React, { useContext, useState, useEffect } from 'react';
import styled from 'styled-components';
import { searchTitle } from '../api';
import { useSearchParams, Link, useNavigate } from 'react-router-dom';

const ContainerPosts = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  padding: 20px;
  border-radius: 5px;
  color: #124559;

  span{
    cursor: pointer;
    text-decoration: none;
    color: #124559;
    transition: .3s;
    margin-right: 10px;
  }
  span:hover{
    text-decoration: none;
    color: #cfdce1;
  }

  img {
    width: 100%;
    border-radius: 5px;
    transition: .3s;
  }
  img:hover {
   scale: 1.02;
  }
  .container-top{
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    width: 98.3%;
    height: 205px;
    background-color: #e5eee2;
    padding: 20px;
    margin: auto;
    border-radius: 5px;
    margin-bottom: 2px;

    .box-image{
      width: 220px;
      height: 170px;
      overflow: hidden;
    }

    .box-info{
      
      .modulo-top{
        padding: 20px;
     
        .date-views{
          display: flex;
          justify-content: space-between;
          margin-top: 45px;
          color: #b0bcbc !important;

          .date {
          
          }
          .views{
          }
        }
      }
    }
  }

  @media only screen and (max-width: 600px) {
    .container-top{
      width: 95%;
    }
    }

  .container-content {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;

    .content-box {
      min-width: 300px;
      width: 49%;
      padding: 20px;
      background-color: #e5eee2;
      color: #124559;
      border-radius: 5px;
      margin: 2px;
      white-space: pre-wrap; 
      height: 450px;
      overflow-y: auto;
    }

    .code-box {
      min-width: 300px;
      width: 49%;
      padding: 20px;
      background-color: #124559;
      color: #e5eee2;
      border-radius: 5px;
      margin: 2px;
      white-space: pre-wrap; 
      height: 450px;
      overflow-y: auto;
    }

    @media only screen and (max-width: 600px) {
      .content-box {
        width: 95%;
      }

      .code-box {
        width: 95%;
      }
    }
  }
`;

export default function Single() {
  const [searchParams] = useSearchParams();
  const [searchedPost, setSearchedPost] = useState([]);
  const title = searchParams.get('title');
  const navigate = useNavigate();

  const { posts, setPosts, trending, setTrending } = useContext(ContextAPI);
  const [post, setPost] = useState([]);

  useEffect(() => {
    searchTitle(title)
    .then((data) => setSearchedPost(data));
  }, []);

  return (
    <ContainerPosts>
      <div className='container'>
        

        <div className='container-top'>
        
          <div className='box-image'>
            <img src={searchedPost?.image} alt={searchedPost?.title} />
          </div>
          <div className='box-info'>
            <div className='modulo-top'>

              <h2>{searchedPost?.title}</h2>
              {searchedPost?.tecnologies &&
                searchedPost.tecnologies.map((tech, index) => (
                  <span  onClick={()=>navigate(`/openCodeTrackerFront/search?tech=${tech}`)}>{tech}</span>
                ))}
              <div className='date-views'>
                <p className='date'>Date: {searchedPost?.date}</p>
                <p className='views'>Views: {searchedPost?.views}</p>
              </div>
              
            </div>
              
          </div>
        </div>

        <div className='container-content'>
          <div className='content-box'>
            <h2>Content:</h2>
            <div>{searchedPost?.content1}</div>
          </div>
          <div className='code-box'>
            <h2>Code:</h2>
            <div>{searchedPost?.content2}</div>
          </div>
        </div>
      </div>
    </ContainerPosts>
  );
}
