import React from 'react'
import Continuebtn from './Continuebtn'
import { Link } from 'react-router-dom';

const Thirdpage = ({handleClick}) => {
  return (
    <div>
        <div className='flex justify-center w-4/5 lg:ml-20 md:ml-16   py-5'>
            <div className="image-section">
              <img src="/images/page6_1.png" className='w-96 ' alt="" />
            </div>
            <div className='p-10 lg:pt-40 flex justify-center'>

                <div className=''>
                        <h3 className='font-bold text-2xl lg:text-2xl my-auto lg:mr-16'>You're in the right place</h3>
                        <div className="hidden md:flex flex-col w-full justify-start mt-5 ">
                            <p className='text-md lg:ml-32 mt-2 lg:text-md md:ml-1'>Brilliant gets you hands-on to help improve your professional</p>
                            <p className='text-md lg:ms-24 lg:ps-2 mt-2 lg:text-md md:ml-7'> skills and knowlede.You'll interact with concepts and solve </p>
                            <p className='text-md lg:ms-16 lg:ps-2 mt-2 lg:text-md md:ml-1'>fun problems in math,science, and computer science.</p>
                        </div>
                </div>
   
            </div>
        </div>
     
     <Link to='/fourthpage'>
        <button 
            onClick={() => {
                handleClick();
            }}
            className='bg-black py-3 px-10 rounded text-white mt-3'>
            Continue
        </button>
     </Link>

    </div>
  )
}

export default Thirdpage