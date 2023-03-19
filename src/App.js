import React, { useEffect, useState } from 'react';
import { schoolApi } from './axios/index';
import { SchoolContext } from './schoolContext';
import Header from './Components/Header/index';
import Main from './Components/Main';
import Footer from './Components/Footer';
import './App.css'

const App = () => {
  const [schoolInfo, setSchoolInfo] = useState({})
  useEffect(() => {
    schoolApi.getInfoBySchool()
      .then(data => setSchoolInfo(data))
  }, [])
  return (
    <div>
      <SchoolContext.Provider value={schoolInfo}>
        <Header />
        <Main />
        <Footer />
      </SchoolContext.Provider>
    </div>
  );
};

export default App;