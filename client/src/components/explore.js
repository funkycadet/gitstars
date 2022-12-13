import React from 'react'
import Header from './header'
import { useEffect, useState } from 'react';
import Loading from './loading';
import axios from 'axios';
import { Bar, Line, Pie } from "react-chartjs-2"
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip } from "chart.js"


ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip);

export const Explore = () => {
    let [topStarredRepos, setTopStarredRepos] = useState([]);
    let [allTopStarredRepos, setAllTopStarredRepos] = useState([]);
    let [loading, setLoading] = useState(true);

    const getTopStarredRepos = () => {
        axios.get('https://clownfish-app-o9ecv.ondigitalocean.app/api/v1/top_starred_repos').then(
            (res) => {
                // console.log(res.data)
                setAllTopStarredRepos(res.data);
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
            backgroundColor: "hsl(226,95.9%,47.5%)",
            hoverBackgroundColor: "hsla(226,95.9%,47.5%, 0.8)",
            borderRadius: 8,
            borderColor: "hsl(226,95.9%,47.5%)",
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
          <div className='h-auto'>
              <Header />
              <div className='searchbar-container h-4 flex justify-center items-center w-full'>
                  <form className='search-bar'>
                      <label for="default-search" class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
                      <div class="relative">
                          <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                              <svg aria-hidden="true" class="w-5 h-5 text-gray-500 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                          </div>
                          <input type="search" id="default-search" class="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Enter preferred programming language e.g Python, TypeScript, Javascript....."/>
                              <button type="submit" class="text-white absolute right-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Search</button>
                      </div>
                  </form>
              </div>
              <div className='explore-container flex justify-center items-center'>
                  {loading ? <Loading /> :
                      <div className='bargraph-container'>
                          <h1 className='text-3xl mb-4'>
                              Top Starred Repositories
                          </h1>
                          <Bar
                              data={state}
                              options={{
                                  plugins: {
                                      title: {
                                          display: false,
                                          text: "Top Starred Repositories"
                                      }
                                  }
                              }}
                          />
                      </div>
                  }
              </div>        
          </div>
      </>
  )
}

export default Explore