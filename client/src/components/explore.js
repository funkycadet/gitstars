import React from 'react'
import Header from './header'
import { useEffect, useState } from 'react';
import Loading from './loading';
import axios from 'axios';
import { Bar, Line, Pie } from "react-chartjs-2"
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, point } from "chart.js"


ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, point);

export const Explore = () => {
    let [topStarredRepos, setTopStarredRepos] = useState([]);
    let [loading, setLoading] = useState(true);

    const getTopStarredRepos = () => {
        axios.get('https://clownfish-app-o9ecv.ondigitalocean.app/api/v1/top_starred_repos').then(
            (res) => {
                // console.log(res.data)
                setTopStarredRepos(res.data.slice(0,10));
                setLoading(false);
                console.log(topStarredRepos);
            }
        )
    }

    const state = {
        labels: topStarredRepos.map(x => x.repo_name),
        datasets: [
          {
            backgroundColor: "hsl(10, 79%, 65%)",
            // hoverBackgroundColor: "hsl(186, 34%, 60%)",
            // borderRadius: 8,
            borderColor: "rgb(255, 99, 132)",
            data: topStarredRepos.map(y => y.total_stars)
          }
        ]
    }
    console.log(state);

    useEffect(() => {
        getTopStarredRepos();
    }, []);


  return (
      <>
          <div className='h-screen'>
              <Header />
              <div className='explore-container flex justify-center items-center'>
                  {
                      loading ? <Loading /> :
                          <div className='bargraph-container'>
                              <h1 className='text-5xl'>
                                  Hello world !
                              </h1>
                              {/* <Bar
                                    data={state}
                                    options={{
                                    plugins: {
                                        title: {
                                        display: true,
                                        text: "Top Starred Repositories"
                                        }
                                    }
                                    }}
                                /> */}
                              {/* <Pie data={state} /> */}
                              <Line data={state}/>
                          </div>
                  }
              </div>
          </div>
      </>
  )
}

export default Explore