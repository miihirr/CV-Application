import React from 'react';
import PersonalInfo from './PersonalInfo';  
import Education from './education';
const App = () => {
  return (
    <div className='mainBox'>
      <PersonalInfo /> 
      <Education />
    </div>
  );
};

export default App;