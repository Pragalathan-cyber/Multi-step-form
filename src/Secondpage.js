import React, { useState } from 'react'
import Continuebtn from './Continuebtn';
import { Link } from 'react-router-dom';

const Secondpage = ({handleClick}) => {
    const [selectedValue, setSelectedValue] = useState('');
    const [buttonVisible, setButtonVisible] = useState(false);
  
    const handleSelect = (value) => {
      setSelectedValue(value);
      setButtonVisible(true);
    };
  

  return (
    <div className='mt-6 pb-5'>
      <h3 className='font-bold lg:text-6xl md:text-4xl text-2xl  text-center'>Which are you most interested in?</h3>
      <p className='text-gray-500 mt-4 lg:text-xl md:text-sm text-sm'>Choose just one.This will help us get you started (but won't limit your experience).</p>

      <ul className=' firstpage-ul lg:w-2/5  md:w-3/4 sm:px-8 mt-16  mx-auto'>

            <li onClick={() => handleSelect('Learning')} className={selectedValue.includes('Learning') ? ' m-3  flex rounded cursor-default h-12 pb-12 pt-4 px-4 border-2 shadow-lg' : ' m-3 border flex rounded cursor-default h-12 pb-12 pt-4 px-4 '}>
              <img src="/images/page2_1.png" className=' firstpage-img h-8 w-8 mr-2' alt="" />
              <p className='text-gray-700 mt-2'>Learning specific skills to advance my career.</p>
            </li>

            <li onClick={() => handleSelect('Exploring')} className={selectedValue.includes('Exploring') ? '  m-3 flex rounded cursor-default h-12 pb-12 pt-4 px-4 border-2 shadow-lg' : ' m-3 border flex rounded cursor-default h-12 pb-12 pt-4 px-4'}>
              <img src="/images/page2_2.png" className=' firstpage-img  w-8 h-8 mr-2' alt="" />
              <p className='text-gray-700  mt-2'>Exploring new topics i'm interest in</p>
            </li>

            <li onClick={() => handleSelect('Refreshing')} className={selectedValue.includes('Refreshing') ? 'm-3 flex rounded cursor-default h-12 pb-12 pt-4 px-4 border-2 shadow-lg' : 'm-3 border flex rounded cursor-default h-12 pb-12 pt-4 px-4'}>
              <img src="/images/page2_3.png" className=' firstpage-img w-8 h-8 mr-3' alt="" />
              <p className='text-gray-700  mt-2'>Refreshing my math foundations</p>
            </li>

            <li onClick={() => handleSelect('Exercising brain')} className={selectedValue.includes('Exercising brain') ? 'm-3 flex rounded cursor-default h-12 pb-12 pt-4 px-4 border-2 shadow-lg' : 'm-3 border flex rounded cursor-default h-12 pb-12 pt-4 px-4'}>
              <img src="/images/page2_4.png" className=' firstpage-img  w-8 h-8 mr-3' alt="" />
              <p className='text-gray-700  mt-2'>Exercising my brain to stay sharp</p>
            </li>

            <li onClick={() => handleSelect('Something else')} className={selectedValue.includes('Something else') ? 'm-3 flex rounded cursor-default h-12 pb-12 pt-4 px-4 border-2 shadow-lg' : 'm-3 border flex rounded cursor-default h-12 pb-12 pt-4 px-4'}>
              <img src="/images/page2_5.png" className=' firstpage-img  w-8 h-8 mr-3' alt="" />
              <p className='text-gray-700  mt-2'>Something else</p>
            </li>

      </ul>
      <Link to={'/thirdpage'}>
          <Continuebtn
              buttonVisible={buttonVisible}
              handleClick={handleClick}
          />
      </Link>
 
    </div>
  )
}

export default Secondpage