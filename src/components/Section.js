import React,{ useState, useEffect } from 'react'
import styled from 'styled-components'

import SearchPost from '../components/SearchPost'
import { searchTechnology } from '../api';


const Box = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  margin: 2px;
  margin-bottom: 6px;
  width: 99.5%;

  background-color: #f7f8f6e0;
  height: auto;
  border-radius: 5px;

  h4{
    position: relative;
    color: #124559;
    margin-top: 10px;
    margin-left: 30px;
  }

  .first{
    flex: 1;
    width: 100%;
  

    .top{
      display: flex;
      flex-wrap: wrap;

      .image-box{
        overflow: hidden;
        max-width: 400px;
        padding: 10px;
        margin: 0 auto;

        img{
          width: 100%;
          border-radius: 5px;
          transition: .3s;
        }
        img:hover{
          scale:1.01;
        }
      }
      .info-box{
        flex: 1;
        display: flex;
        flex-direction: column;
        padding: 10px;

        .wrapP{
          max-height: 195px;
          overflow: hidden;
        }
        span{
          color: #aaa;
        }
      }

    }
    @media only screen and (max-width: 600px) {
      .info-box{
        padding: 30px !important;
      
       
      }
     
  }

  }
  .second{

    .small{
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));

      .small-post{
        margin-left: 40px;
      }
    }

    @media only screen and (max-width: 600px) {
    .small-post{
        margin-left: 0px !important;
       
      }
    }
  }
`

export default function Section({posts, name}) {

  const [postsTech, setPostsTech] = useState([])

  useEffect(()=>{
    searchTechnology(name)
    .then(data=>setPostsTech(data))
  },[])

 
 
  return (
    <Box>
      <h4>{name}</h4>
        <div className='first'>
          <div className='top'>
            <div className='image-box'>
              <a  href={`single?title=${postsTech[0]?.title}`}>
                <img src={postsTech[0]?.image} alt="" />
              </a>
            </div>
            <div className='info-box'>
              <h5>{postsTech[0]?.title}</h5>
              <span>{postsTech[0]?.date} - {postsTech[0]?.views} views</span>
              <div className='wrapP'>
                <p>{postsTech[0]?.content1}</p>
              </div>
            </div>

          </div>

        </div>
        <div className='second'>

        <div className='small'>
          {postsTech?.map((post, index)=>{
            if(index > 0 && index < 4){
              return(
                <div key={index} className='small-post'>
                  <SearchPost  key={index} post={post}/>
                </div>
              )
            }
          })}

        </div>
        </div>
    </Box>
  )
}
