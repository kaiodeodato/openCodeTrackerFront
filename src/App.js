import React,{ useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from './pages/Home';
import Search from './pages/Search';
import Single from './pages/Single';
import { ContextAPI } from "./userContext"
import './App.css';
import Navbar from './components/Navbar';
import { getAllPosts, searchTrendings } from './api';
import styled from 'styled-components';
import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai';
import { BsGlobe } from 'react-icons/bs';
import Looging from './components/Looging';


const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh; /* Set min-height to 100vh for the wrapper */


  a{
    text-decoration: none;
    color: white;
    transition: .3s;
  }

  a:hover{
    text-decoration: none;
    color: #ccc;
  }
`;

const MyFooter = styled.div`
    width: 100%;
    height: 100px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: 0 auto;
    background-color: var(--main-color);
    color: var(--text-color-2);

    .i{
      margin: 20px;
    }
`;

const Container = styled.div`
  flex: 1; /* Make the container grow to fill the available space */
`;

function App() {

  const [posts, setPosts] = useState([])
  const [trending, setTrending] = useState([])

  useEffect(()=>{

    getAllPosts()
    .then(data=>setPosts(data.reverse()))
    .catch((err)=>console.log(err))

 

  },[])

  useEffect(()=>{

    searchTrendings()
    .then(data=>setTrending(data))

  },[posts])

  // console.log(trending)

  return (
    <ContextAPI.Provider value={{posts, setPosts, trending, setTrending}}>
      { posts.length !== 0 ? 
      <Wrapper>
        <Container>
          <Router>
            <Navbar/>
            <Routes>
              <Route path="/openCodeTrackerFront/search*" element={<Search/>} />
              <Route path="/openCodeTrackerFront/" element={<Home/>} />
              <Route path="/openCodeTrackerFront/single" element={<Single />} />
            </Routes>
          </Router>
        </Container>
        <MyFooter>
          <div className='icons'>
              <a target='_blank' href="https://github.com/kaiodeodato?tab=repositories">
                <AiFillGithub className='i' size={40}/>
              </a>
              <a target='_blank' href="https://www.linkedin.com/in/kaio-viana-6ab42016b/">
                <AiFillLinkedin className='i'  size={42} />
              </a>
              <a target='_blank' href="http://www.portfolio.kaiodeodato.com/">
                <BsGlobe  className='i'  size={40}/>
              </a>
            
          </div>
          <p className='footer-text'>&copy; 2023 openCodeTracker - Kaio Deodato. All rights reserved.</p>
        </MyFooter>
      </Wrapper>
       :
       <Looging/>
     }
    </ContextAPI.Provider>
  );
}

export default App;
