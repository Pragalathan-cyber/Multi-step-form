import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import Continuebtn from './Continuebtn';

const Fourthpage = ({handleClick}) => {

  const [selectedValue, setSelectedValue] = useState('');
  const [buttonVisible, setButtonVisible] = useState(false);

  const handleSelect = (value) => {
    setSelectedValue(value);
    setButtonVisible(true);
  };

  return (
    <div className='mt-6 pb-5'>
         <h3 className='font-bold lg:text-6xl md:text-4xl text-2xl  text-center'>What is your math comfort level?</h3>
         <p className='text-gray-500 mt-4 lg:text-xl md:text-sm text-sm'>Choose the highest level you feel confident in - you can always adjust later.</p>

         <div className='flex justify-center gap-x-5  py-16'>
              <div onClick={() => handleSelect('Arthmetic')} className={selectedValue.includes('Arthmetic') ? ' h-44 w-44  border-gray-300 rounded border-2 shadow-lg cursor-default' : 'h-44 w-44 border border-gray-300 rounded cursor-default'}>

                <div>
                  <img src="/images/page7_1 .jpg" className='py-5 px-5 h-20 ml-7 mt-1' alt="" />
                  <p className='mt-2'>Arithmetic</p>
                  <p className='text-gray-400'>Introductory</p>
                </div>

              </div>

              <div onClick={() => handleSelect('Basic Algebra')} className={selectedValue.includes('Basic Algebra') ? ' h-44 w-44  border-gray-300 rounded border-2 shadow-lg cursor-default' : 'h-44 w-44 border border-gray-300 rounded cursor-default'}>

                <div>
                  <img src="/images/page7_2 .jpg" className='py-5 px-5 h-16 mx-auto mt-3' alt="" />
                  <p className='mt-4'>Basic Algebra</p>
                  <p className='text-gray-400 mt-1'>Foundations</p>
                </div>

              </div>

              <div onClick={() => handleSelect('intermediate Algebra')} className={selectedValue.includes('intermediate Algebra') ? ' h-44 w-44  border-gray-300 rounded border-2 shadow-lg cursor-default' : 'h-44 w-44 border border-gray-300 rounded cursor-default'}>

                <div className='p-2'>
                  <img src="/images/page7_3.jpg" className='py-5 px-2 mx-auto' alt="" />
                  <p className=''>Intermediate Algebra</p>
                  <p className='text-gray-400'>Intermediate</p>
                </div>

              </div>
              
              <div onClick={() => handleSelect('Calculus')} className={selectedValue.includes('Calculus') ? ' h-44 w-44  border-gray-300 rounded border-2 shadow-lg cursor-default' : 'h-44 w-44 border border-gray-300 rounded cursor-default'}>
                  <img src="/images/page7_4 .jpg" className='py-5 px-5 h-24' alt="" />
                  <p className='mb-1'>Calculus</p>
                  <p className='text-gray-400'>Advanced</p>
              </div>
         </div>
          <Link to={"/fifthpage"}>
                <Continuebtn
                    buttonVisible={buttonVisible}
                    handleClick={handleClick}
                />
           </Link>
    </div>
  )
}

export default Fourthpage