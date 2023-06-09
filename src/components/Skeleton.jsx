import React,{ useState, useEffect } from 'react'
import styled from 'styled-components'


const Box = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: auto;
    padding: 20px;
    width: 100vw;
    height: 99vh;

    .container1{
        display: flex;
        justify-content: center;
        align-items: center;
        margin: 0 auto;
        width: 80%;
        height: 65%;
        margin-bottom: 3px;

        .box1{
           
            display: flex;
            justify-content: center;
            align-items: center;
            margin: 0 auto;
            width: 70%;
            height: 100%;
           
            margin-bottom: 8px;
            margin-right: 8px;
            border-radius: 5px;
            background: 
                linear-gradient(217deg, rgba(135, 135, 135, 0.8), rgba(255,0,0,0) 70.71%),            
                linear-gradient(127deg, rgba(178, 178, 178, 0.8), rgba(0,255,0,0) 70.71%); 
                
            animation-name: motion;
            animation-duration: 2s;
            animation-iteration-count: infinite;
            transition-timing-function: ease;
            transition: 2s;

        }

        .subcontainer{
          
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            align-items: center;
            margin: 0 auto;
            width: 30%;
            height: 100%;
            margin-bottom: 8px;

            .box2,
            .box3{
                background: 
                linear-gradient(157deg, rgba(135, 135, 135, 0.8), rgba(255,0,0,0) 70.71%),            
                linear-gradient(237deg, rgba(178, 178, 178, 0.8), rgba(0,255,0,0) 70.71%); 
                display: flex;
                align-items: center;
                margin: 0 auto;
                width: 100%;
                height: 100%;
                border-radius: 5px;
                animation-name: motion;
                animation-duration: 2s;
                animation-iteration-count: infinite;
                transition-timing-function: ease;
                transition: 2s;
            }

            .box3{
                margin-top: 8px;
                animation-name: motion;
                animation-duration: 2s;
                animation-iteration-count: infinite;
                transition-timing-function: ease;
                transition: 2s;
                animation-delay: 1s;
            }
        }
    }
    .container2{
        display: flex;
        justify-content: center;
        align-items: center;
        margin: 0 auto;
        width: 80%;
        height: 35%;
      

        .box4{
            display: flex;
            justify-content: center;
            align-items: center;
            margin: 0 auto;
            width: 70%;
            height: 100%;
            background: 
                linear-gradient(217deg, rgba(135, 135, 135, 0.8), rgba(255,0,0,0) 70.71%),            
                linear-gradient(157deg, rgba(178, 178, 178, 0.8), rgba(0,255,0,0) 70.71%); 
            margin-right: 8px;
            border-radius: 5px;
            animation-name: motion;
            animation-duration: 2s;
            animation-iteration-count: infinite;
            transition-timing-function: ease;
            transition: 2s;
        }

        .box5{
            display: flex;
            justify-content: center;
            align-items: center;
            margin: 0 auto;
            width: 30%;
            height: 100%;
            background: 
                linear-gradient(117deg, rgba(135, 135, 135, 0.8), rgba(255,0,0,0) 70.71%),            
                linear-gradient(227deg, rgba(178, 178, 178, 0.8), rgba(0,255,0,0) 70.71%); 
            border-radius: 5px;
            animation-name: motion;
            animation-duration: 2s;
            animation-iteration-count: infinite;
            transition-timing-function: ease;
            transition: 2s;
        }
    }

    @keyframes motion {
                0%{
                    opacity: 1;
                }
                50%{
                    opacity: 0.4;
                }
                100%{
                    opacity: 1;
                }
            }
`

export default function Skeleton() {


 
  return (
    <Box>
     <div className='container1'>
        <div className='box1'></div>
        <div className='subcontainer'>
            <div className='box2'></div>
            <div className='box3'></div>
        </div>
     </div>
     <div className='container2'>
        <div className='box4'></div>
        <div className='box5'></div>
     </div>
    </Box>
  )
}
