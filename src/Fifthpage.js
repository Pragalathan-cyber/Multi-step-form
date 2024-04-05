import React from 'react'
import { Link } from 'react-router-dom';


const Fifthpage = ({handleClick}) => {
  return (
    <div>
      
         <div className='flex justify-center w-4/5  lg:ml-20 md:ml-16   py-5'>
            <div className="image-section hidden md:block">
               <img src="/images/page3_1.png" className='fifith-img lg:w-80  mt-10' alt="" />
            </div>
            <div className='p-10 mt-16'>

                <div className=''>
                        <h3 className='font-bold text-2xl lg:text-2xl ml-12  lg:mr-16 lg:ml-0'>You're on your way!</h3>
                        <div className="icons flex w-48 lg:ml-7  mt-5">
                            <div className="five-pointed-star"></div>
                            <div className="five-pointed-star"></div>
                            <div className="five-pointed-star"></div>
                            <div className="five-pointed-star"></div>
                            <div className="five-pointed-star"></div>
                        </div>
                        <div className="flex flex-col w-full justify-start mt-5 relative left-8">
                            <p className='para-fifth w-full lg:w-96 md:text-sm'> <span className='lg:mr-20 mr-8'>"Through its engaging and well-structured </span><span className='ml-2'>courses,Brilliant has taught me mathematical concepts</span> <span className='mr-3'>that i previously struggled to understand. i now feel</span> <span className='mr-1'>confident approaching both technical job interviews </span> <span className='mr-16'>and real world problem solving situations."</span></p>
                        </div>
                        <p className='italic ... lg:mr-60 mt-5'>- Jacob S.</p>
                </div>
   
            </div>
        </div>

        <Link to={'/sixthpage'}>
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

export default Fifthpage