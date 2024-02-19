import React,{ useState } from 'react';
import './App.css';
import UseContext from './cComponents/UseContext';

export const ToggleTheme = React.createContext()

function App() {

  const [state,setState] = useState(true)

  const handleToggle = ()=>{
    setState(state=>!state)
  }

  return (
    <ToggleTheme.Provider value={state}>
      <button onClick={handleToggle}>Light</button>
      <UseContext/>
    </ToggleTheme.Provider>
  );
}

export default App;