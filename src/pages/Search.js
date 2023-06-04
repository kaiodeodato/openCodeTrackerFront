import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { searchPosts } from '../api';
import SearchPost from '../components/SearchPost';
import MyCard from '../components/MyCard';
import styled from 'styled-components';

export default function Search() {
  const [searchParams] = useSearchParams();
  const [searchedPosts, setSearchedPosts] = useState([]);
  const query1 = searchParams.get('q');
  const query2 = searchParams.get('tech');


    useEffect(() => {
      if(query1){
        searchPosts(query1).then((data) => setSearchedPosts(data));
      }else{
        searchPosts(query2).then((data) => setSearchedPosts(data));
      }
    }, [query1,query2]);
  


  return (
      <div className='container'>
        <div className='d-flex justify-content-center flex-wrap'>
          {searchedPosts.map((post,index) => {
            if (post) {
              return <MyCard key={index} post={post} />;
            }
            
          })}
        </div>
    </div>
  );
}
