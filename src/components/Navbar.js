import Reac, { useState } from 'react'
import styled from 'styled-components'
import { Link, useNavigate } from "react-router-dom"
import { AiOutlineSearch } from 'react-icons/ai';

const Box = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  a{
    text-decoration: none;
    transition: .3s;
  }
  a:hover{
    scale: 1.02;
    filter: drop-shadow(0px 0px 5px rgba(255, 255, 255, 0.506));
  }

`
const Logo = styled.h2`
  font-size: 25px;
  color: #ebefe5;
  margin-left: 30px;
  filter: drop-shadow(0px 0px 5px #665);

`
const Menu = styled.div`
  display: flex;
  align-items: center;
  padding: 8px;
  margin: 8px;

  button{
    font-size: 18px;
    border-radius: 5px;
    border: none;
    padding: 3px;
    color:#023e8a;
    margin-left: 5px;
    max-width: 150px;
  }
  input{
    font-size: 18px;
    border-radius: 5px;
    border: none;
    padding: 3px;
    color:#023e8a;
    margin-left: 5px;
    max-width: 150px;
  }
  

`
export default function Navbar() {
  const [searchWord,setSearchWord] = useState("")
  const navigate = useNavigate();

  function ToNavegate(e){
    e.preventDefault()
    if(!searchWord) return
    navigate(`/search?q=${searchWord}`)
    setSearchWord("")
  }
  return (
    
    <Box>
      <Link to={'/'}>
        <Logo className='logo-navbar'>openCodeTracker</Logo>
      </Link>
      <Menu>
        <form onSubmit={ToNavegate} className="form">
          <input
          className='input-search' 
          onChange={(e)=>{setSearchWord(e.target.value)}} 
          type="text" 
          placeholder="Search..."  
          value={searchWord}
          />
          <button type="submit" ><AiOutlineSearch/></button>
        </form>
      </Menu>      
    </Box>
  )
}
