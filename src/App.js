import React, { useState } from 'react';
import {Routes,Route,useLocation} from "react-router-dom"
import './App.css';
import Firstpage from './Firstpage'
import Secondpage from './Secondpage';
import Thirdpage from './Thirdpage';
import Fourthpage from './Fourthpage';
import Fifthpage from './Fifthpage';
import Sixthpage from './Sixthpage';



function App() {
  const [progress, setProgress] = useState(0);
  const [isSixthPage, setIsSixthPage] = useState(false);
  const location = useLocation();



  const handleClick = () => {
    if (progress < 100) {
      setProgress(prevProgress => prevProgress + (100 / 5));
    }
  };

  // Check if the current path is the sixthpage
  React.useEffect(() => {
     setIsSixthPage(location.pathname === '/sixthpage');
  }, [location]);
  

  return (
    <div className="App">

      {!isSixthPage && (
        <div className="progress-container bg-slate-300 lg:w-4/5 md:w-11/12">
          <div className="progress-bar" style={{ width: `${progress}%` }}></div>
        </div>
      )}


      <Routes>
        <Route path='/' element={<Firstpage handleClick={handleClick}  />}/>
        <Route path='/secondpage' element={<Secondpage handleClick={handleClick} />}/>
        <Route path='/thirdpage' element={<Thirdpage handleClick={handleClick} />}/>
        <Route path='/fourthpage' element={<Fourthpage handleClick={handleClick} />}/>
        <Route path='/fifthpage' element={<Fifthpage handleClick={handleClick} />}/>
        <Route path='/sixthpage' element={<Sixthpage handleClick={handleClick} />}/>
      </Routes>

    </div>
  );
}

export default App;
