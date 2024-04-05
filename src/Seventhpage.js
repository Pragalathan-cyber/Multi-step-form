import React from 'react'

const Seventhpage = () => {
  return (
    <div className='mt-20'>
        <h1 className='text-2xl lg:text-4xl font-bold'>Learning paths based on your answers </h1>
        <p className='text-gray-500 mt-5'>Choose one to get started.You can switch anytime.</p>
        <div className="flex flex-wrap mt-20 gap-x-3 lg:justify-center  px-3">
           
            <div className='flex mt-10 border lg:w-96 border-gray-300 rounded p-5 relative'>
              <div className="absolute left-5 uppercase rounded-2xl px-4 py-1 text-black bg-yellow-500 " style={{top:'-10px',left:'30%'}}>most popular</div>
                  <p className='mt-5'><span className='font-bold'>Foundational Math </span><span>Build your foundational skills in algebra,geometry,and probability</span></p>
                  <img src="/images/page5_1.png" className=' md:w-44 md:h-44 relative bottom-3 mt-5' alt="" />
            </div>
            <div className='flex mt-10 border lg:w-96 border-gray-300 rounded p-5'>
                 <p className='mt-5'><span className='font-bold'>Mathematical Thinking </span><span>Build your foundational skills in algebra,geometry,adn probability.</span></p>
                 <img src="/images/page5_1.png" className=' md:w-44 md:h-44 relative bottom-3 mt-5' alt="" />
            </div>

        </div>
    </div>
  )
}

export default Seventhpage