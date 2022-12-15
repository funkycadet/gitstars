import React, { useState, useEffect } from 'react'
import Loading from './loading'
import axios from 'axios';
import {Header} from './header';
import previous from "../images/previous-svgrepo-com.svg"
import stars from '../images/stars.png';
import view from '../images/eye-svgrepo-com.svg';
import { useNavigate, useParams, Link } from 'react-router-dom';
import { Bar } from 'react-chartjs-2';


export const LanguageExplore = () => {
    const [ languageRepos, setLanguageRepos] = useState([]);
    const [ topLanguageRepos, setTopLanguageRepos] = useState([]);
    const [ loading, setLoading] = useState(true);
    const navigate = useNavigate();
    const params = useParams();

    const getLanguageRepos = () => {
        axios.get(`https://clownfish-app-o9ecv.ondigitalocean.app/api/v1/language/${params.lang}`).then(
            (res) => {
                // console.log(res.data);
                setTopLanguageRepos(res.data.slice(0,20));
                setLanguageRepos(res.data);
                setLoading(false);
                // console.log(languageRepos);
            }
        ).catch(error => {
            console.log(error.response.data);
            navigate("*");
         })
    }

    const state = {
        labels: topLanguageRepos.map(x => x.repo_name),
        datasets: [
          {
            backgroundColor: "hsl(226,95.9%,47.5%)",
            hoverBackgroundColor: "hsla(226,95.9%,47.5%, 0.8)",
            borderRadius: 8,
            borderColor: "hsl(226,95.9%,47.5%)",
            data: topLanguageRepos.map(y => y.total_stars)
          }
        ]
    }

    useEffect(() => {
        getLanguageRepos();
        // console.log(params);
    }, [ params.lang]);

    // const handleView = (repo_url) => {
    //     console.log(repo_url)

    // }

  return (
    <>
          <div className='h-auto w-full flex flex-col justify-center'>
              <Header />
              <div className='languagerepo-container'>
                  <button className='previous-button flex-start h-2 flex flex-row justify-center items-center text-white gap-2'
                      onClick={() => navigate('/explore')}>
                      Go back <img src={previous} alt="Go back" height="20px" width="20px" />
                  </button>
                  {
                    loading ? 
                          <div className='lang-loadercontainer'>
                              <Loading />
                          </div> : 
                          <>
                              <Bar data={state} />
                              {
                                  languageRepos.map((each) =>
                                      <div key={each.repo_name} className='list-container mt-8 shadow-lg rounded-lg w-full flex flex-row justify-between items-center p-6'>
                                          <div className='flex flex-col flex-start items-center space-x-4'>
                                              <h1 id="repo-name">{each.repo_name}</h1>
                                              <div className='flex flex-row justify-between items-center'>
                                                  <h2>Total Stars: {each.total_stars}</h2>
                                                  <img src={stars} alt="Rating" height="30px" width="40px" />
                                              </div>
                                          </div>
                                          <a href={each.repo_link} target="_blank" rel="noreferrer" >
                                              <button className="font-bold py-2 px-4 rounded inline-flex items-center space-x-1">
                                                  <img src={view} alt="See Repo" height="20px" width="20px" />
                                                  <span id="view-span">View</span>
                                              </button>
                                          </a>
                                         
                                      </div>
                                  )
                              }
                          </>
                 }
          
              </div>

          </div>
    </>
  )
}

export default LanguageExplore