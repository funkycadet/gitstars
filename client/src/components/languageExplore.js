import React, { useState, useEffect } from 'react'
import Loading from './loading'
import axios from 'axios';
import {Header} from './header';
import previous from "../images/previous-svgrepo-com.svg"
import { useNavigate } from 'react-router-dom';
import { Bar } from 'react-chartjs-2';


export const LanguageExplore = () => {
    const [ languageRepos, setLanguageRepos] = useState([]);
    const [ loading, setLoading] = useState(true);
    const navigate = useNavigate();

    const getLanguageRepos = () => {
        axios.get('https://clownfish-app-o9ecv.ondigitalocean.app/api/v1/language/python').then(
            (res) => {
                // console.log(res.data);
                setLanguageRepos(res.data.slice(0,20));
                setLoading(false);
                console.log(languageRepos);
            }
        )
    }

    const state = {
        labels: languageRepos.map(x => x.repo_name),
        datasets: [
          {
            backgroundColor: "hsl(226,95.9%,47.5%)",
            hoverBackgroundColor: "hsla(226,95.9%,47.5%, 0.8)",
            borderRadius: 8,
            borderColor: "hsl(226,95.9%,47.5%)",
            data: languageRepos.map(y => y.total_stars)
          }
        ]
    }

    useEffect(() => {
        getLanguageRepos();
    }, []);

  return (
    <>
          <div className='h-auto w-full flex flex-col justify-center'>
              <Header />
              <div className='languagerepo-container'>
                  <button className='previous-button flex-start h-2 flex flex-row justify-center items-center text-white gap-2'
                      onClick={() => navigate('/explore')}>
                      Go back <img src={previous} alt="Go back" height="20px" width="20px" />
                  </button>
                  <Bar data={state} />
              </div>

          </div>
    </>
  )
}

export default LanguageExplore