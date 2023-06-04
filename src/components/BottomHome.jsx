import React,{ useState, useEffect, useContext, useRef } from 'react'
import { ContextAPI } from '../userContext'
import styled from 'styled-components'
import CountUp from 'react-countup';

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  width: 99%;
  height: 200px;
  margin: 0 auto;
  border-radius: 5px;
  margin-bottom: 2px;
  overflow: hidden;
  background-color: #124559;

  
  filter: drop-shadow(0px 0px 3px #4d4d4d8a);

  .counter{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-top: 20px;
    margin-bottom: 30px;
    color: #f5f8f0;

    h1{
        font-size: 60px;
    }

  }

`

export default function BottomHome() {

    const {posts, setPosts} = useContext(ContextAPI)
    const [totalViews, setTotalViews] = useState()
    const [uniqueTechnologies, setUniqueTechnologies] = useState([])
    const containerRef = useRef(null);
    const [isIntersecting, setIsIntersecting] = useState(false);

    useEffect(() => {
        const options = {
          root: null,
          rootMargin: '0px',
          threshold: 0.5, // Altere esse valor para ajustar quando a interseção é detectada
        };
    
        const observer = new IntersectionObserver((entries) => {
          const entry = entries[0];
          setIsIntersecting(entry.isIntersecting);
        }, options);
    
        if (containerRef.current) {
          observer.observe(containerRef.current);
        }
    
        return () => {
          if (containerRef.current) {
            observer.unobserve(containerRef.current);
          }
        };
      }, []);

      useEffect(() => {
        if (isIntersecting) {
          const uniqueTechnologies = [...new Set(posts.flatMap((post) => post.tecnologies))];
          setUniqueTechnologies(uniqueTechnologies);
    
          const viewsArray = posts.map((post) => post.views);
    
          const sum = viewsArray.reduce((accumulator, currentValue) => {
            return accumulator + currentValue;
          }, 0);
    
          setTotalViews(sum);
        }
      }, [posts, isIntersecting]);

// console.log('amount of technologies',uniqueTechnologies.length)
// console.log('amount of posts',posts.length)
// console.log(totalViews)

  return (
    <Container ref={containerRef} className='container-hero'>
        <div className='counter'>
            <h1>
            {isIntersecting ? (
            <CountUp end={uniqueTechnologies.length} duration={5} />
          ) : (
            '0'
          )}
            </h1>
            <span>Technologies</span>
        </div>
        <div className='counter'>
            <h1>
            {isIntersecting ? <CountUp end={posts.length} duration={5} /> : '0'}
            </h1>
            <span>Posts</span>
        </div>
        <div className='counter'>
            <h1>
            {isIntersecting ? <CountUp end={totalViews} duration={5} /> : '0'}
            </h1>
            <span>Views</span>
        </div>
    </Container>
  )
}
