import React, { useState, useEffect } from 'react';

import './App.css';
import RoutePath from './RoutePath';
import PreLoader from './Components/Pages/PreLoader';

function App() {
  let [update, setUpdate] = useState(true)

  useEffect(() => {
    const timeout = setTimeout(() => {
      setUpdate(false)
    }, 5200);

    return () => clearTimeout(timeout);
  }, [])
  return (
    <>
      {update ? (
        <PreLoader />
      ) : (
        <div className="App">
          <RoutePath />
        </div>
      )}
    </>
  );
}

export default App;
