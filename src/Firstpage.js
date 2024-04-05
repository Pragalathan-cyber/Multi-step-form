import React, { useState } from 'react';
import Continuebtn from './Continuebtn';
import { Link } from 'react-router-dom';



const Firstpage = ({ handleClick}) => {
  const [selectedValue, setSelectedValue] = useState('');
  const [buttonVisible, setButtonVisible] = useState(false);

  const handleSelect = (value) => {
    setSelectedValue(value);
    setButtonVisible(true);
  };



  return (
    <div>

        <div className='mt-6 pb-5'>
          <h3 className='font-bold lg:text-4xl md:text-4xl text-2xl  text-center'>Which describes you best?</h3>
          <p className='text-gray-500 mt-4 lg:text-xl md:text-sm text-sm'>This will help us personalize your experience.</p>

          <ul className=' firstpage-ul lg:w-2/5  md:w-3/4 sm:px-8 mt-16  mx-auto'>

                <li onClick={() => handleSelect('Student')} className={selectedValue.includes('Student') ? ' m-3  flex rounded cursor-default h-12 pb-12 pt-4 px-4 border-2 shadow-lg' : ' m-3 border flex rounded cursor-default h-12 pb-12 pt-4 px-4 '}>
                  <img src="/images/page1_1.png" className=' firstpage-img h-8 w-8 mr-3' alt="" />
                  <p className='text-black mt-2'>Student <span className='text-gray-400'>or soon to be enrolled</span></p>
                </li>

                <li onClick={() => handleSelect('Professional')} className={selectedValue.includes('Professional') ? '  m-3 flex rounded cursor-default h-12 pb-12 pt-4 px-4 border-2 shadow-lg' : ' m-3 border flex rounded cursor-default h-12 pb-12 pt-4 px-4'}>
                  <img src="/images/page1_2.png" className=' firstpage-img  w-8 h-8 mr-3' alt="" />
                  <p className='text-black mt-2'>Professional <span className='text-gray-400'>pursuing a career</span></p>
                </li>

                <li onClick={() => handleSelect('Parent')} className={selectedValue.includes('Parent') ? 'm-3 flex rounded cursor-default h-12 pb-12 pt-4 px-4 border-2 shadow-lg' : 'm-3 border flex rounded cursor-default h-12 pb-12 pt-4 px-4'}>
                  <img src="/images/page1_3.png" className=' firstpage-img w-8 h-8 mr-3' alt="" />
                  <p className='text-black mt-2'>Parent<span className='text-gray-400'> of a school age child</span></p>
                </li>

                <li onClick={() => handleSelect('lifelong learner')} className={selectedValue.includes('lifelong learner') ? 'm-3 flex rounded cursor-default h-12 pb-12 pt-4 px-4 border-2 shadow-lg' : 'm-3 border flex rounded cursor-default h-12 pb-12 pt-4 px-4'}>
                  <img src="/images/page1_4.png" className=' firstpage-img  w-8 h-8 mr-3' alt="" />
                  <p className='text-black mt-2'>Lifelong learner</p>
                </li>

                <li onClick={() => handleSelect('Teacher')} className={selectedValue.includes('Teacher') ? 'm-3 flex rounded cursor-default h-12 pb-12 pt-4 px-4 border-2 shadow-lg' : 'm-3 border flex rounded cursor-default h-12 pb-12 pt-4 px-4'}>
                  <img src="/images/page1_5.jpg" className=' firstpage-img  w-8 h-8 mr-3' alt="" />
                  <p className='text-black mt-2'>Teacher </p>
                </li>

                <li onClick={() => handleSelect('Other')} className={selectedValue.includes('Other') ? 'm-3 flex rounded cursor-default h-12 pb-12 pt-4 px-4 border-2 shadow-lg' : 'm-3 border flex rounded cursor-default h-12 pb-12 pt-4 px-4'}>
                  <img src="/images/page1_6.png" className=' firstpage-img  w-8 h-8 mr-3' alt="" />
                  <p className='text-black mt-2'>Other</p>
                </li>

          </ul>
        
          <Link to={"/secondpage"}>
                <Continuebtn
                    buttonVisible={buttonVisible}
                    handleClick={handleClick}
                />
           </Link>
        
        </div>
    </div>
  
  );
}

export default Firstpage;
