import React from 'react'
import Header from './header'
import eric from '../images/eric-avatar-removebg.jpg';
import vodina from '../images/vodina-avatar-removebg.jpg';
import pascal from '../images/pascal-avatar-removebg.jpg';

export const About = () => {
  return (
    <>
      <Header />
      <div className='about-container'>
        <div className='about-style-container'>
          <h1 className='text-5xl relative left-10'>Meet the team of 
          <span className='italic-span'>creators, 
          <br></br>developers </span> 
          and world class <br></br>
          <span className='italic-span'> problem solvers</span>
          </h1>
          <article className='group-profile flex flex-row w-full mt-16 ml-12 flex-start items-center space-x-12'>
            <div className='flex flex-col justify-center items-center space-y-2'>
              <img src={vodina} alt="Team mate 1" height="220px" width="220px" className='shadow-xl rounded-lg' />
              <h1 className='uppercase text-xl'>Vodina Efem </h1>
              <p className='text-base'>Frontend Developer</p>
              <img/>
            </div>
            <div className='flex flex-col justify-center items-center space-y-2'>
              <img src={eric} alt="Team mate 2" height="220px" width="220px" className='shadow-xl rounded-lg' />
              <h1 className='uppercase text-xl'>Eric Alaribe</h1>
              <p className='text-base'>Project Manager</p>
            </div>
            <div className='flex flex-col justify-center items-center space-y-2'>
              <img src={pascal} alt="Team mate 1" height="220px" width="220px" className='shadow-xl rounded-lg' />
              <h1 className='uppercase text-xl'>Pascal Chinedu</h1>
              <p className='text-base'>Backend Developer</p>
            </div>
          </article>
        

        </div>
      </div>
    </>
  )
}

export default About