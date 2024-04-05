import React, { useEffect, useState } from 'react'
import Loader from './Loader';
import Seventhpage from './Seventhpage';

const Sixthpage = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading delay
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 4000);

    // Cleanup the timer to avoid memory leaks
    return () => clearTimeout(timer);
  }, []);
  return (
    <div>
    <div>
      {isLoading ? (
        // Show loading page for the first 4 seconds
        <Loader/>
      ) : (
        // After 4 seconds, show the main page
        <Seventhpage/>
      )}
    </div>
        
        
    </div>
  )
}

export default Sixthpage