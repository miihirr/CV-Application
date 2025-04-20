import React from 'react';
import PersonalInfo from './PersonalInfo';  
import Education from './Education';
import Skills from './skills';

const App = () => {
  return (
    <div className='mainBox'>
      <PersonalInfo /> 
      <Education />
      <Skills />
    </div>
  );
};

export default App;