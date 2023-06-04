import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom';

const SearchPostBox = styled.div`
    display: flex;
    border-radius: 5px;
    max-width: 430px;
    height: 100px;
    margin: 5px;
    padding: 10px;
 

    img{
        width: 80px;
        height: 100%;
        border-radius: 5px; 
     
    }
    .info{
        display: flex;
        flex-direction: column;
        margin-left: 15px;
    }
    .categories{
        color: #838d91;
        font-size: 12px;
    }
    .title{
        color: #01024c;
        font-size: 15px;
    }
    .date{
        bottom: 0;
        font-size: 12px;
        color: #838d91;
    }
`

export default function SearchPost({post}) {
  return (
    <SearchPostBox>
        <Link  to={`single?title=${post?.title}`}>
            <img src={post.image} alt={post.title} />
        </Link>
        <div className='info'>
            <span className='categories'>{(post.tecnologies).join(' - ')}</span>
            <span className='title'>{post.title}</span>
            <span className='date'>{post.date} - {post.views} views</span>
        </div>
    </SearchPostBox>
    
  )
}
