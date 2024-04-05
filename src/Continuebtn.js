import React from 'react'

const Continuebtn = ({buttonVisible,handleClick}) => {
  return (
    <div>
      {/* Default state of button After the user selection*/}
      {buttonVisible && (
        <button 
          onClick={() => {
            handleClick();
          }}
          className='bg-black py-3 px-10 rounded text-white mt-3'>
          Continue
        </button>
      )}
      {/* Default state of button before the user selection*/}
      {!buttonVisible && 
         <button 
           className='bg-black py-3 px-10 rounded text-white mt-3 opacity-35'>
           Continue
         </button>
      }
    </div>
  )
}

export default Continuebtn