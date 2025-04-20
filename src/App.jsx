import React from 'react';
import PersonalInfo from './PersonalInfo';  
import Education from './Education';
import Skills from './skills';
import Work from './Work';
const App = () => {
  return (
    <div className='mainBox'>
      <PersonalInfo /> 
      <Education />
      <Skills />
      <Work />
    </div>
  );
};

export default App;