import React from 'react'
import Header from './header'
// images svg
import terms from '../images/terms.svg';
import location from "../images/location-svgrepo-com.svg";
import globe from "../images/globe-svgrepo-com.svg";
import phone from "../images/phone-svgrepo-com.svg";


export const Contact = () => {
  return (
    <>
      <Header />
      <div className='contact-container flex justify-center items-center'>
        <div className='form-container w-60% mt-6 shadow-lg px-10 py-12'>
          <h1 className='contact-h1 text-center mb-8 text-3xl'>CONTACT US</h1>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-6 mb-6">
            <div className="mb-12 lg:mb-0 text-center mx-auto space-y-5">
              <img src={globe} alt="globe-icon" height="60px" width="60px" />
              <h6 className="font-medium">Nigeria</h6>
            </div>
            <div className="mb-12 lg:mb-0 text-center mx-auto space-y-5">
              <img src={location} alt="location-icon" height="60px" width="60px" className='ml-4' />
              <h6 className="font-medium">Lagos, LOS</h6>
            </div>
            <div className="mb-12 md:mb-0 text-center mx-auto space-y-5">
              <img src={phone} alt="phone-icon" height="60px" width="60px" className='ml-6' />
              <h6 className="font-medium">+234567768872</h6>
            </div>
          </div>
          <div className="max-w-[700px] mx-auto">
            <form>
              <div className="form-group mb-6">
                <input type="text" className="form-control block
                            w-full
                            px-3
                            py-1.5
                            text-base
                            font-normal
                            text-gray-700
                            bg-white bg-clip-padding
                            border border-solid border-gray-300
                            rounded
                            transition
                            ease-in-out
                            m-0
                            focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                  placeholder="Name" />
              </div>
              <div className="form-group mb-6">
                <input type="email" className="form-control block
                          w-full px-3 py-1.5 text-base font-normal text-gray-700
                          bg-white bg-clip-padding border border-solid border-gray-300
                          rounded transition ease-in-outm-0
                          focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                  placeholder="Email address" />

              </div>
              <div className="form-group mb-6">
                <textarea className="
                          form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding
                          border border-solid border-gray-300 rounded transition ease-in-out m-0
                          focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                  rows="3" placeholder="Message">
                </textarea>
              </div>
              <div className='text-center'>
                <button type="submit" className="submit-button w-1/2 px-6 py-3  text-white
                        font-medium text-base leading-tight uppercase rounded shadow-md 
                        hover:shadow-lg  focus:shadow-lg focus:outline-none focus:ring-0 
                        active:shadow-lg transition duration-150 ease-in-out text-center">
                  Send
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  )
}

export default Contact