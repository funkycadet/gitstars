import React from 'react'
import Header from './header'
import eric from '../images/eric-avatar-removebg.jpg';
import vodina from '../images/vodina-avatar-removebg.jpg';
import pascal from '../images/pascal-avatar-removebg.jpg';
import github from '../images/icons8-github.svg';
import link from '../images/link-svgrepo-com.svg';

export const About = () => {
  return (
    <>
      <Header />
      <div className='about-container'>
        <div className='about-style-container'>
          <h1 className='text-6xl ml-6'>Meet the team of 
          <span className='italic-span'>creators, 
          <br></br>developers </span> 
          and world class <br></br>
          <span className='italic-span'> problem solvers</span>
          </h1>
          <article className='group-profile flex flex-row w-full mt-16 justify-center items-center space-x-12'>
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
        <article className='reason-container w-70% flex flex-row justify-center items-center space-x-8'>
          <div className='w-1/3 p-6 ml-14'>
            <h1 className='text-7xl leading-20'>Why <br></br>GitStars ?</h1>
          </div>
          <div className='w-2/3 p-16 flex flex-col space-y-8'>
            <div className='text-xl'>
              <h1 className='uppercase font-bold'>About Us</h1>
              <p>GitStars is a web service that allows users to easily, find top starred projects on GitHub hassle free.
              This project was made as a fulfilment to the curriculum of the ALX HOLBERTON SCHOOL.
              </p>
            </div>
            <div className='text-xl'>
              <h1 className='uppercase font-bold'>Our mission</h1>
              <p>To create a medium for developers and tech enthusiasts to explore popular progamming languages as well as popular repositories.
              </p>
            </div>
          </div>

        </article>
        <div className='flex flex-col justify-center items-center mb-8 space-y-8'>
          <h1 className='footer-text text-4xl'>
            Check out our source code on Github 
          </h1>
          <div className='flex flex-row justify-center items-center w-full space-x-2'>
            <img src={github} alt='Repository link' height="35px" width="35px" />
            <img src={link} alt='Icon link' height="35px" width="35px" />
            <a href="https://github.com/funkycadet/gitstars" target="_blank" rel='noreferrer' className='text-xl hover:underline hover:underline-offset-2'>
              Project Link
            </a>
          </div>
        </div>
      </div>
    </>
  )
}

export default About